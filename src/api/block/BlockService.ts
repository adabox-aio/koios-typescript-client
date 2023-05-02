import {Options} from "../../factory/options/Options";

/**
 * Block Service
 */
export interface BlockService {

    /**
     * Block List
     * Get summarised details about all blocks (paginated - latest first)
     * <p><b>200</b> - Array of block information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of block information
     */
    getBlockList(options?: Options): Promise<Response>;

    /**
     * Block Information
     * Get detailed information about a specific block
     * <p><b>200</b> - Array of detailed block information
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param blockHashes array of block hashes
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed block information
     */
    getBlockInformation(blockHashes: string[], options?: Options): Promise<Response>;

    /**
     * Block Transactions
     * Get a list of all transactions included in provided blocks
     * <p><b>200</b> - Array of transactions hashes
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param blockHashes array of block hashes
     * @param options Filtering and Pagination options (optional)
     * @return Array of transactions hashes
     */
    getBlockTransactions(blockHashes: string[], options?: Options): Promise<Response>;
}