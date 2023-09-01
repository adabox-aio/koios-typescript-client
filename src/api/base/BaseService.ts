// import {getLimiter} from "../../utils/limiter";
// import Bottleneck from "bottleneck";
import { Options } from "../../factory/options/Options";
import * as queryString from "querystring";
import {KoiosHttpError, KoiosTimeoutError} from "./Errors";

export class BaseService {

    // private limiter: Bottleneck = getLimiter()
    private readonly baseUrl: string = ''

    public constructor(baseUrl?: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl
        }
    }

    private getReadTimeoutSec(): number {
        let readTimeoutSec = 300;
        const strReadTimeoutSec: string | undefined = process.env['KOIOS_READ_TIMEOUT_SEC'];
        if (strReadTimeoutSec && strReadTimeoutSec.trim() !== "") {
            readTimeoutSec = parseInt(strReadTimeoutSec);
        }
        return readTimeoutSec >= 1 ? readTimeoutSec : 300;
    }

    private getMaxRetries(): number {
        let maxRetries = 5
        const strMaxRetries: string | undefined = process.env['KOIOS_MAX_RETRIES'];
        if (strMaxRetries && strMaxRetries.trim() !== "") {
            maxRetries = parseInt(strMaxRetries);
        }
        return maxRetries >= 1 ? maxRetries : 5;
    }

    public async get(url: string): Promise<any> {
        const params: RequestInit = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        }

        return await this.execute(this.baseUrl + url, params, {
            timeoutInSeconds: this.getReadTimeoutSec(),
            tries: this.getMaxRetries()
        });
    }

    public async post(url: string, body: any): Promise<any> {

        function resolveContentType(requestBody: any): string {
            return (requestBody && (requestBody.constructor === String || requestBody.constructor === Uint8Array)) ? 'application/cbor' : 'application/json'
        }

        function resolveBody(requestBody: any): string | Buffer | null {
            if (!requestBody) {
                return null
            }
            if (requestBody.constructor === String) {
                return Buffer.from(requestBody, 'hex');
            }
            else if (requestBody.constructor === Uint8Array) {
                return Buffer.from(requestBody);
            }
            else {
                return JSON.stringify(requestBody)
            }
        }

        const params: RequestInit = {
            headers: {
                Accept: 'application/json',
                'Content-Type': resolveContentType(body)
            },
            method: "POST",
            body: resolveBody(body)
        }

        return await this.execute(this.baseUrl + url, params, {
            timeoutInSeconds: this.getReadTimeoutSec(),
            tries: this.getMaxRetries()
        });
    }

    public async execute(url: string, init?: RequestInit, {timeoutInSeconds, tries} = {
        timeoutInSeconds: 10,
        tries: 3
    }): Promise<any> {
        let controller: AbortController;
        let response: Response;
        let timeoutID;

        for (let n = 0; n < tries; n++) {
            try {
                controller = new AbortController();
                timeoutID = setTimeout(() => {
                    controller.abort(); // break current loop
                }, timeoutInSeconds * 1000);
                response = await fetch(url, {...init, signal: controller.signal});
                clearTimeout(timeoutID);
                if (!response.ok) {
                    return new KoiosHttpError(await response.text(), response.status, response.statusText, response.url)
                }
                return await response.json()
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

    public buildBody(key: string, value: any, afterBlockHeight?: number, epochNo?: number): any {
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