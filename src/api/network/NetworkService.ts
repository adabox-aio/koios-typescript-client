import { Options } from '../../factory/options/Options';

export interface NetworkService {

    /**
     * Query Chain Tip
     * Get the tip info about the latest block seen by chain
     * <p><b>200</b> - Array of block summary (limit+paginated)
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of block summary (limit+paginated)
     */
    getChainTip(options?: Options): Promise<any>;

    /**
     * Get Genesis info
     * Get the Genesis parameters used to start specific era on chain
     * <p><b>200</b> - Array of genesis parameters used to start each era on chain
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of genesis parameters used to start each era on chain
     */
    getGenesisInfo(options?: Options): Promise<any>;

    /**
     * Get historical tokenomic stats By Epoch
     * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
     * <p><b>200</b> - Array of supply/reserves/utxo/fees/treasury stats
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of supply/reserves/utxo/fees/treasury stats
     */
    getHistoricalTokenomicStatsByEpoch(epochNo?: number, options?: Options): Promise<any>;

    /**
     * Param Update Proposals
     * Get all parameter update proposals submitted to the chain starting Shelley era
     * <p><b>200</b> - Array of unique param update proposals submitted on chain
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @returns Array of unique param update proposals submitted on chain
     */
    getParamUpdateProposals(options?: Options): Promise<any>;
}