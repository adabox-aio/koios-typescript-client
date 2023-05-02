// import {getLimiter} from "../../utils/limiter";
// import Bottleneck from "bottleneck";
import {Options} from "../../factory/options/Options";
import fetch, {RequestInit, Response} from "node-fetch";
import * as queryString from "querystring";
import {KoiosTimeoutError} from "./Errors";

export class BaseService {

    // private limiter: Bottleneck = getLimiter()
    private readonly retriesCount: number = 5
    private readonly baseUrl: string = ''
    private readonly timeoutMilliSec: number = 60

    public constructor(baseUrl?: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl
        }
    }

    private getReadTimeoutSec(): number {
        let readTimeoutSec = 60;
        const strReadTimeoutSec: string | undefined = process.env['KOIOS_READ_TIMEOUT_SEC'];
        if (strReadTimeoutSec && strReadTimeoutSec.trim() !== "") {
            readTimeoutSec = parseInt(strReadTimeoutSec);
        }
        return readTimeoutSec >= 1 ? readTimeoutSec : this.timeoutMilliSec;
    }

    private getMaxRetries(): number {
        let maxRetries = 5
        const strMaxRetries: string | undefined = process.env['KOIOS_MAX_RETRIES'];
        if (strMaxRetries && strMaxRetries.trim() !== "") {
            maxRetries = parseInt(strMaxRetries);
        }
        return maxRetries >= 1 ? maxRetries : this.retriesCount;
    }

    public get(url: string): Promise<Response> {
        let params: RequestInit = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        }

        return this.execute(this.baseUrl + url, params,{ timeoutInSeconds: this.getReadTimeoutSec(), tries: this.getMaxRetries() });
    }

    public post(url: string, body: any): Promise<Response> {

        function resolveContentType(body: any): string {
            return (body && (body.constructor === String || body.constructor === Uint8Array)) ? 'application/cbor' : 'application/json'
        }

        function resolveBody(body: any): string | Buffer | null {
            if (!body) {
                return null
            }
            if (body.constructor === String) {
                return Buffer.from(body, 'hex');
            }
            else if (body.constructor === Uint8Array) {
                return Buffer.from(body);
            }
            else {
                return JSON.stringify(body)
            }
        }

        let params: RequestInit = {
            headers: {
                'accept': 'application/json',
                'Content-Type': resolveContentType(body)
            },
            method: "POST",
            body: resolveBody(body)
        }

        return this.execute(this.baseUrl + url, params,{ timeoutInSeconds: this.getReadTimeoutSec(), tries: this.getMaxRetries() });
    }

    public async execute(url: string, init?: RequestInit, { timeoutInSeconds, tries } = { timeoutInSeconds: 10, tries: 3 }): Promise<Response> {
        let response: Response;
        let controller: AbortController;

        for (let n = 0; n < tries; n++) {
            let timeoutID;
            try {
                controller = new AbortController();
                timeoutID = setTimeout(() => {
                    controller.abort(); // break current loop
                }, timeoutInSeconds * 1000);
                response = await fetch(url, { ...init, signal: controller.signal });
                clearTimeout(timeoutID);
                return response;
            } catch (error) {
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
                if (!(error instanceof DOMException)) {
                    // Only catch abort exceptions here. All the others must be handled outside this function.
                    throw error; // TODO KoiosHttpError ?
                }
            }
        }

        // None of the tries finished in time.
        throw new KoiosTimeoutError(`Request timed out (tried it ${tries} times, but none finished within ${timeoutInSeconds} second(s)).`, url);
    }

    optionsToQueryParams(options?: Options): string {
        let paramsMap;
        if (options && options.getOptions().length > 0) {
            paramsMap = options.toMap();
            return `?${queryString.stringify(paramsMap)}`;
        }
        return ''
    }

    public buildBody(key: string, value: any, afterBlockHeight?: number, epochNo?: number) {
        const obj: any = {}
        obj[key] = value
        if (afterBlockHeight) {
            obj['_after_block_height'] = afterBlockHeight
        }
        if (epochNo) {
            obj['_epoch_no'] = epochNo
        }
        return obj
    }
}