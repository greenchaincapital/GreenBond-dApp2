# Overview

The Decentralised Green Energy Marketplace enables users to invest in green energy projects through fractional ownership of NFTs, Yield Bonds and Basket Tresuries. Investors earn income or compound yield from these projects, managed transparently via smart contracts.

## Key Components

1. **[NFT Ownership](nfts)**: Purchase ERC-721 NFTs that represent shares in green energy projects.
    - Standard: ERC-721.
    - Contract: GreenEnergyNFT for representing fractional ownership in green energy projects.
    - Metadata: Shared metadata URI containing project details.
    - Minting: Limited supply defined at contract creation.
    - Payment: Price in USDT.
    - Income Distribution: Function to distribute USDT income to NFT holders.
    - Tax rebate: 125 % tax rebates for South African investors
2. **[Yield Bonds](yield)**: Lock USDT on an ERC-4626 vault to yield compound interest from project loans.
    - Purpose: To raise capital via crowd-funding.
    - Standard: ERC-4626 for tokenized vaults.
    - Investment Asset: USDT.
    - Deployment: Already developed and live on Arbitrum.
    - Contracts: GreenBond, a bond-like token for investment.
3. **[Basket Tresury](treasury)**: Inversly correlated basket of green assets, automatically re-balanced daily.
    - Purpose: Benefit from re-balanced diverse portfolio for long term growth.
    - Investment Assets: USDT, DAI, XAUT, WBTC, ETH
    - Deployment: Already developed and live on Arbitrum.
4. **[Governance](gov)**: Use `GREEN` tokens to participate in decision-making.
    - Token: GREEN coin for governance.
    - Role: To make decisions regarding project management, income distribution, and protocol upgrades.
    - Standard: Limited supply ERC-20

## How to Get Started

1. **Set Up Your Wallet**: Download [MetaMask](https://metamask.io/download/) and add USDT on Arbitrum.
2. **[Visit Our Marketplace](/marketplace)**: Browse and choose a green energy project to invest in.
3. **Purchase Your NFT**: Connect your wallet and buy NFTs using USDT.
4. **Earn and Participate**: Monitor your earnings and join governance.

For more details, visit our [FAQs](./faqs.md).