import { BaseService } from '../../base/BaseService';
import {ScriptService} from "../ScriptService";
import { Options } from '../../../factory/options/Options';
import {KoiosHttpError} from "../../base/Errors";


/**
 * Script Service Implementation
 */
export class ScriptServiceImpl extends BaseService implements ScriptService {

    getNativeScriptList(options?: Options): Promise<any> {
        return this.get(`native_script_list${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPlutusScriptList(options?: Options): Promise<any> {
        return this.get(`plutus_script_list${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getScriptRedeemers(scriptHash:string, options?:Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_script_hash", scriptHash)
        return this.get(`script_redeemers${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getDatumInformation(datumHashes: string[], options?: Options): Promise<any> {
        return this.post(`datum_info${this.optionsToQueryParams(options)}`, this.buildBody("_datum_hashes", datumHashes))
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}