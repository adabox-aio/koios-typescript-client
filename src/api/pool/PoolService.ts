import { Options } from '../../factory/options/Options';

export interface PoolService {

    /**
     * Pool List
     * A list of all currently registered/retiring (not retired) pools
     * <p><b>200</b> - Array of pool IDs and tickers
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool IDs and tickers
     */
    getPoolList(options?: Options): Promise<Response>;

    /**
     * Pool Information
     * Current pool statuses and details for a specified list of pool ids
     * <p><b>200</b> - Array of pool information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32Ids Array of Cardano pool IDs (bech32 format)
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool information
     */
    getPoolInformation(poolBech32Ids: string[], options?: Options): Promise<Response>;

    /**
     * Pool Stake Snapshot
     * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
     * <p><b>200</b> - Array of pool stake information for 3 snapshots
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32 Pool ID in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool stake information for 3 snapshots
     */
    getPoolStakeSnapshot(poolBech32: string, options?: Options): Promise<Response>;

    /**
     * Pool Delegators List
     * Return information about live delegators for a given pool.
     * <p><b>200</b> - Array of pool delegator information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32 Pool ID in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool delegator information
     */
    getPoolDelegatorsList(poolBech32: string, options?: Options): Promise<Response>;

    /**
     * Pool Delegators History
     * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
     * <p><b>200</b> - Array of pool delegator information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32 Pool ID in bech32 format
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool delegator information
     */
    getPoolDelegatorsHistory(poolBech32: string, epochNo?: number, options?: Options): Promise<Response>;

    /**
     * Pool Blocks
     * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
     * <p><b>200</b> - Array of blocks created by pool
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32 Pool ID in bech32 format
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of blocks created by pool
     */
    getPoolBlocks(poolBech32: string, epochNo?: number, options?: Options): Promise<Response>;

    /**
     * Pool Stake, Block and Reward History
     * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
     * <p><b>200</b> - Array of pool history information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32 Pool ID in bech32 format
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool history information
     */
    getPoolStakeBlockAndRewardHistory(poolBech32: string, epochNo?: number, options?: Options): Promise<Response>;

    /**
     * Pool Updates (History)
     * Return all pool updates for all pools or only updates for specific pool if specified
     * <p><b>200</b> - Array of historical pool updates
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32 Pool ID in bech32 format
     * @param options Filtering and Pagination options (optional)
     * @return Array of historical pool updates
     */
    getPoolUpdatesHistory(poolBech32: string, options?: Options): Promise<Response>;

    /**
     * Pool Relays
     * A list of registered relays for all currently registered/retiring (not retired) pools
     * <p><b>200</b> - Array of pool relay information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool relay information
     */
    getPoolRelays(options?: Options): Promise<Response>;

    /**
     * Pool Metadata
     * Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
     * <p><b>200</b> - Array of pool metadata
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param poolBech32Ids Array of Cardano pool IDs (bech32 format)
     * @param options Filtering and Pagination options (optional)
     * @return Array of pool metadata
     */
    getPoolMetadata(poolBech32Ids: string[], options?: Options): Promise<Response>;
}