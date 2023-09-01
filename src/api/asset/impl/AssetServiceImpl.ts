import { BaseService } from "../../base/BaseService";
import { AssetService } from "../AssetService";
import { Options } from "../../../factory/options/Options";

/**
 * Address Service Implementation
 */
export class AssetServiceImpl extends BaseService implements AssetService {

    async getAssetList(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`asset_list${this.optionsToQueryParams(options)}`);
    }

    async getAssetTokenRegistry(options: Options = Options.builder().build()): Promise<any> {
        return await this.get(`asset_token_registry${this.optionsToQueryParams(options)}`);
    }

    async getAssetAddresses(assetPolicy: string, assetName?: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return await this.get(`asset_addresses${this.optionsToQueryParams(options)}`);
    }

    async getNFTAddress(assetPolicy: string, assetName?: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return await this.get(`asset_nft_address${this.optionsToQueryParams(options)}`);
    }

    async getAssetInformation(assetPolicy: string, assetName?: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return await this.get(`asset_info${this.optionsToQueryParams(options)}`);
    }

    async getAssetInformationBulk(assets: [string, string][], options: Options = Options.builder().build()): Promise<any> {
        return await this.post(`asset_info${this.optionsToQueryParams(options)}`, this.buildBody("_asset_list", assets))
    }

    async getAssetHistory(assetPolicy: string, assetName?: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return await this.get(`asset_history${this.optionsToQueryParams(options)}`);
    }

    async getPolicyAssetAddressList(assetPolicy: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        return await this.get(`policy_asset_addresses${this.optionsToQueryParams(options)}`);
    }

    async getPolicyAssetInformation(assetPolicy: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        return await this.get(`policy_asset_info${this.optionsToQueryParams(options)}`);
    }

    async getPolicyAssetList(assetPolicy: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        return await this.get(`policy_asset_list${this.optionsToQueryParams(options)}`);
    }

    async getAssetSummary(assetPolicy: string, assetName?: string, options: Options = Options.builder().build()): Promise<any> {
        options.addCustomOption("_asset_policy", assetPolicy)
        if (assetName) {
            options.addCustomOption("_asset_name", assetName)
        }
        return await this.get(`asset_summary${this.optionsToQueryParams(options)}`);
    }

    async getAssetTransactions(assetPolicy: string, assetName?: string, afterBlockHeight?: number, history?: boolean, options: Options = Options.builder().build()): Promise<any> {
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
        return await this.get(`asset_txs${this.optionsToQueryParams(options)}`);
    }
}