import {BackendFactory, KoiosHttpError} from "../index";
import {describe, expect, test} from "vitest";

const koiosMainnetService = BackendFactory.getKoiosMainnetService()
const koiosNetworkService = koiosMainnetService.getNetworkService()
const koiosEpochService = koiosMainnetService.getEpochService()
const koiosBlockService = koiosMainnetService.getBlockService()
const koiosTransactionsService = koiosMainnetService.getTransactionsService()
const koiosAddressService = koiosMainnetService.getAddressService()
const koiosAssetService = koiosMainnetService.getAssetService()
const koiosPoolService = koiosMainnetService.getPoolService()
const koiosScriptService = koiosMainnetService.getScriptService()
const koiosAccountService = koiosMainnetService.getAccountService()

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
        const result = await koiosNetworkService.getHistoricalTokenomicStatsByEpoch(320)
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
        const result = await koiosEpochService.getEpochInformation(320, false)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).eq(1)
        expect(result[0].epoch_no).toBe(320)
    });
    test("getLatestProtocolParameters", async () => {
        const result = await koiosEpochService.getEpochProtocolParameters()
        console.log(result[0])
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
    });
    test("getEpochProtocolParameters", async () => {
        const result = await koiosEpochService.getEpochProtocolParameters(320)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).eq(1)
        expect(result[0].epoch_no).toBe(320)
    });
    test("getEpochBlockProtocols", async () => {
        const result = await koiosEpochService.getEpochBlockProtocols(320)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).toBe(1)
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
            "fb9087c9f1408a7bbd7b022fd294ab565fec8dd3a8ef091567482722a1fa4e30",
            "60188a8dcb6db0d80628815be2cf626c4d17cb3e826cebfca84adaff93ad492a",
            "c6646214a1f377aa461a0163c213fc6b86a559a2d6ebd647d54c4eb00aaab015"
        ]
        const result = await koiosBlockService.getBlockInformation(blockHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getBlockTransactions", async () => {
        const blockHashes = [
            "fb9087c9f1408a7bbd7b022fd294ab565fec8dd3a8ef091567482722a1fa4e30",
            "60188a8dcb6db0d80628815be2cf626c4d17cb3e826cebfca84adaff93ad492a",
            "c6646214a1f377aa461a0163c213fc6b86a559a2d6ebd647d54c4eb00aaab015"
        ]
        const result = await koiosBlockService.getBlockTransactions(blockHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosTransactionsService", () => {
    test("getTransactionInformation", async () => {
        const txHashes = [
            "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e",
            "0b8ba3bed976fa4913f19adc9f6dd9063138db5b4dd29cecde369456b5155e94"
        ]
        const result = await koiosTransactionsService.getTransactionInformation(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionInformationBadRequest", async () => {
        try {
            await koiosTransactionsService.getTransactionInformation(["abc"])
        } catch (e) {
            console.log(e)
            expect(e).toBeInstanceOf(KoiosHttpError)
            expect(e.statusCode).toBe(400)
        }
    });
    test("getTransactionUTxOs", async () => {
        const txHashes = [
            "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e",
            "0b8ba3bed976fa4913f19adc9f6dd9063138db5b4dd29cecde369456b5155e94"
        ]
        const result = await koiosTransactionsService.getTransactionUTxOs(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionMetadata", async () => {
        const txHashes = [
            "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e",
            "0b8ba3bed976fa4913f19adc9f6dd9063138db5b4dd29cecde369456b5155e94"
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
        try {
            await koiosTransactionsService.submitTransaction(new Uint8Array([0]))
        } catch (e) {
            expect(e).toBeInstanceOf(KoiosHttpError)
            expect(e).not.toBe(null)
            expect(e.statusCode).toBe(400)
        }
    });
    test("getTransactionStatus", async () => {
        const txHashes = [
            "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e",
            "0b8ba3bed976fa4913f19adc9f6dd9063138db5b4dd29cecde369456b5155e94"
        ]
        const result = await koiosTransactionsService.getTransactionStatus(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosAddressService", () => {
    test("getAddressInformation", async () => {
        const addresses = [
            "addr1qy2jt0qpqz2z2z9zx5w4xemekkce7yderz53kjue53lpqv90lkfa9sgrfjuz6uvt4uqtrqhl2kj0a9lnr9ndzutx32gqleeckv",
            "addr1q9xvgr4ehvu5k5tmaly7ugpnvekpqvnxj8xy50pa7kyetlnhel389pa4rnq6fmkzwsaynmw0mnldhlmchn2sfd589fgsz9dd0y"
        ]
        const result = await koiosAddressService.getAddressInformation(addresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAddressTransactions", async () => {
        const addresses = [
            "addr1qy2jt0qpqz2z2z9zx5w4xemekkce7yderz53kjue53lpqv90lkfa9sgrfjuz6uvt4uqtrqhl2kj0a9lnr9ndzutx32gqleeckv",
            "addr1q9xvgr4ehvu5k5tmaly7ugpnvekpqvnxj8xy50pa7kyetlnhel389pa4rnq6fmkzwsaynmw0mnldhlmchn2sfd589fgsz9dd0y"
        ]
        const result = await koiosAddressService.getAddressTransactions(addresses, 6238675)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getCredentialUTxOs", async () => {
        const paymentCredentials = [
            "025b0a8f85cb8a46e1dda3fae5d22f07e2d56abb4019a2129c5d6c52",
            "13f6870c5e4f3b242463e4dc1f2f56b02a032d3797d933816f15e555"
        ]
        const result = await koiosAddressService.getCredentialUTxOs(paymentCredentials)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAddressAssets", async () => {
        const addresses = [
            "addr1qy2jt0qpqz2z2z9zx5w4xemekkce7yderz53kjue53lpqv90lkfa9sgrfjuz6uvt4uqtrqhl2kj0a9lnr9ndzutx32gqleeckv",
            "addr1q9xvgr4ehvu5k5tmaly7ugpnvekpqvnxj8xy50pa7kyetlnhel389pa4rnq6fmkzwsaynmw0mnldhlmchn2sfd589fgsz9dd0y"
        ]
        const result = await koiosAddressService.getAddressAssets(addresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getCredentialsTxs", async () => {
        const paymentCredentials = [
            "025b0a8f85cb8a46e1dda3fae5d22f07e2d56abb4019a2129c5d6c52",
            "13f6870c5e4f3b242463e4dc1f2f56b02a032d3797d933816f15e555"
        ]
        const result = await koiosAddressService.getCredentialsTxs(paymentCredentials, 6238675)
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
        const result = await koiosAssetService.getAssetAddresses("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501", "424f4f4b")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getNFTAddress", async () => {
        const result = await koiosAssetService.getNFTAddress("f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a", "68616e646c65")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetInformation", async () => {
        const result = await koiosAssetService.getAssetInformation("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501", "424f4f4b")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetInformationBulk", async () => {
        const result = await koiosAssetService.getAssetInformationBulk([
                [ "750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501", "424f4f4b"],
                [ "1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e", "776f726c646d6f62696c65746f6b656e"]
            ])
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetHistory", async () => {
        const result = await koiosAssetService.getAssetHistory("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501", "424f4f4b")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("mainnetGetPolicyAssetAddressList", async () => {
        const result = await koiosAssetService.getPolicyAssetAddressList("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetInformation", async () => {
        const result = await koiosAssetService.getPolicyAssetInformation("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetList", async () => {
        const result = await koiosAssetService.getPolicyAssetList("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetSummary", async () => {
        const result = await koiosAssetService.getAssetSummary("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501", "424f4f4b")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetTransactions", async () => {
        const result = await koiosAssetService.getAssetTransactions("750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501", "424f4f4b", 50000, false)
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
            "pool100wj94uzf54vup2hdzk0afng4dhjaqggt7j434mtgm8v2gfvfgp",
            "pool102s2nqtea2hf5q0s4amj0evysmfnhrn4apyyhd4azcmsclzm96m",
            "pool102vsulhfx8ua2j9fwl2u7gv57fhhutc3tp6juzaefgrn7ae35wm"
        ]
        const result = await koiosPoolService.getPoolInformation(poolBech32Ids)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolStakeSnapshot", async () => {
        const result = await koiosPoolService.getPoolStakeSnapshot("pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolDelegatorsList", async () => {
        const result = await koiosPoolService.getPoolDelegatorsList("pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolDelegatorsHistory", async () => {
        const result = await koiosPoolService.getPoolDelegatorsHistory("pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc", 320)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolBlocks", async () => {
        const result = await koiosPoolService.getPoolBlocks("pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc", 320)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolStakeBlockAndRewardHistory", async () => {
        const result = await koiosPoolService.getPoolStakeBlockAndRewardHistory("pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc", 320)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolUpdatesHistory", async () => {
        const result = await koiosPoolService.getPoolUpdatesHistory("pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc")
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
            "pool100wj94uzf54vup2hdzk0afng4dhjaqggt7j434mtgm8v2gfvfgp",
            "pool102s2nqtea2hf5q0s4amj0evysmfnhrn4apyyhd4azcmsclzm96m",
            "pool102vsulhfx8ua2j9fwl2u7gv57fhhutc3tp6juzaefgrn7ae35wm"
        ]
        const result = await koiosPoolService.getPoolMetadata(poolBech32Ids)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosScriptService", () => {
    test("mainnetGetNativeScriptList", async () => {
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
        const result = await koiosScriptService.getScriptRedeemers("d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getDatumInformation", async () => {
        const datumHashes = [
            "818ee3db3bbbd04f9f2ce21778cac3ac605802a4fcb00c8b3a58ee2dafc17d46",
            "45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0"
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
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountInformation(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountUTxOs", async () => {
        const result = await koiosAccountService.getAccountUTxOs("stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountInformationCached", async () => {
        const stakeAddresses = [
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountInformationCached(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountRewards", async () => {
        const stakeAddresses = [
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountRewards(stakeAddresses, 350)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountUpdates", async () => {
        const stakeAddresses = [
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountUpdates(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountAddresses", async () => {
        const stakeAddresses = [
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountAddresses(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountAssets", async () => {
        const stakeAddresses = [
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountAssets(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountHistory", async () => {
        const stakeAddresses = [
            "stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250",
            "stake1uxpdrerp9wrxunfh6ukyv5267j70fzxgw0fr3z8zeac5vyqhf9jhy"
        ]
        const result = await koiosAccountService.getAccountHistory(stakeAddresses, 350)
        console.log(result)
        expect(result).not.toBe(null)
    });
});