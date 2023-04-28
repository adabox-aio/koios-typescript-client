import {getLimiter} from "../../utils/limiter";
import Bottleneck from "bottleneck";
import {Options} from "../../factory/options/Options";
import fetch from "node-fetch";

const querystring = require('querystring');

export class BaseService {

    private limiter: Bottleneck = getLimiter()
    private readonly retriesCount: number = 5
    private readonly baseUrl: string = ''
    private timeoutMilliSec: number = this.getReadTimeoutSec() * 1000

    public constructor(baseUrl?: string) {
        if (baseUrl) {
            this.baseUrl = baseUrl
        }
    }

    private getReadTimeoutSec(): number {
        let readTimeoutSec = 60;
        const strReadTimeoutSec = process.env.KOIOS_READ_TIMEOUT_SEC;
        if (strReadTimeoutSec && strReadTimeoutSec.trim() !== "") {
            readTimeoutSec = parseInt(strReadTimeoutSec);
        }
        return readTimeoutSec >= 1 ? readTimeoutSec : 60;
    }

    private getMaxRetries(): number {
        let maxRetries = 5
        const strMaxRetries = process.env.KOIOS_MAX_RETRIES;
        if (strMaxRetries && strMaxRetries.trim() !== "") {
            maxRetries = parseInt(strMaxRetries);
        }
        return maxRetries >= 1 ? maxRetries : this.retriesCount;
    }

    public get(url: string): Promise<any> {
        return this.execute(this.baseUrl + url, "GET", this.getMaxRetries(), 1000, this.timeoutMilliSec)
    }

    public post(url: string, body: any): Promise<any> {
        return this.execute(this.baseUrl + url, "POST", this.getMaxRetries(), 1000, this.timeoutMilliSec, body)
    }

    private execute(url: string, method: string, retries: number, retryDelay: number, timeout: number, body?): Promise<any> {

        function resolveContentType(body) {
            return (body && (body.constructor === String || body.constructor === Uint8Array)) ? 'application/cbor' : 'application/json'
        }

        function resolveBody(body) {
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

        return new Promise((resolve, reject) => {
            // check for timeout
            if (timeout) setTimeout(() => reject('error: timeout'), timeout);

            const wrapper = (n) => {
                fetch(url, {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': resolveContentType(body)
                    },
                    method,
                    body: resolveBody(body),
                }).then(res => {
                    resolve(res) // TODO Check Empty
                }).catch(async (err) => {
                    if (n > 0) {
                        await this.delay(retryDelay);
                        wrapper(--n);
                    }
                    else {
                        reject(err);
                    }
                });
            };

            wrapper(retries);
        });
    }

    optionsToQueryParams(options?: Options): string {
        let paramsMap;
        if (options && options.getOptions().length > 0) {
            paramsMap = options.toMap();
            return `?${querystring.stringify(paramsMap)}`;
        }
        return ''
    }

    private async delay(ms: number) {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
    }

    public buildBody(key: string, value: any, afterBlockHeight?: number, epochNo?: number) {
        const obj = {}
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