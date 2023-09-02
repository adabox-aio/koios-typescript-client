import { BaseService } from '../../base/BaseService';
import { PoolService } from '../PoolService';
import { Options } from '../../../factory/options/Options';

/**
 * Pool Service Implementation
 */
export class PoolServiceImpl extends BaseService implements PoolService {

    async getPoolList(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`pool_list${this.optionsToQueryParams(options)}`);
    }

    async getPoolInformation(poolBech32Ids: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`pool_info${this.optionsToQueryParams(options)}`, this.buildBody("_pool_bech32_ids", poolBech32Ids));
    }

    async getPoolStakeSnapshot(poolBech32: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_pool_bech32", poolBech32)
        return await this.get(`pool_stake_snapshot${this.optionsToQueryParams(options)}`);
    }

    async getPoolDelegatorsList(poolBech32: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_pool_bech32", poolBech32)
        return await this.get(`pool_delegators${this.optionsToQueryParams(options)}`);
    }

    async getPoolDelegatorsHistory(poolBech32: string, epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_pool_bech32", poolBech32)
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return await this.get(`pool_delegators_history${this.optionsToQueryParams(options)}`);
    }

    async getPoolBlocks(poolBech32: string, epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_pool_bech32", poolBech32)
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return await this.get(`pool_blocks${this.optionsToQueryParams(options)}`);
    }

    async getPoolStakeBlockAndRewardHistory(poolBech32: string, epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_pool_bech32", poolBech32)
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return await this.get(`pool_history${this.optionsToQueryParams(options)}`);
    }

    async getPoolUpdatesHistory(poolBech32: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_pool_bech32", poolBech32)
        return await this.get(`pool_updates${this.optionsToQueryParams(options)}`);
    }

    async getPoolRelays(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`pool_relays${this.optionsToQueryParams(options)}`);
    }

    async getPoolMetadata(poolBech32Ids: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`pool_metadata${this.optionsToQueryParams(options)}`, this.buildBody("_pool_bech32_ids", poolBech32Ids));
    }
}