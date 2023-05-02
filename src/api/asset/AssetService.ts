import {Options} from "../../factory/options/Options";

/**
 * Asset Service
 */
export interface AssetService {

    /**
     * Asset List
     * Get the list of all native assets (paginated)
     * <p><b>200</b> - Array of policy IDs and asset names
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of policy IDs and asset names
     */
    getAssetList(options?: Options): Promise<Response>;

    /**
     * Asset Token Registry
     * Get a list of assets registered via token registry on github
     * <p><b>200</b> - Array of token registry information for each asset
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of token registry information for each asset
     */
    getAssetTokenRegistry(options?: Options): Promise<Response>;

    /**
     * Asset Addresses
     * Get the list of all addresses holding a given asset
     * <p><b>200</b> - Array of payment addresses holding the given token (including balances)
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param assetName Asset Name in hexadecimal format (hex), empty asset name returns royalties
     * @param options Filtering and Pagination options (optional)
     * @return Array of payment addresses holding the given token (including balances)
     */
    getAssetAddresses(assetPolicy: string, assetName?: string, options?: Options): Promise<Response>;

    /**
     * NFT Address
     * Get the address where specified NFT currently reside on.
     * <p><b>200</b> - Payment addresses currently holding the given NFT
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param assetName Asset Name in hexadecimal format (hex), empty asset name returns royalties
     * @param options Filtering and Pagination options (optional)
     * @return Payment addresses currently holding the given NFT
     */
    getNFTAddress(assetPolicy: string, assetName?: string, options?: Options): Promise<Response>;

    /**
     * Asset Information
     * Get the information of an asset including first minting & token registry metadata
     * <p><b>200</b> - Array of detailed asset information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param assetName Asset Name in hexadecimal format (hex), empty asset name returns royalties
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed asset information
     */
    getAssetInformation(assetPolicy: string, assetName?: string, options?: Options): Promise<Response>;

    /**
     * Asset Information (Bulk)
     * Get the information of a list of assets including first minting & token registry metadata
     * <p><b>200</b> - Array of detailed asset information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assets Array of tuples of policy ID and asset names (hex)
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed asset information
     */
    getAssetInformationBulk(assets: [string, string][], options?: Options): Promise<Response>;

    /**
     * Asset History
     * Get the mint/burn history of an asset
     * <p><b>200</b> - Array of asset mint/burn history
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param assetName Asset Name in hexadecimal format (hex), empty asset name returns royalties
     * @param options Filtering and Pagination options (optional)
     * @return Array of asset mint/burn history
     */
    getAssetHistory(assetPolicy: string, assetName?: string, options?: Options): Promise<Response>;

    /**
     * Policy Asset Address List
     * Get the list of addresses with quantity for each asset on the given policy
     * <p><b>200</b> - Array of asset names and payment addresses for the given policy (including balances)
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param options Filtering and Pagination options (optional)
     * @return Array of asset names and payment addresses for the given policy (including balances)
     */
    getPolicyAssetAddressList(assetPolicy: string, options?: Options): Promise<Response>;

    /**
     * Policy Asset Information
     * Get the information for all assets under the same policy
     * <p><b>200</b> - Array of detailed information of assets under the same policy
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed information of assets under the same policy
     */
    getPolicyAssetInformation(assetPolicy: string, options?: Options): Promise<Response>;

    /**
     * Policy Asset List
     * Get the list of asset under the given policy (including balances)
     * <p><b>200</b> - Array of detailed information of assets under the same policy
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed information of assets under the same policy
     */
    getPolicyAssetList(assetPolicy: string, options?: Options): Promise<Response>;

    /**
     * Asset Summary
     * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
     * <p><b>200</b> - Array of asset summary information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param assetName Asset Name in hexadecimal format (hex), empty asset name returns royalties
     * @param options Filtering and Pagination options (optional)
     * @return Array of asset summary information
     */
    getAssetSummary(assetPolicy: string, assetName?: string, options?: Options): Promise<Response>;

    /**
     * Asset Transactions
     * Get the list of current or all asset transaction hashes (newest first)
     * <p><b>200</b> - Array of Tx hashes that included the given asset
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param assetPolicy Asset Policy ID in hexadecimal format (hex)
     * @param assetName Asset Name in hexadecimal format (hex), empty asset name returns royalties (optional)
     * @param afterBlockHeight Block height for specifying time delta (optional)
     * @param history Include all historical transactions, setting to false includes only the non-empty ones (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of Tx hashes that included the given asset
     */
    getAssetTransactions(assetPolicy: string, assetName?: string, afterBlockHeight?: number, history?: boolean, options?: Options): Promise<Response>;
}