import { BaseService } from '../../base/BaseService';
import {TransactionsService} from "../TransactionsService";
import {Options} from "../../../factory/options/Options";

/**
 * Transactions Service Implementation
 */
export class TransactionsServiceImpl extends BaseService implements TransactionsService {

    async getTransactionInformation(txHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`tx_info${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes));
    }

    async getTransactionUTxOs(txHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`tx_utxos${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes));
    }

    async getTransactionMetadata(txHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`tx_metadata${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes));
    }

    async getTransactionMetadataLabels(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`tx_metalabels${this.optionsToQueryParams(options)}`);
    }

    async submitTransaction(transactionData: Uint8Array | string): Promise<any> {
        return await this.post('submittx', transactionData);
    }

    async getTransactionStatus(txHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`tx_status${this.optionsToQueryParams(options)}`, this.buildBody("_tx_hashes", txHashes));
    }
}