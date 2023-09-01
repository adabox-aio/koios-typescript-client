import { BaseService } from '../../base/BaseService';
import { BlockService } from '../BlockService';
import { Options } from '../../../factory/options/Options';

/**
 * Block Service Implementation
 */
export class BlockServiceImpl extends BaseService implements BlockService {

    async getBlockList(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`blocks${this.optionsToQueryParams(options)}`);
    }

    async getBlockInformation(blockHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`block_info${this.optionsToQueryParams(options)}`, this.buildBody("_block_hashes", blockHashes));
    }

    async getBlockTransactions(blockHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`block_txs${this.optionsToQueryParams(options)}`, this.buildBody("_block_hashes", blockHashes));
    }
}