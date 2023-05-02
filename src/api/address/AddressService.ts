import {Options} from "../../factory/options/Options";

/**
 * Address Service
 */
export interface AddressService {

    /**
     * Address Information
     * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
     * <p><b>200</b> - Array of address information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param addresses Array of Cardano payment address(es) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of address information
     */
    getAddressInformation(addresses: string[], options?: Options): Promise<Response>;

    /**
     * Address Transactions
     * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
     * <p><b>200</b> - Array of transaction hashes
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param addresses Array of Cardano payment address(es) in bech32 format
     * @param afterBlockHeight Only fetch information after specific block height (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of transaction hashes
     */
    getAddressTransactions(addresses: string[], afterBlockHeight?: number, options?: Options): Promise<Response>;

    /**
     * UTxOs from payment credentials
     * Get a list of UTxO against input payment credential array including their balances
     * <p><b>200</b> - Array of UTxOs with balances
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param paymentCredentials Array of Cardano payment credential(s) in hex format
     * @param options Filtering and Pagination options (optional)
     * @return Array of UTxOs with balances
     */
    getCredentialUTxOs(paymentCredentials: string[], options?: Options): Promise<Response>;

    /**
     * Address Assets
     * Get the list of all the assets (policy, name and quantity) for given addresses
     * <p><b>200</b> - Array of address-owned assets
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param addresses Array of Cardano payment address(es) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of address-owned assets
     */
    getAddressAssets(addresses: string[], options?: Options): Promise<Response>;

    /**
     * Transactions from payment credentials
     * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
     * <p><b>200</b> - Array of transaction hashes
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param paymentCredentials Array of Cardano payment credential(s) in hex format
     * @param afterBlockHeight Only fetch information after specific block height (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of transaction hashes
     */
    getCredentialsTxs(paymentCredentials: string[], afterBlockHeight?: number, options?: Options): Promise<Response>;
}