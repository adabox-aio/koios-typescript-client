export class KoiosHttpError extends Error {

    private readonly statusCode: number
    private readonly statusText: string
    private readonly url: string

    constructor(message: string, statusCode: number, statusText: string, url: string) {
        super(message);
        this.statusCode = statusCode
        this.statusText = statusText
        this.url = url
    }

    public getStatusCode(): number {
        return this.statusCode
    }

    public getStatusText(): string {
        return this.statusText
    }

    public getUrl(): string {
        return this.url
    }
}

export class KoiosTimeoutError extends Error {

    private readonly url: string

    constructor(message: string, url: string) {
        super(message);
        this.url = url
    }

    public getUrl(): string {
        return this.url
    }
}

export default {
    KoiosHttpError,
    KoiosTimeoutError
}