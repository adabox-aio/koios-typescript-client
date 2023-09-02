import {BackendFactory, KoiosHttpError} from "../src";

const koiosPreprodService = BackendFactory.getKoiosPreprodService()
const koiosNetworkService = koiosPreprodService.getNetworkService()
const koiosEpochService = koiosPreprodService.getEpochService()
const koiosBlockService = koiosPreprodService.getBlockService()
const koiosTransactionsService = koiosPreprodService.getTransactionsService()
const koiosAddressService = koiosPreprodService.getAddressService()
const koiosAssetService = koiosPreprodService.getAssetService()
const koiosPoolService = koiosPreprodService.getPoolService()
const koiosScriptService = koiosPreprodService.getScriptService()
const koiosAccountService = koiosPreprodService.getAccountService()

describe("koiosNetworkService", () => {
    test("getChainTip", async () => {
        const result = await koiosNetworkService.getChainTip()
        expect(result).not.toBe(null)
        console.log(result)
    });
    test("getGenesisInfo", async () => {
        const result = await koiosNetworkService.getGenesisInfo()
        expect(result).not.toBe(null)
        console.log(result)
    });
    test("getHistoricalTokenomicStatsByEpoch", async () => {
        const result = await koiosNetworkService.getHistoricalTokenomicStatsByEpoch(31)
        expect(result).not.toBe(null)
        console.log(result)
    });
    test("getParamUpdateProposals", async () => {
        const result = await koiosNetworkService.getParamUpdateProposals()
        expect(result).not.toBe(null)
        console.log(result)
    });
});

describe("koiosEpochService", () => {
    test("getEpochInformation", async () => {
        const result = await koiosEpochService.getEpochInformation(31, false)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).toBe(1)
        expect(result[0].epoch_no).toBe(31)
    });
    test("getEpochProtocolParameters", async () => {
        const result = await koiosEpochService.getEpochProtocolParameters(31)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).toBe(1)
        expect(result[0].epoch_no).toBe(31)
    });
    test("getEpochBlockProtocols", async () => {
        const result = await koiosEpochService.getEpochBlockProtocols(31)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).toBe(2)
    });
});

describe("koiosBlockService", () => {
    test("getBlockList", async () => {
        const result = await koiosBlockService.getBlockList()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getBlockInformation", async () => {
        const blockHashes = [
            "2abeb8d1c1227139763be30ddb7a2fd79abd7d44195fca87a7c836a510b2802d",
            "4e790b758c495953bb33c4aad4a4b4c1b98f7c2ec135ebd3db21f32059481718",
            "389da613316d2aec61edc34d51f1b3d004891ab38c9419771e5e0a3b12de3ef6"
        ]
        const result = await koiosBlockService.getBlockInformation(blockHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getBlockTransactions", async () => {
        const blockHashes = [
            "2abeb8d1c1227139763be30ddb7a2fd79abd7d44195fca87a7c836a510b2802d",
            "4e790b758c495953bb33c4aad4a4b4c1b98f7c2ec135ebd3db21f32059481718",
            "389da613316d2aec61edc34d51f1b3d004891ab38c9419771e5e0a3b12de3ef6"
        ]
        const result = await koiosBlockService.getBlockTransactions(blockHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosTransactionsService", () => {
    test("getTransactionInformation", async () => {
        const txHashes = [
            "d10133964da9e443b303917fd0b7644ae3d01c133deff85b4f59416c2d00f530",
            "145688d3619e7524510ea64c0ec6363b77a9b8da179ef9bb0273a0940d57d576"
        ]
        const result = await koiosTransactionsService.getTransactionInformation(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionUTxOs", async () => {
        const txHashes = [
            "d10133964da9e443b303917fd0b7644ae3d01c133deff85b4f59416c2d00f530",
            "145688d3619e7524510ea64c0ec6363b77a9b8da179ef9bb0273a0940d57d576"
        ]
        const result = await koiosTransactionsService.getTransactionUTxOs(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionMetadata", async () => {
        const txHashes = [
            "d10133964da9e443b303917fd0b7644ae3d01c133deff85b4f59416c2d00f530",
            "145688d3619e7524510ea64c0ec6363b77a9b8da179ef9bb0273a0940d57d576"
        ]
        const result = await koiosTransactionsService.getTransactionMetadata(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionMetadataLabels", async () => {
        const result = await koiosTransactionsService.getTransactionMetadataLabels()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("submitTransactionBadRequest", async () => {
        const result = await koiosTransactionsService.submitTransaction(new Uint8Array([0]))
        console.log(result)
        expect(result).toBeInstanceOf(KoiosHttpError)
        expect(result.statusCode).toBe(400)
        expect(result.statusText).toBe('Bad Request')
    });
    test("getTransactionStatus", async () => {
        const txHashes = [
            "d10133964da9e443b303917fd0b7644ae3d01c133deff85b4f59416c2d00f530",
            "145688d3619e7524510ea64c0ec6363b77a9b8da179ef9bb0273a0940d57d576"
        ]
        const result = await koiosTransactionsService.getTransactionStatus(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosAddressService", () => {
    test("getAddressInformation", async () => {
        const addresses = [
            "addr_test1vzpwq95z3xyum8vqndgdd9mdnmafh3djcxnc6jemlgdmswcve6tkw",
            "addr_test1vpfwv0ezc5g8a4mkku8hhy3y3vp92t7s3ul8g778g5yegsgalc6gc"
        ]
        const result = await koiosAddressService.getAddressInformation(addresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAddressTransactions", async () => {
        const addresses = [
            "addr_test1vzpwq95z3xyum8vqndgdd9mdnmafh3djcxnc6jemlgdmswcve6tkw",
            "addr_test1vpfwv0ezc5g8a4mkku8hhy3y3vp92t7s3ul8g778g5yegsgalc6gc"
        ]
        const result = await koiosAddressService.getAddressTransactions(addresses, 9417)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getCredentialUTxOs", async () => {
        const paymentCredentials = [
            "b429738bd6cc58b5c7932d001aa2bd05cfea47020a556c8c753d4436",
            "82e016828989cd9d809b50d6976d9efa9bc5b2c1a78d4b3bfa1bb83b"
        ]
        const result = await koiosAddressService.getCredentialUTxOs(paymentCredentials)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAddressAssets", async () => {
        const addresses = [
            "addr_test1vzpwq95z3xyum8vqndgdd9mdnmafh3djcxnc6jemlgdmswcve6tkw",
            "addr_test1vpfwv0ezc5g8a4mkku8hhy3y3vp92t7s3ul8g778g5yegsgalc6gc"
        ]
        const result = await koiosAddressService.getAddressAssets(addresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getCredentialsTxs", async () => {
        const paymentCredentials = [
            "b429738bd6cc58b5c7932d001aa2bd05cfea47020a556c8c753d4436",
            "82e016828989cd9d809b50d6976d9efa9bc5b2c1a78d4b3bfa1bb83b"
        ]
        const result = await koiosAddressService.getCredentialsTxs(paymentCredentials, 9417)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosAssetService", () => {
    test("getAssetList", async () => {
        const result = await koiosAssetService.getAssetList()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetTokenRegistry", async () => {
        const result = await koiosAssetService.getAssetTokenRegistry()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetAddresses", async () => {
        const result = await koiosAssetService.getAssetAddresses("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e", "7447454e53")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getNFTAddress", async () => {
        const result = await koiosAssetService.getNFTAddress("002126e5e7cb2f5b6ac52ef2cdb9308ff58bf6e3b62e29df447cec72", "74657374")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetInformation", async () => {
        const result = await koiosAssetService.getAssetInformation("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e", "7447454e53")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetInformationBulk", async () => {
        const result = await koiosAssetService.getAssetInformationBulk([
                [ "c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e", "7447454e53"],
                [ "777e6b4903dab74963ae581d39875c5dac16c09bb1f511c0af1ddda8", "6141414441"]
            ])
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetHistory", async () => {
        const result = await koiosAssetService.getAssetHistory("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e", "7447454e53")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetAddressList", async () => {
        const result = await koiosAssetService.getPolicyAssetAddressList("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetInformation", async () => {
        const result = await koiosAssetService.getPolicyAssetInformation("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetList", async () => {
        const result = await koiosAssetService.getPolicyAssetList("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetSummary", async () => {
        const result = await koiosAssetService.getAssetSummary("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e", "7447454e53")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetTransactions", async () => {
        const result = await koiosAssetService.getAssetTransactions("c6e65ba7878b2f8ea0ad39287d3e2fd256dc5c4160fc19bdf4c4d87e", "7447454e53", 50000, false)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosPoolService", () => {
    test("getPoolList", async () => {
        const result = await koiosPoolService.getPoolList()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolInformation", async () => {
        const poolBech32Ids = [
            "pool1ext7qrwjzaxcdfhdnkq5mth59ukuu2atcg6tgqpmevpt7ratkta",
            "pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9",
            "pool1ws42l6rawqjv58crs5l32v0eem3qnngpnjfd7epwd4lmjccc5cg"
        ]
        const result = await koiosPoolService.getPoolInformation(poolBech32Ids)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolStakeSnapshot", async () => {
        const result = await koiosPoolService.getPoolStakeSnapshot("pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolDelegatorsList", async () => {
        const result = await koiosPoolService.getPoolDelegatorsList("pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolDelegatorsHistory", async () => {
        const result = await koiosPoolService.getPoolDelegatorsHistory("pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9", 31)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolBlocks", async () => {
        const result = await koiosPoolService.getPoolBlocks("pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9", 31)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolStakeBlockAndRewardHistory", async () => {
        const result = await koiosPoolService.getPoolStakeBlockAndRewardHistory("pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9", 31)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolUpdatesHistory", async () => {
        const result = await koiosPoolService.getPoolUpdatesHistory("pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolRelays", async () => {
        const result = await koiosPoolService.getPoolRelays()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolMetadata", async () => {
        const poolBech32Ids = [
            "pool1ext7qrwjzaxcdfhdnkq5mth59ukuu2atcg6tgqpmevpt7ratkta",
            "pool1x4p3cwemsm356vpxnjwuud7w76jz64hyss729zp7xa6wuey6yr9",
            "pool1ws42l6rawqjv58crs5l32v0eem3qnngpnjfd7epwd4lmjccc5cg"
        ]
        const result = await koiosPoolService.getPoolMetadata(poolBech32Ids)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosScriptService", () => {
    test("getNativeScriptList", async () => {
        const result = await koiosScriptService.getNativeScriptList()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPlutusScriptList", async () => {
        const result = await koiosScriptService.getPlutusScriptList()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getScriptRedeemers", async () => {
        const result = await koiosScriptService.getScriptRedeemers("590555d7b5760e98ae2bdd29b356247776251dfab0a207bfce98a485")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getDatumInformation", async () => {
        const datumHashes = [
            "5571e2c3549f15934a38382d1318707a86751fb70827f4cbd29b104480f1be9b",
            "5f7212f546d7e7308ce99b925f05538db19981f4ea3084559c0b28a363245826"
        ]
        const result = await koiosScriptService.getDatumInformation(datumHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosAccountService", () => {
    test("getAccountList", async () => {
        const result = await koiosAccountService.getAccountList()
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountList", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountInformation(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountUTxOs", async () => {
        const result = await koiosAccountService.getAccountUTxOs("stake_test1urkzeud48zxwnjc54emzmmc3gkg2r6d6tm2sd799jxjnqxqlfzmvk")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountInformationCached", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountInformationCached(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountRewards", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountRewards(stakeAddresses, 30)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountUpdates", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountUpdates(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountAddresses", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountAddresses(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountAssets", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountAssets(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountHistory", async () => {
        const stakeAddresses = [
            "stake_test1urq4rcynzj4uxqc74c852zky7wa6epgmn9r6k3j3gv7502q8jks0l",
            "stake_test1ur4t5nhceyn2amfuj7z74uxmmj8jf9fmgd2egqw8c98ve3cp2g4wx"
        ]
        const result = await koiosAccountService.getAccountHistory(stakeAddresses, 30)
        console.log(result)
        expect(result).not.toBe(null)
    });
});