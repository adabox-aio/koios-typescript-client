/**
 * Operation Type
 */
export class OperationType {

    /**
     * Mainnet
     */
    public static readonly KOIOS_MAINNET: OperationType = new OperationType("https://api.koios.rest/api/");
    /**
     * GuildNet
     */
    public static readonly KOIOS_GUILD: OperationType = new OperationType("https://guild.koios.rest/api/");
    /**
     * Preview
     */
    public static readonly KOIOS_PREVIEW: OperationType = new OperationType("https://preview.koios.rest/api/");
    /**
     * PreProd
     */
    public static readonly KOIOS_PREPROD: OperationType = new OperationType("https://preprod.koios.rest/api/");

    private readonly baseUrl: string;

    private constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public getBaseUrl(): string {
        return this.baseUrl;
    }
}