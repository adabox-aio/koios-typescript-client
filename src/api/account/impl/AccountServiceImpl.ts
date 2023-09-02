import { BaseService } from '../../base/BaseService';
import { AccountService } from '../AccountService';
import { Options } from '../../../factory/options/Options';

/**
 * Account Service Implementation
 */
export class AccountServiceImpl extends BaseService implements AccountService {

    async getAccountList(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`account_list${this.optionsToQueryParams(options)}`);
    }

    async getAccountInformation(stakeAddresses: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`account_info${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses));
    }

    async getAccountUTxOs(stakeAddress: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_stake_address", stakeAddress)
        return await this.get(`account_utxos${this.optionsToQueryParams(options)}`);
    }

    async getAccountInformationCached(stakeAddresses: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`account_info_cached${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses));
    }

    async getAccountRewards(stakeAddresses: string[], epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`account_rewards${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses, undefined, epochNo));
    }

    async getAccountUpdates(stakeAddresses: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`account_updates${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses));
    }


    async getAccountAddresses(stakeAddresses: string[], firstOnly?: boolean, empty?: boolean, options: Options = Options.builder().build()): Promise<any> {
        const body: any = this.buildBody("_stake_addresses", stakeAddresses)
        if (firstOnly) {
            body["_first_only"] = firstOnly
        }
        if (empty) {
            body["_empty"] = empty
        }
        return await this.post(`account_addresses${this.optionsToQueryParams(options)}`, body);
    }

    async getAccountAssets(stakeAddresses: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`account_assets${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses));
    }

    async getAccountHistory(stakeAddresses: string[], epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`account_history${this.optionsToQueryParams(options)}`, this.buildBody("_stake_addresses", stakeAddresses, undefined, epochNo));
    }
}