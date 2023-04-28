import {Options} from "../../factory/options/Options";

/**
 * Account Service
 */
export interface AccountService {

    /**
     * Account List
     * Get a list of all stake addresses that have atleast 1 transaction
     * <p><b>200</b> - Array of account (stake address) IDs
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of account (stake address) IDs
     */
    getAccountList(options?: Options): Promise<any>;

    /**
     * Account Information
     * Get the account information for given stake addresses
     * <p><b>200</b> - Array of account information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of account information
     */
    getAccountInformation(stakeAddresses: string[], options?: Options): Promise<any>;

    /**
     * Account UTxOs
     * Get a list of all UTxOs for a given stake address (account)
     * <p><b>200</b> - Array of account UTxOs associated with stake address
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddress Cardano staking address (reward account) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of account UTxOs associated with stake address
     */
    getAccountUTxOs(stakeAddress: string, options?: Options): Promise<any>;

    /**
     * Account Information (Cached)
     * Get the cached account information for given stake addresses, effective for registered accounts
     * <p><b>200</b> - Array of account information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of account information
     */
    getAccountInformationCached(stakeAddresses: string[], options?: Options): Promise<any>;

    /**
     * Account Rewards
     * Get the full rewards history (including MIR) for given stake addresses
     * <p><b>200</b> - Array of reward history information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param epochNo Only fetch information for a specific epoch (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of reward history information
     */
    getAccountRewards(stakeAddresses: string[], epochNo?: number, options?: Options): Promise<any>;

    /**
     * Account Updates
     * Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
     * <p><b>200</b> - Array of account updates information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of account updates information
     */
    getAccountUpdates(stakeAddresses: string[], options?: Options): Promise<any>;

    /**
     * Account Addresses
     * Get all addresses associated with given staking accounts
     * <p><b>200</b> - Array of payment addresses
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param firstOnly Only return the first result
     * @param empty Include zero quantity entries
     * @param options Filtering and Pagination options (optional)
     * @return Array of payment addresses
     */
    getAccountAddresses(stakeAddresses: string[], firstOnly?: boolean, empty?: boolean, options?: Options): Promise<any>;

    /**
     * Account Assets
     * Get the native asset balance for a given stake address
     * <p><b>200</b> - Array of assets owned by account
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of assets owned by account
     */
    getAccountAssets(stakeAddresses: string[], options?: Options): Promise<any>;

    /**
     * Account History
     * Get the staking history of given stake addresses (accounts)
     * <p><b>200</b> - Array of active stake values per epoch
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param stakeAddresses Array of Cardano stake address(es) in bech32 format
     * @param epochNo Only fetch information for a specific epoch
     * @param options Filtering and Pagination options (optional)
     * @return Array of active stake values per epoch
     */
    getAccountHistory(stakeAddresses: string[], epochNo?: number, options?: Options): Promise<any>;
}