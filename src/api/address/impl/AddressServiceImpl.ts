import {BaseService} from '../../base/BaseService';
import {AddressService} from '../AddressService';
import {Options} from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";

/**
 * Address Service Implementation
 */
export class AddressServiceImpl extends BaseService implements AddressService {

    getAddressInformation(addresses: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`address_info${this.optionsToQueryParams(options)}`, this.buildBody("_addresses", addresses))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAddressTransactions(addresses: string[], afterBlockHeight?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`address_txs${this.optionsToQueryParams(options)}`, this.buildBody("_addresses", addresses, afterBlockHeight))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getCredentialUTxOs(paymentCredentials: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`credential_utxos${this.optionsToQueryParams(options)}`, this.buildBody("_payment_credentials", paymentCredentials))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAddressAssets(addresses: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`address_assets${this.optionsToQueryParams(options)}`, this.buildBody("_addresses", addresses))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getCredentialsTxs(paymentCredentials: string[], afterBlockHeight?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`credential_txs${this.optionsToQueryParams(options)}`, this.buildBody("_payment_credentials", paymentCredentials, afterBlockHeight))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}