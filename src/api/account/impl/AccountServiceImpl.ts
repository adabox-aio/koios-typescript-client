import {BaseService} from '../../base/BaseService';
import {AccountService} from '../AccountService';
import {Options} from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";

/**
 * Account Service Implementation
 */
export class AccountServiceImpl extends BaseService implements AccountService {

    getAccountList(options?: Options): Promise<any> {
        return this.get(`account_list${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountInformation(stakeAddresses: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`account_info${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountUTxOs(stakeAddress: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_stake_address", stakeAddress)
        return this.get(`account_utxos${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountInformationCached(stakeAddresses: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`account_info_cached${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountRewards(stakeAddresses: string[], epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`account_rewards${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses, undefined, epochNo))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountUpdates(stakeAddresses: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`account_updates${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }


    getAccountAddresses(stakeAddresses: string[], firstOnly?: boolean, empty?: boolean, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        const body: any = this.buildBody("_stake_addresses", stakeAddresses)
        if (firstOnly) {
            body["_first_only"] = firstOnly
        }
        if (empty) {
            body["_empty"] = empty
        }
        return this.post(`account_addresses${this.optionsToQueryParams(options)}`, body)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountAssets(stakeAddresses: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`account_assets${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAccountHistory(stakeAddresses: string[], epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`account_history${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses, undefined, epochNo))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}