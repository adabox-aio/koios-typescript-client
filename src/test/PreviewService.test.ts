import {BackendFactory} from "../factory/BackendFactory";
import {describe, expect, test} from "vitest";
import {Options} from "../factory/options/Options";
import {Limit} from "../factory/options/Limit";
import {Offset} from "../factory/options/Offset";
import {Order} from "../factory/options/Order";
import SortType from "../factory/options/SortType";
import {Filter, FilterType} from "../factory/options/filters/Filter";
import {LogicalOperatorFilter, LogicalOperatorFilterType} from "../factory/options/filters/LogicalOperatorFilter";
import {NotOperatorFilter} from "../factory/options/filters/NotOperatorFilter";

const koiosPreviewService = BackendFactory.getKoiosPreviewService()
const koiosNetworkService = koiosPreviewService.getNetworkService()
const koiosEpochService = koiosPreviewService.getEpochService()
const koiosBlockService = koiosPreviewService.getBlockService()
const koiosTransactionsService = koiosPreviewService.getTransactionsService()
const koiosAddressService = koiosPreviewService.getAddressService()
const koiosAssetService = koiosPreviewService.getAssetService()
const koiosPoolService = koiosPreviewService.getPoolService()
const koiosScriptService = koiosPreviewService.getScriptService()
const koiosAccountService = koiosPreviewService.getAccountService()

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
        const result = await koiosNetworkService.getHistoricalTokenomicStatsByEpoch(12)
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
        const result = await koiosEpochService.getEpochInformation(12, false)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).eq(1)
        expect(result[0].epoch_no).toBe(12)
    });
    test("getEpochProtocolParameters", async () => {
        const result = await koiosEpochService.getEpochProtocolParameters(12)
        console.log(result)
        expect(result).not.toBe(null)
        expect(Array.isArray(result)).toBeTruthy()
        expect(result.length).eq(1)
        expect(result[0].epoch_no).toBe(12)
    });
    test("getEpochBlockProtocols", async () => {
        const result = await koiosEpochService.getEpochBlockProtocols(12)
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
            'a4504e2495ed03b48be36676f430c54dca0769d29f72ebf18d493abf42d2167b',
            '8e7a6206d2b21ae4f26e7e09353fadae17f838a63d095c2be51acbd16e9b7716',
            '1baaf7812ed48e663adb9eeaa68fe25034e5e30b4f8e56cc8600cac5e9d42ce7'
        ]
        const result = await koiosBlockService.getBlockInformation(blockHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getBlockTransactions", async () => {
        const blockHashes = [
            'a4504e2495ed03b48be36676f430c54dca0769d29f72ebf18d493abf42d2167b',
            '8e7a6206d2b21ae4f26e7e09353fadae17f838a63d095c2be51acbd16e9b7716',
            '1baaf7812ed48e663adb9eeaa68fe25034e5e30b4f8e56cc8600cac5e9d42ce7'
        ]
        const result = await koiosBlockService.getBlockTransactions(blockHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosTransactionsService", () => {
    test("getTransactionInformation", async () => {
        const txHashes = [
            'f1592b29b79ae85d753913dd25644c60925a4a0683979faa33832fead4b4bd9c',
            '206f6da5b0b0de45605a95f5ce7e172be9674550f7dde3838c45cbf24bab8b00'
        ]
        const result = await koiosTransactionsService.getTransactionInformation(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionInformationNotFound", async () => {
        const txHashes = ['f1592b29b79ae85d753913dd25644c60925a4aabc3979faa33832fead4b4bd9c']
        const result = await koiosTransactionsService.getTransactionInformation(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionUTxOs", async () => {
        const txHashes = [
            'f1592b29b79ae85d753913dd25644c60925a4a0683979faa33832fead4b4bd9c',
            '206f6da5b0b0de45605a95f5ce7e172be9674550f7dde3838c45cbf24bab8b00'
        ]
        const result = await koiosTransactionsService.getTransactionUTxOs(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getTransactionMetadata", async () => {
        const txHashes = [
            'f1592b29b79ae85d753913dd25644c60925a4a0683979faa33832fead4b4bd9c',
            '206f6da5b0b0de45605a95f5ce7e172be9674550f7dde3838c45cbf24bab8b00'
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
    test("submitTransaction", async () => {
        const uint8 = new Uint8Array([0])
        const result = await koiosTransactionsService.submitTransaction(uint8)
        console.log(result)
        expect(result).not.toBe(null)
        expect(result.statusCode).toBe(400)
    });
    test("getTransactionStatus", async () => {
        const txHashes = [
            'f1592b29b79ae85d753913dd25644c60925a4a0683979faa33832fead4b4bd9c',
            '206f6da5b0b0de45605a95f5ce7e172be9674550f7dde3838c45cbf24bab8b00'
        ]
        const result = await koiosTransactionsService.getTransactionStatus(txHashes)
        console.log(result)
        expect(result).not.toBe(null)
    });
});

describe("koiosAddressService", () => {
    test("getAddressInformation", async () => {
        const addresses = [
            'addr_test1vpfwv0ezc5g8a4mkku8hhy3y3vp92t7s3ul8g778g5yegsgalc6gc',
            'addr_test1vqneq3v0dqh3x3muv6ee3lt8e5729xymnxuavx6tndcjc2cv24ef9'
        ]
        const result = await koiosAddressService.getAddressInformation(addresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAddressTransactions", async () => {
        const addresses = [
            'addr_test1vpfwv0ezc5g8a4mkku8hhy3y3vp92t7s3ul8g778g5yegsgalc6gc',
            'addr_test1vqneq3v0dqh3x3muv6ee3lt8e5729xymnxuavx6tndcjc2cv24ef9'
        ]
        const result = await koiosAddressService.getAddressTransactions(addresses, 40356)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getCredentialUTxOs", async () => {
        const paymentCredentials = [
            '33c378cee41b2e15ac848f7f6f1d2f78155ab12d93b713de898d855f',
            '52e63f22c5107ed776b70f7b92248b02552fd08f3e747bc745099441'
        ]
        const result = await koiosAddressService.getCredentialUTxOs(paymentCredentials)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAddressAssets", async () => {
        const addresses = [
            'addr_test1vpfwv0ezc5g8a4mkku8hhy3y3vp92t7s3ul8g778g5yegsgalc6gc',
            'addr_test1vqneq3v0dqh3x3muv6ee3lt8e5729xymnxuavx6tndcjc2cv24ef9'
        ]
        const result = await koiosAddressService.getAddressAssets(addresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getCredentialsTxs", async () => {
        const paymentCredentials = [
            '33c378cee41b2e15ac848f7f6f1d2f78155ab12d93b713de898d855f',
            '52e63f22c5107ed776b70f7b92248b02552fd08f3e747bc745099441'
        ]
        const result = await koiosAddressService.getCredentialsTxs(paymentCredentials, 40356)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("MixedOptionsTest", async () => {
        const addresses = [
            'addr_test1qrvaadv0h7atv366u6966u4rft2svjlf5uajy8lkpsgdrc24rnskuetxz2u3m5ac22s3njvftxcl2fc8k8kjr088ge0qz98xmv',
        ]
        const options = Options.builder()
            .option(Limit.of(10))
            .option(Offset.of(0))
            .option(Order.by("block_height", SortType.DESC))
            .option(Filter.of("block_height", FilterType.GTE, "42248"))
            .option(Filter.of("block_height", FilterType.LTE, "69447")).build();

        const result = await koiosAddressService.getAddressTransactions(addresses, undefined, options)
        console.log(result)
        expect(result).not.toBe(null)
        expect(result.length).toBe(10)
        expect(result[0].tx_hash).toBe("8a1f7811d7c3c46c3421e5b6515239c8cd7cce21c371bb0d5c107d0296fab29d")
    });
    test("MixedWithLogicalOperatorOptionsTest", async () => {
        const addresses = [
            'addr_test1qrvaadv0h7atv366u6966u4rft2svjlf5uajy8lkpsgdrc24rnskuetxz2u3m5ac22s3njvftxcl2fc8k8kjr088ge0qz98xmv',
        ]
        const options = Options.builder()
            .option(Limit.of(6))
            .option(Offset.of(0))
            .option(Order.by("block_height", SortType.DESC))
            .option(LogicalOperatorFilter.of(LogicalOperatorFilterType.AND,
                Filter.of("block_height", FilterType.GTE, "42248"),
                    Filter.of("block_height", FilterType.LTE, "69447"))).build();

        const result = await koiosAddressService.getAddressTransactions(addresses, undefined, options)
        console.log(result)
        expect(result).not.toBe(null)
        expect(result.length).toBe(6)
        expect(result[0].tx_hash).toBe("8a1f7811d7c3c46c3421e5b6515239c8cd7cce21c371bb0d5c107d0296fab29d")
    });
    test("MixedWithNotOperatorOptionsTest", async () => {
        const addresses = [
            'addr_test1qrvaadv0h7atv366u6966u4rft2svjlf5uajy8lkpsgdrc24rnskuetxz2u3m5ac22s3njvftxcl2fc8k8kjr088ge0qz98xmv',
        ]
        const options = Options.builder()
            .option(Limit.of(50))
            .option(Offset.of(0))
            .option(Order.by("block_height", SortType.DESC))
            .option(LogicalOperatorFilter.of(LogicalOperatorFilterType.AND,
                Filter.of("block_height", FilterType.GTE, "42248"),
                Filter.of("block_height", FilterType.LTE, "69447"),
                NotOperatorFilter.of(Filter.of("block_height", FilterType.EQ, "58776")))).build();

        const result = await koiosAddressService.getAddressTransactions(addresses, undefined, options)
        console.log(result)
        expect(result).not.toBe(null)
        expect(result.length).toBe(16)
        expect(result[0].tx_hash).toBe("8a1f7811d7c3c46c3421e5b6515239c8cd7cce21c371bb0d5c107d0296fab29d")
    });
    test("MixedWithLogicalNotOperatorOptionsTest", async () => {
        const addresses = [
            'addr_test1qrvaadv0h7atv366u6966u4rft2svjlf5uajy8lkpsgdrc24rnskuetxz2u3m5ac22s3njvftxcl2fc8k8kjr088ge0qz98xmv',
        ]
        const options = Options.builder()
            .option(Limit.of(20))
            .option(Offset.of(0))
            .option(Order.by("block_height", SortType.DESC))
            .option(NotOperatorFilter.of(LogicalOperatorFilter.of(LogicalOperatorFilterType.AND,
                Filter.of("block_height", FilterType.GTE, "42248"),
                Filter.of("block_height", FilterType.LTE, "69447")))).build();

        const result = await koiosAddressService.getAddressTransactions(addresses, undefined, options)
        console.log(result)
        expect(result).not.toBe(null)
        expect(result.length).toBe(20)
        expect(result[0].tx_hash).not.toBe("8a1f7811d7c3c46c3421e5b6515239c8cd7cce21c371bb0d5c107d0296fab29d")
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
        const result = await koiosAssetService.getAssetAddresses("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404", "433374")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getNFTAddress", async () => {
        const result = await koiosAssetService.getNFTAddress("005b8ca355aec6125531ebea89bf9ef8df90121ea5717f0c55027e35", "4d43")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetInformation", async () => {
        const result = await koiosAssetService.getAssetInformation("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404", "433374")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetInformationBulk", async () => {
        const result = await koiosAssetService.getAssetInformationBulk(
            [
                ["065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404", "433374"],
                ["189e2c53985411addb8df0f3e09f70e343da69f06746c408aba672a8", "15fc257714a51769e192761d674db2ee2e80137428e522f9b914debb5f785301"]
            ])
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetHistory", async () => {
        const result = await koiosAssetService.getAssetHistory("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404", "433374")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetAddressList", async () => {
        const result = await koiosAssetService.getPolicyAssetAddressList("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetInformation", async () => {
        const result = await koiosAssetService.getPolicyAssetInformation("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPolicyAssetList", async () => {
        const result = await koiosAssetService.getPolicyAssetList("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetSummary", async () => {
        const result = await koiosAssetService.getAssetSummary("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404", "433374")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAssetTransactions", async () => {
        const result = await koiosAssetService.getAssetTransactions("065270479316f1d92e00f7f9f095ebeaac9d009c878dc35ce36d3404", "433374", 50000, false)
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
            "pool1p90428kec03mjdya3k4gv5d20w7lmed7ca0snknef5j977l3y8l",
            "pool1wwh3k3ldzujdvgxllfwlnnkxyheafkacqlufnvpr77n5q72f9hw",
            "pool1p835jxsj8py5n34lrgk6fvpgpxxvh585qm8dzvp7ups37vdet5a"
        ]
        const result = await koiosPoolService.getPoolInformation(poolBech32Ids)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolStakeSnapshot", async () => {
        const result = await koiosPoolService.getPoolStakeSnapshot("pool1leml52hm4fcp3hhe4zye08qz27llhj7d339p3gs0tl85cstx59q")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolDelegatorsList", async () => {
        const result = await koiosPoolService.getPoolDelegatorsList("pool1leml52hm4fcp3hhe4zye08qz27llhj7d339p3gs0tl85cstx59q")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolDelegatorsHistory", async () => {
        const result = await koiosPoolService.getPoolDelegatorsHistory("pool1leml52hm4fcp3hhe4zye08qz27llhj7d339p3gs0tl85cstx59q", 12)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolBlocks", async () => {
        const result = await koiosPoolService.getPoolBlocks("pool1leml52hm4fcp3hhe4zye08qz27llhj7d339p3gs0tl85cstx59q", 12)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolStakeBlockAndRewardHistory", async () => {
        const result = await koiosPoolService.getPoolStakeBlockAndRewardHistory("pool1leml52hm4fcp3hhe4zye08qz27llhj7d339p3gs0tl85cstx59q", 12)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getPoolUpdatesHistory", async () => {
        const result = await koiosPoolService.getPoolUpdatesHistory("pool1leml52hm4fcp3hhe4zye08qz27llhj7d339p3gs0tl85cstx59q")
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
            "pool1p90428kec03mjdya3k4gv5d20w7lmed7ca0snknef5j977l3y8l",
            "pool1wwh3k3ldzujdvgxllfwlnnkxyheafkacqlufnvpr77n5q72f9hw",
            "pool1p835jxsj8py5n34lrgk6fvpgpxxvh585qm8dzvp7ups37vdet5a"
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
        const result = await koiosScriptService.getScriptRedeemers("f758cf422ca0cbed7d9d6fad1eb5a3c70537d62e661ad450dd2a3810")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getDatumInformation", async () => {
        const datumHashes = [
            "6181b3dc623cd8812caf027a3507e9b3095388a7cf3db65983e1fddd3a84c88c",
            "f8ae55ff89e1f5366f23e16bcaf2073252337b96031a02d79e41d653b5f0a978"
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
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountInformation(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountUTxOs", async () => {
        const result = await koiosAccountService.getAccountUTxOs("stake_test1uzs5rxys8qy5jnr9g0mkj860ms5n92nrykmrgyumpf2ytmsejj4m6")
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountInformationCached", async () => {
        const stakeAddresses = [
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountInformationCached(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountRewards", async () => {
        const stakeAddresses = [
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountRewards(stakeAddresses, 11)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountUpdates", async () => {
        const stakeAddresses = [
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountUpdates(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountAddresses", async () => {
        const stakeAddresses = [
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountAddresses(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountAssets", async () => {
        const stakeAddresses = [
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountAssets(stakeAddresses)
        console.log(result)
        expect(result).not.toBe(null)
    });
    test("getAccountHistory", async () => {
        const stakeAddresses = [
            "stake_test1urqntq4wexjylnrdnp97qq79qkxxvrsa9lcnwr7ckjd6w0cr04y4p",
            "stake_test1up6wqzrw2h9vvjy5zfkjn0dwtymy5r29zyhf8fyhm6fat9c2am5hl"
        ]
        const result = await koiosAccountService.getAccountHistory(stakeAddresses, 11)
        console.log(result)
        expect(result).not.toBe(null)
    });
});