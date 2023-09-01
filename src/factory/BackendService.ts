import { NetworkService } from '../api/network/NetworkService';
import { EpochService } from "../api/epoch/EpochService";
import { BlockService } from "../api/block/BlockService";
import { TransactionsService } from '../api/transactions/TransactionsService';
import { AddressService } from '../api/address/AddressService';
import { AssetService } from '../api/asset/AssetService';
import { PoolService } from '../api/pool/PoolService';
import { ScriptService } from '../api/script/ScriptService';
import { AccountService } from '../api/account/AccountService';

/**
 * Backend Service
 */
export interface BackendService {
    /**
     * Get Network Service
     *
     * @return {@link NetworkService}
     */
    getNetworkService(): NetworkService;

    /**
     * Get Epoch Service
     * @return {@link EpochService}
     */
    getEpochService(): EpochService;

    /**
     * Get Block Service
     * @return {@link BlockService}
     */
    getBlockService(): BlockService;

    /**
     * Get Transactions Service
     * @return {@link TransactionsService}
     */
    getTransactionsService(): TransactionsService;

    /**
     * Get Address Service
     * @return {@link AddressService}
     */
    getAddressService(): AddressService;

    /**
     * Get Asset Service
     * @return {@link AssetService}
     */
    getAssetService(): AssetService;

    /**
     * Get Pool Service
     * @return {@link PoolService}
     */
    getPoolService(): PoolService;

    /**
     * Get Script Service
     * @return {@link ScriptService}
     */
    getScriptService(): ScriptService;

    /**
     * Get Account Service
     * @return {@link AccountService}
     */
    getAccountService(): AccountService;
}