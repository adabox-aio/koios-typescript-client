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
     * @returns {@link BackendService}
     */
    public static getKoiosMainnetService(apiVersion?: ApiVersion): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_MAINNET, apiVersion);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_MAINNET, ApiVersion.VERSION_0);
    }

    /**
     * Get Guild Network BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @returns {@link BackendService}
     */
    public static getKoiosGuildService(apiVersion?: ApiVersion): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_GUILD, apiVersion);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_GUILD, ApiVersion.VERSION_0);
    }

    /**
     * Get Preview Network BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @returns {@link BackendService}
     */
    public static getKoiosPreviewService(apiVersion?: ApiVersion): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREVIEW, apiVersion);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREVIEW, ApiVersion.VERSION_0);
    }

    /**
     * Get Preprod Network BackendService for Koios By Version
     *
     * @param apiVersion API Version
     * @returns {@link BackendService}
     */
    public static getKoiosPreprodService(apiVersion?: ApiVersion): BackendService {
        if (apiVersion) {
            return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREPROD, apiVersion);
        }
        return <BackendService>BackendServiceImpl.byOperationTypeAndVersion(OperationType.KOIOS_PREPROD, ApiVersion.VERSION_0);
    }

    /**
     * Get BackendService for Koios
     *
     * @param baseUrl base URL for Koios
     * @returns {@link BackendService}
     */
    public static getCustomRPCService(baseUrl: string): BackendService {
        return new BackendServiceImpl(baseUrl);
    }
}

export default BackendFactory