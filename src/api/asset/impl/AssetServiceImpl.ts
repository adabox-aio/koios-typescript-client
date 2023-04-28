import {BaseService} from "../../base/BaseService";
import {AssetService} from "../AssetService";
import {Options} from "../../../factory/options/Options";
import {KoiosHttpError} from "../../base/Errors";

/**
 * Address Service Implementation
 */
export class AssetServiceImpl extends BaseService implements AssetService {

    getAssetList(options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.get(`asset_list${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetTokenRegistry(options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.get(`asset_token_registry${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetAddresses(assetPolicy: string, assetName?: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return this.get(`asset_addresses${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getNFTAddress(assetPolicy: string, assetName?: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return this.get(`asset_nft_address${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetInformation(assetPolicy: string, assetName?: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return this.get(`asset_info${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetInformationBulk(assets: [string, string][], options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        return this.post(`asset_info${this.optionsToQueryParams(options)}`, this.buildBody("_asset_list", assets))
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetHistory(assetPolicy: string, assetName?: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return this.get(`asset_history${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPolicyAssetAddressList(assetPolicy: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        return this.get(`policy_asset_addresses${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPolicyAssetInformation(assetPolicy: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        return this.get(`policy_asset_info${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getPolicyAssetList(assetPolicy: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        return this.get(`policy_asset_list${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetSummary(assetPolicy: string, assetName?: string, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return this.get(`asset_summary${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }

    getAssetTransactions(assetPolicy: string, assetName?: string, afterBlockHeight?: number, history?: boolean, options?: Options): Promise<any> {
        if (!options) {
            options = Options.builder().build()
        }
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        if (afterBlockHeight) {
            options.addCustomOption("_after_block_height", String(afterBlockHeight))
        }
        if (history) {
            options.addCustomOption("_history", String(history))
        }
        return this.get(`asset_txs${this.optionsToQueryParams(options)}`)
            .then(async response => {
                if (!response.ok) {
                    return new KoiosHttpError(JSON.stringify(await response.json()), response.status, response.statusText, response.url)
                }
                return response.json()
            })
    }
}