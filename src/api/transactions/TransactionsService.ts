import { Options } from '../../factory/options/Options';

export interface TransactionsService {

    /**
     * Transaction Information
     * Get detailed information about transaction(s)
     * <p><b>200</b> - Array of detailed information about transaction(s)
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param txHashes Array of Cardano Transaction hashes
     * @param options Filtering and Pagination options (optional)
     * @return Array of detailed information about transaction(s)
     */
    getTransactionInformation(txHashes: string[], options?: Options): Promise<any>;

    /**
     * Transaction UTxOs
     * Get UTxO set (inputs/outputs) of transactions.
     * <p><b>200</b> - Array of inputs and outputs for given transaction(s)
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param txHashes Array of Cardano Transaction hashes
     * @param options Filtering and Pagination options (optional)
     * @return Array of inputs and outputs for given transaction(s)
     */
    getTransactionUTxOs(txHashes: string[], options?: Options): Promise<any>;

    /**
     * Transaction Metadata
     * Get metadata information (if any) for given transaction(s)
     * <p><b>200</b> - Array of metadata information present in each of the transactions queried
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param txHashes Array of Cardano Transaction hashes
     * @param options Filtering and Pagination options (optional)
     * @return Array of metadata information present in each of the transactions queried
     */
    getTransactionMetadata(txHashes: string[], options?: Options): Promise<any>;

    /**
     * Transaction Metadata Labels
     * Get a list of all transaction metalabels
     * <p><b>200</b> - Array of known metadata labels
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return Array of known metadata labels
     */
    getTransactionMetadataLabels(options?: Options): Promise<any>;

    /**
     * Submit Transaction
     * Submit an already serialized transaction to the network.
     * <p><b>202</b> - OK
     * <p><b>400</b> - An error occurred while submitting transaction.
     *
     * @return Transaction Id (hex)
     */
    submitTransaction(transactionData: Uint8Array | string): Promise<any>;

    /**
     * Transaction Status (Block Confirmations)
     * Get the number of block confirmations for a given transaction hash list
     * <p><b>200</b> - Array of transaction confirmation counts
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param txHashes Array of Cardano Transaction hashes
     * @param options Filtering and Pagination options (optional)
     * @return Array of transaction confirmation counts
     */
    getTransactionStatus(txHashes: string[], options?: Options): Promise<any>;
}