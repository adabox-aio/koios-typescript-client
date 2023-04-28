import { BaseService } from '../../base/BaseService';
import { EpochService } from '../EpochService';
import { Options } from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";

/**
 * Epoch Service Implementation
 */
export class EpochServiceImpl extends BaseService implements EpochService {

    getEpochInformation(epochNo?: number, includeNextEpoch?: boolean, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        if (includeNextEpoch) {
            options.addCustomOption("_include_next_epoch", String(includeNextEpoch))
        }
        return this.get(`epoch_info${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getEpochProtocolParameters(epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return this.get(`epoch_params${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getEpochBlockProtocols(epochNo?: number, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return this.get(`epoch_block_protocols${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

}