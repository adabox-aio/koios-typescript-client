export class ApiVersion {

    public static readonly VERSION_0: ApiVersion = new ApiVersion("v0");

    private readonly version: string;

    private constructor(version: string) {
        this.version = version;
    }

    public getVersion(): string {
        return this.version;
    }
}