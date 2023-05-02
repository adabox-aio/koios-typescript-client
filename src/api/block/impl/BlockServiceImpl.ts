import { BaseService } from '../../base/BaseService';
import { BlockService } from '../BlockService';
import { Options } from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";

/**
 * Block Service Implementation
 */
export class BlockServiceImpl extends BaseService implements BlockService {

    getBlockList(options?: Options): Promise<any> {
        return this.get(`blocks${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getBlockInformation(blockHashes: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`block_info${this.optionsToQueryParams(options)}`, this.buildBody("_block_hashes", blockHashes))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getBlockTransactions(blockHashes: string[], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`block_txs${this.optionsToQueryParams(options)}`, this.buildBody("_block_hashes", blockHashes))
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

}