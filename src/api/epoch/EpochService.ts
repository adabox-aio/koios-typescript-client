import {Options} from "../../factory/options/Options";

/**
 * Epoch Service
 */
export interface EpochService {

    /**
     * Epoch Information
     * Get the epoch information, all epochs if no epoch specified
     * <p><b>200</b> - Array of detailed summary for each epoch
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param includeNextEpoch Include information about nearing but not yet started epoch, to get access to active stake snapshot information if available (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed summary for each epoch
     */
    getEpochInformation(epochNo?: number, includeNextEpoch?: boolean, options?: Options): Promise<any>;

    /**
     * Epoch's Protocol Parameters
     * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
     * <p><b>200</b> - Array of protocol parameters for each epoch
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of protocol parameters for each epoch
     */
    getEpochProtocolParameters(epochNo?: number, options?: Options): Promise<any>;

    /**
     * Epoch's Block Protocols
     * Get the information about block protocol distribution in epoch
     * <p><b>200</b> - Array of distinct block protocol versions counts in epoch
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param epochNo Epoch Number to fetch details for (optional)
     * @param options Filtering and Pagination options (optional)
     * @return Array of distinct block protocol versions counts in epoch
     */
    getEpochBlockProtocols(epochNo?: number, options?: Options): Promise<any>;
}
