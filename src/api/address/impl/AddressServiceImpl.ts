import {BaseService} from '../../base/BaseService';
import {AddressService} from '../AddressService';
import {Options} from '../../../factory/options/Options';

/**
 * Address Service Implementation
 */
export class AddressServiceImpl extends BaseService implements AddressService {

    async getAddressInformation(addresses: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`address_info${this.optionsToQueryParams(options)}`, this.buildBody("_addresses", addresses));
    }

    async getAddressTransactions(addresses: string[], afterBlockHeight?: number, options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`address_txs${this.optionsToQueryParams(options)}`, this.buildBody("_addresses", addresses, afterBlockHeight));
    }

    async getCredentialUTxOs(paymentCredentials: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`credential_utxos${this.optionsToQueryParams(options)}`, this.buildBody("_payment_credentials", paymentCredentials));
    }

    async getAddressAssets(addresses: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`address_assets${this.optionsToQueryParams(options)}`, this.buildBody("_addresses", addresses));
    }

    async getCredentialsTxs(paymentCredentials: string[], afterBlockHeight?: number, options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`credential_txs${this.optionsToQueryParams(options)}`, this.buildBody("_payment_credentials", paymentCredentials, afterBlockHeight));
    }
}