import { BackendService } from "@app/factory/BackendService";
import { NetworkService } from "@app/api/network/NetworkService";
import { NetworkServiceImpl } from "@app/api/network/impl/NetworkServiceImpl";
import { EpochService } from "@app/api/epoch/EpochService";
import { EpochServiceImpl } from "@app/api/epoch/impl/EpochServiceImpl";
import { BlockService } from "@app/api/block/BlockService";
import { BlockServiceImpl } from "@app/api/block/impl/BlockServiceImpl";
import { TransactionsService } from "@app/api/transactions/TransactionsService";
import { TransactionsServiceImpl } from "@app/api/transactions/impl/TransactionsServiceImpl";
import { AddressService } from "@app/api/address/AddressService";
import { AddressServiceImpl } from "@app/api/address/impl/AddressServiceImpl";
import { AssetService } from "@app/api/asset/AssetService";
import { AssetServiceImpl } from "@app/api/asset/impl/AssetServiceImpl";
import { PoolService } from "@app/api/pool/PoolService";
import { PoolServiceImpl } from "@app/api/pool/impl/PoolServiceImpl";
import { ScriptService } from "@app/api/script/ScriptService";
import { ScriptServiceImpl } from "@app/api/script/impl/ScriptServiceImpl";
import { AccountService } from "@app/api/account/AccountService";
import { AccountServiceImpl } from "@app/api/account/impl/AccountServiceImpl";
import { ApiVersion } from "@app/factory/ApiVersion";
import { OperationType } from "@app/factory/OperationType";

/**

 Backend Service Implementation
 */
export class BackendServiceImpl implements BackendService {

    private readonly baseUrl: string;
    private readonly networkService: NetworkService;
    private readonly epochService: EpochService;
    private readonly blockService: BlockService;
    private readonly transactionsService: TransactionsService;
    private readonly addressService: AddressService;
    private readonly assetService: AssetService;
    private readonly poolService: PoolService;
    private readonly scriptService: ScriptService;
    private readonly accountService: AccountService;

    public static byBaseUrl(baseUrl: string, apiToken?: string): BackendServiceImpl {
        return new BackendServiceImpl(baseUrl, apiToken);
    }

    public static byOperationTypeAndVersion(operationType: OperationType, apiVersion: ApiVersion, apiToken?: string): BackendServiceImpl {
        return new BackendServiceImpl(operationType.getBaseUrl() + apiVersion.getVersion() + "/", apiToken);
    }

    /**
     Backend Service Implementation Constructor
     @param {string} baseUrl
     @param {string} [apiToken] - optional api token to use the koios free tier instead of the public tier
     */
    constructor(baseUrl: string, apiToken?: string) {
        console.log(`Koios URL: ${baseUrl}`);
        this.baseUrl = baseUrl;
        this.networkService = new NetworkServiceImpl(baseUrl, apiToken);
        this.epochService = new EpochServiceImpl(baseUrl, apiToken);
        this.blockService = new BlockServiceImpl(baseUrl, apiToken);
        this.transactionsService = new TransactionsServiceImpl(baseUrl, apiToken);
        this.addressService = new AddressServiceImpl(baseUrl, apiToken);
        this.assetService = new AssetServiceImpl(baseUrl, apiToken);
        this.poolService = new PoolServiceImpl(baseUrl, apiToken);
        this.scriptService = new ScriptServiceImpl(baseUrl, apiToken);
        this.accountService = new AccountServiceImpl(baseUrl, apiToken);
    }

    getBaseUrl(): string {
        return this.baseUrl
    }

    getNetworkService(): NetworkService {
        return this.networkService;
    }

    getEpochService() {
        return this.epochService;
    }

    getBlockService() {
        return this.blockService;
    }

    getTransactionsService() {
        return this.transactionsService;
    }

    getAddressService() {
        return this.addressService;
    }

    getAssetService() {
        return this.assetService;
    }

    getPoolService() {
        return this.poolService;
    }

    getScriptService() {
        return this.scriptService;
    }

    getAccountService() {
        return this.accountService;
    }
}