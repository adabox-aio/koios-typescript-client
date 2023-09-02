import { BaseService } from '../../base/BaseService';
import { EpochService } from '../EpochService';
import { Options } from '../../../factory/options/Options';

/**
 * Epoch Service Implementation
 */
export class EpochServiceImpl extends BaseService implements EpochService {

    async getEpochInformation(epochNo?: number, includeNextEpoch?: boolean, options: Options = Options.builder().build()): Promise<any> {
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        if (includeNextEpoch) {
            options.addCustomOption("_include_next_epoch", String(includeNextEpoch))
        }
        return await this.get(`epoch_info${this.optionsToQueryParams(options)}`);
    }

    async getEpochProtocolParameters(epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return await this.get(`epoch_params${this.optionsToQueryParams(options)}`)
    }

    async getEpochBlockProtocols(epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        if (epochNo) {
            options.addCustomOption("_epoch_no", String(epochNo))
        }
        return await this.get(`epoch_block_protocols${this.optionsToQueryParams(options)}`)
    }
}