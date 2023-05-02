import { BaseService } from '../../base/BaseService';
import { NetworkService } from '../NetworkService';
import { Options } from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";

/**
 * Network Service Implementation
 */
export class NetworkServiceImpl extends BaseService implements NetworkService {

    public getChainTip(options?: Options): Promise<Response> {
        return this.get(`tip${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    public getGenesisInfo(options?: Options): Promise<Response> {
        return this.get(`genesis${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    public getHistoricalTokenomicStatsByEpoch(epochNo?: number, options?: Options): Promise<Response> {
        if (!options) {
            options = Options.builder().build()
        }
        if (epochNo) {
            options.addCustomOption('_epoch_no', String(epochNo))
        }
        return this.get(`totals${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    public getParamUpdateProposals(options?: Options): Promise<Response> {
        return this.get(`param_updates${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    throw new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}