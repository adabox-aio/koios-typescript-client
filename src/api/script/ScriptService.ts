import { Options } from '../../factory/options/Options';

export interface ScriptService {

    /**
     * Native Script List
     * List of all existing native script hashes along with their creation transaction hashes
     * <p><b>200</b> - List of native script and creation tx hash pairs
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return List of native script and creation tx hash pairs
     */
    getNativeScriptList(options?: Options): Promise<any>;

    /**
     * Plutus Script List
     * List of all existing Plutus script hashes along with their creation transaction hashes
     * <p><b>200</b> - List of Plutus script and creation tx hash pairs
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param options Filtering and Pagination options (optional)
     * @return List of Plutus script and creation tx hash pairs
     */
    getPlutusScriptList(options?: Options): Promise<any>;

    /**
     * Script Redeemers
     * List of all redeemers for a given script hash
     * <p><b>200</b> - List of all redeemers for a given script hash
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param scriptHash Script hash in hexadecimal format (hex)
     * @param options Filtering and Pagination options (optional)
     * @return List of all redeemers for a given script hash
     */
    getScriptRedeemers(scriptHash: string, options?: Options): Promise<any>;

    /**
     * Datum Information
     * List of datum information for given datum hashes
     * <p><b>200</b> - List of datum information for given datum hashes
     * <p><b>400</b> - The server cannot process the request due to invalid input
     * <p><b>401</b> - The selected server has restricted the endpoint to be only usable via authentication. The authentication supplied was not authorized to access the endpoint
     * <p><b>404</b> - The server does not recognise the combination of endpoint and parameters provided
     *
     * @param datumHashes Array of Cardano datum hashes
     * @param options Filtering and Pagination options (optional)
     * @return List of datum information for given datum hashes
     */
    getDatumInformation(datumHashes: string[], options?: Options): Promise<any>;
}