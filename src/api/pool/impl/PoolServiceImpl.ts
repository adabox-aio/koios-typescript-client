import { BaseService } from '../../base/BaseService';
import { PoolService } from '../PoolService';
import { Options } from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";

/**
 * Pool Service Implementation
 */
export class PoolServiceImpl extends BaseService implements PoolService {

    getPoolList(options?: Options): Promise<any> {
        return this.get(`pool_list${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolInformation(poolBech32Ids: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`pool_info${this.optionsToQueryParams(options)}`, this.buildBody("_pool_bech32_ids", poolBech32Ids))
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolStakeSnapshot(poolBech32: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_pool_bech32", poolBech32)
        return this.get(`pool_stake_snapshot${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolDelegatorsList(poolBech32: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_pool_bech32", poolBech32)
        return this.get(`pool_delegators${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolDelegatorsHistory(poolBech32: string, epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_pool_bech32", poolBech32)
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return this.get(`pool_delegators_history${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolBlocks(poolBech32: string, epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_pool_bech32", poolBech32)
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return this.get(`pool_blocks${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolStakeBlockAndRewardHistory(poolBech32: string, epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_pool_bech32", poolBech32)
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return this.get(`pool_history${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolUpdatesHistory(poolBech32: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_pool_bech32", poolBech32)
        return this.get(`pool_updates${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolRelays(options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.get(`pool_relays${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPoolMetadata(poolBech32Ids: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`pool_metadata${this.optionsToQueryParams(options)}`, this.buildBody("_pool_bech32_ids", poolBech32Ids))
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}