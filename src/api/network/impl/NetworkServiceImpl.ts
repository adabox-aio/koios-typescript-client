import { BaseService } from '../../base/BaseService';
import { NetworkService } from '../NetworkService';
import { Options } from '../../../factory/options/Options';

/**
 * Network Service Implementation
 */
export class NetworkServiceImpl extends BaseService implements NetworkService {

    public async getChainTip(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`tip${this.optionsToQueryParams(options)}`);
    }

    public async getGenesisInfo(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`genesis${this.optionsToQueryParams(options)}`);
    }

    public async getHistoricalTokenomicStatsByEpoch(epochNo?: number, options: Options = Options.builder().build()): Promise<any> {
        if (epochNo) {
            options.addCustomOption('_epoch_no', String(epochNo))
        }
        return await this.get(`totals${this.optionsToQueryParams(options)}`);
    }

    public async getParamUpdateProposals(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`param_updates${this.optionsToQueryParams(options)}`);
    }
}