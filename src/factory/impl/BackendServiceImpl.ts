import { BackendService } from "../BackendService";
import { NetworkService } from "../../api/network/NetworkService";
import { NetworkServiceImpl } from "../../api/network/impl/NetworkServiceImpl";
import { EpochService } from "../../api/epoch/EpochService";
import { EpochServiceImpl } from "../../api/epoch/impl/EpochServiceImpl";
import { BlockService } from "../../api/block/BlockService";
import { BlockServiceImpl } from "../../api/block/impl/BlockServiceImpl";
import { TransactionsService } from "../../api/transactions/TransactionsService";
import { TransactionsServiceImpl } from "../../api/transactions/impl/TransactionsServiceImpl";
import { AddressService } from "../../api/address/AddressService";
import { AddressServiceImpl } from "../../api/address/impl/AddressServiceImpl";
import { AssetService } from "../../api/asset/AssetService";
import { AssetServiceImpl } from "../../api/asset/impl/AssetServiceImpl";
import { PoolService } from "../../api/pool/PoolService";
import { PoolServiceImpl } from "../../api/pool/impl/PoolServiceImpl";
import { ScriptService } from "../../api/script/ScriptService";
import { ScriptServiceImpl } from "../../api/script/impl/ScriptServiceImpl";
import { AccountService } from "../../api/account/AccountService";
import { AccountServiceImpl } from "../../api/account/impl/AccountServiceImpl";
import { ApiVersion } from "../ApiVersion";
import { OperationType } from "../OperationType";

/**

 Backend Service Implementation
 */
export class BackendServiceImpl implements BackendService {

    private readonly networkService: NetworkService;
    private readonly epochService: EpochService;
    private readonly blockService: BlockService;
    private readonly transactionsService: TransactionsService;
    private readonly addressService: AddressService;
    private readonly assetService: AssetService;
    private readonly poolService: PoolService;
    private readonly scriptService: ScriptService;
    private readonly accountService: AccountService;

    public static byBaseUrl(baseUrl: string): BackendServiceImpl {
        return new BackendServiceImpl(baseUrl);
    }

    public static byOperationTypeAndVersion(operationType: OperationType, apiVersion: ApiVersion): BackendServiceImpl {
        return new BackendServiceImpl(operationType.getBaseUrl() + apiVersion.getVersion() + "/");
    }

    /**
     Backend Service Implementation Constructor
     @param baseUrl baseUrl
     */
    constructor(baseUrl: string) {
        console.log(`Koios URL: ${baseUrl}`);
        this.networkService = new NetworkServiceImpl(baseUrl);
        this.epochService = new EpochServiceImpl(baseUrl);
        this.blockService = new BlockServiceImpl(baseUrl);
        this.transactionsService = new TransactionsServiceImpl(baseUrl);
        this.addressService = new AddressServiceImpl(baseUrl);
        this.assetService = new AssetServiceImpl(baseUrl);
        this.poolService = new PoolServiceImpl(baseUrl);
        this.scriptService = new ScriptServiceImpl(baseUrl);
        this.accountService = new AccountServiceImpl(baseUrl);
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