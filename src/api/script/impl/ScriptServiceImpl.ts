import { BaseService } from '../../base/BaseService';
import {ScriptService} from "../ScriptService";
import { Options } from '../../../factory/options/Options';

/**
 * Script Service Implementation
 */
export class ScriptServiceImpl extends BaseService implements ScriptService {

    async getNativeScriptList(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`native_script_list${this.optionsToQueryParams(options)}`);
    }

    async getPlutusScriptList(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`plutus_script_list${this.optionsToQueryParams(options)}`);
    }

    async getScriptRedeemers(scriptHash: string, options: Options = Options.builder().build()): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_script_hash", scriptHash)
        return await this.get(`script_redeemers${this.optionsToQueryParams(options)}`);
    }

    async getDatumInformation(datumHashes: string[], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`datum_info${this.optionsToQueryParams(options)}`, this.buildBody("_datum_hashes", datumHashes));
    }
}