import { BaseService } from '../../base/BaseService';
import {TransactionsService} from "../TransactionsService";
import {Options} from "../../../factory/options/Options";
import {KoiosHttpError} from "../../base/Errors";

/**
 * Transactions Service Implementation
 */
export class TransactionsServiceImpl extends BaseService implements TransactionsService {

    getTransactionInformation(txHashes: string[], options?: Options): Promise<Response> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`tx_info${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getTransactionUTxOs(txHashes: string[], options?: Options): Promise<Response> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`tx_utxos${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getTransactionMetadata(txHashes: string[], options?: Options): Promise<Response> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`tx_metadata${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getTransactionMetadataLabels(options?: Options): Promise<Response> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.get(`tx_metalabels${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    submitTransaction(transactionData: Uint8Array | string): Promise<Response> {
        return this.post('submittx', transactionData)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(String(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getTransactionStatus(txHashes: string[], options?: Options): Promise<Response> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`tx_status${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}