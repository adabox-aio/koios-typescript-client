import { BackendService } from './BackendService';
import { BackendServiceImpl } from './impl/BackendServiceImpl';
import { ApiVersion } from './ApiVersion';
import { OperationType } from "./OperationType";

/**
 * Backend Factory
 */
export class BackendFactory {

    /**
     * Get Mainnet BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @param {string} [apiToken] - optional api token to use the koios free tier instead of the public tier
     * @returns {@link BackendService}
     */
    public static getKoiosMainnetService(apiVersion?: ApiVersion, apiToken?: string): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_MAINNET, apiVersion, apiToken);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_MAINNET, ApiVersion.VERSION_0, apiToken);
    }

    /**
     * Get Guild Network BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @param {string} [apiToken] - optional api token to use the koios free tier instead of the public tier
     * @returns {@link BackendService}
     */
    public static getKoiosGuildService(apiVersion?: ApiVersion, apiToken?: string): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_GUILD, apiVersion, apiToken);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_GUILD, ApiVersion.VERSION_0, apiToken);
    }

    /**
     * Get Preview Network BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @param {string} [apiToken] - optional api token to use the koios free tier instead of the public tier
     * @returns {@link BackendService}
     */
    public static getKoiosPreviewService(apiVersion?: ApiVersion, apiToken?: string): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREVIEW, apiVersion, apiToken);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREVIEW, ApiVersion.VERSION_0, apiToken);
    }

    /**
     * Get Preprod Network BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @param {string} [apiToken] - optional api token to use the koios free tier instead of the public tier
     * @returns {@link BackendService}
     */
    public static getKoiosPreprodService(apiVersion?: ApiVersion, apiToken?: string): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREPROD, apiVersion, apiToken);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREPROD, ApiVersion.VERSION_0, apiToken);
    }

    /**
     * Get BackendService for Koios
     *
     * @param baseUrl base URL for Koios
     * @param {string} [apiToken] - optional api token to use the koios free tier instead of the public tier
     * @returns {@link BackendService}
     */
    public static getCustomRPCService(baseUrl: string, apiToken?: string): BackendService {
        return BackendServiceImpl.byBaseUrl(baseUrl, apiToken);
    }
}

export default BackendFactory