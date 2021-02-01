---
description: ''
sidebar: 'docs'
prev: '/docs/wallet/'
---

# Avoid Gas Fees

Link to original article - 
https://newsletter.banklesshq.com/p/how-to-avoid-gas-fees-with-loopring

Loopring is an Ethereum zkRollup protocol: a secure layer 2 scaling solution. The protocol allows users to transact without gas cost and without delay while still enjoying the full self-custodial security of Ethereum. 

There’s crazy demand for Ethereum block space these days, and users have no qualms about bidding up the price of this valuable ‘digital real estate’—paying high gas fees to get their transactions included.

While this is a bullish indicator for Ethereum and the value it’s able to provide, it also renders the network unusable for those who can’t afford paying tons of ETH in gas fees. And as Bankless readers know, Ethereum is the foundation of a new, open digital economy and nation—it can’t be precluding and pricing out the everyday people!

In this tactic, you will learn how to avoid the high gas fees on Ethereum so you can trade, transfer, and even provide liquidity for minimal costs on Loopring’s zkRollup.

Let’s get into it.

    Goal: Learn how to use Loopring’s zkRollup

    Skill: Beginner

    Effort: 10 mins

    ROI: High & variable. Think about all the fees you’ve spent trading on Uniswap!

How to trade tokens with no gas fees
A Brief Synopsis on Loopring L2

Loopring’s Layer 2 is a place where people can enjoy Ethereum by circumventing the biggest downside facing the network today: brutally high gas costs. 

As Bankless readers, you already know that DeFi provides significant improvements over legacy banking and FinTech. But these days, high gas fees and long delays can have people questioning its viability. If gas costs were solved—if we can scale the system—Ethereum would legitimately outcompete incumbent financial infrastructure in every facet. 

Well…Ethereum actually does scale, today. 

Loopring was Ethereum’s first rollup, and has been running on mainnet for over a year, and recently upgraded the protocol to be more usable and efficient than before. It’s time to onboard the masses!

In addition to the open source protocol, Loopring also builds products on top of the L2 protocol. This includes an AMM and orderbook DEX, and a mobile smart wallet with a zkRollup baked-in. In both cases, you feel like you’re using any normal application in terms of speed and low (or zero) fees, but you are on the Ethereum blockchain—global, secure, and powerful. 

It pains us to see users being priced out from transacting on Ethereum due to $90 swap fees, $30 transfer fees, and beyond. And if they do pony up these prices, it still pains us to see these folks parting with their precious ETH. There’s a tutorial below on how you can use Loopring in various ways. But first, let’s get you up to speed on zkRollups.
zkRollups in a Nutshell

zkRollups involve some heavy duty tech, but I think it’s quite useful to grasp the basic concepts.

zkRollups work by placing the ‘state’ and activity off-chain, in a data structure called a Merkle tree. You can think of this as an off-chain database.

Loopring users first deposit assets on-chain into an Ethereum smart contract, which is then represented in said Merkle tree. Once you do this, you’re assets are recorded and represented in the off-chain world. Anyone can make trades, transfers, etc. by signing transactions using their own mainnet Ethereum address. But you get to do this without paying for gas fees, since it’s all off-chain!

When a lot of activity has happened, say 750 trades and 250 transfers for example, something known as the operator (a.k.a relayer) aggregates and compresses all these transactions, and using cryptographic techniques known as Zero Knowledge proofs.

These are verifiable proofs that all of the off-chain computations happened according to the protocol rules (which are open for anyone to see). By putting this succinct ‘validity proof’ and some tidbits of data on Ethereum, a zkRollup inherits Ethereum security guarantees, but is able to process much higher throughput.
Loopring’s Merkle tree

An appropriate analogy would be: instead of everyone taking their cars on a congested highway (wasting time and gas), they get on a high-speed train that moves around unencumbered by the traffic below. Passengers save money by only paying a very small fee to the train rather than filling up their car with a full tank of gas, and actually get to their destination much faster (more like instantly) since they didn’t wait in traffic.

The important thing to remember is that a zkRollup relies only on Ethereum and Zero Knowledge cryptography for its security. You do not need to trust anyone or anything else. As long as Ethereum exists, you can always withdraw your funds from the rollup.

⚠️ If you want to learn more about zkRollups, check out the Bankless State of the Nation with Loopring from a few months back. You can also read Vitalik’s recent blog post about rollups for a more technical explanation.

Alright now that we have our bases covered, let’s walkthrough how we can use Loopring to save on gas.
Going gasless with Loopring

You can currently access by going to Loopring Exchange on a web browser, or through the Loopring smart wallet on mobile (currently available for Android only).

We’ll focus on the web today, but note that all the L2 tactics you learn here can be applied to your Loopring wallet as well. If you’re more technical, everything you see below can also be done via our relayer API. 
How to get onboard onto Loopring L2 (on desktop)

    Head over to Loopring Exchange. Click ‘Connect Wallet’ and link up your MetaMask or a WalletConnect compatible wallet.

    With your wallet connected, you will see it says “Deposit to Activate Layer-2”. Click that. Choose an asset to deposit, and the amount. Confirm the transaction in your wallet to execute the deposit. After 18 Ethereum confirmations, you’ve made it to the zkRollup! 

⛽ Since depositing is an Ethereum Layer-1 transaction, meaning it moves from L1 to L2, this costs gas. It is approximately just the gas cost of a normal token transfer. Pay this gas cost once, and then you are on L2 with those assets, living gas-free for as long as you’d like.

As mentioned, you must deposit your assets into a smart contract to get onto L2. This contract receives your assets and ‘maps’ them to your slot in the Merkle tree, which you—and only you—control. You can withdraw your assets from the contract whenever you like, even if Loopring disappeared or turned evil (remember, only Ethereum needs to exist…we are not replacing banks with other banks here).

🧠 Pro tip: Some people are apprehensive about paying a gas fee just to get on L2. But truth is, it is cheaper to deposit to L2 once than it is to do one Uniswap trade. Depositing ETH and most ERC20 tokens onto Loopring is ~60k gas whereas a swap on Uniswap costs around ~120k gas per swap. And you only need to migrate once! The rest of your token swaps are gas-free!

    There should be an ‘Unlock’ button. Go ahead and click that. This asks your wallet for a signature to unlock your L2 account. It is a signature, not a transaction, so no gas fee!

This ‘Unlock’ button will appear every time you access your L2 account from here on. It’s the equivalent of logging on, but just needing your Ethereum address to sign a transaction with one click.

Once you’re logged in, you can check out your Loopring L2 balances, deposit other assets, or withdraw back to L1 by click on the “Account” tab.
How to make instant transfers on Loopring

The ‘Account’ tab is also where you can send assets on L2 to any other Ethereum address—whether they have previously used Loopring L2 or not. It is ideal for payments, especially frequent ones to many people!

All you need is someone’s Ethereum address or ENS name, choose the asset and amount, and you can send them an instant, gas-free transfer on L2. You can even add a memo. Click ‘Transfer’, sign the request, and it is sent.

🗒️ Note: Transfers are currently free on Loopring unless the transfer is to a ‘new’ account that has never interacted on L2. Only in this case is there a small flat fee of a few cents to cover the account activation cost. Eventually, there will be a very small flat fee of a few cents for all transfers.
How to swap tokens gas-free

Loopring L2 supports bot types of Ethereum DEX ‘market structures’: orderbooks and Automated Market Makers (AMMs). First let’s look at swapping on the AMM. 

On Loopring Exchange, click on the ‘Swap’ tab at top. Choose your pool (each pool has two assets you can swap between) and which way you are swapping. Choose your amount to swap.

The AMM pool will automatically show you the exchange rate.

You will also see the minimum amount you are guaranteed to receive from the swap. You can adjust the slippage tolerance by clicking the gear near top right. Just beware of the price impact in some illiquid pools!

Currently, Loopring fees are 0.25% for the swap. 0.15% of that goes to liquidity providers (LPs), the remaining 0.1% goes to the relayer and protocol fee. Fees are taken from the token you are buying. Remember: there are no gas fees!

Once you’re ready, click ‘Swap’ and your transaction will be executed instantly. No delay, no gas fee. Your L2 balance will be updated. You can see your swap history and the fees you paid in the ‘Orders’ tab. 
How to add liquidity to an L2 AMM pool

Liquidity providers (LPs) currently earn 0.15% fee from all trades in the pools they provide liquidity to, proportional to their share of that pool. To become an LP, like Uniswap and other AMMs, you simply deposit an equal value of both assets in the pool. Depositing to a pool incurs no fees, and per usual, it’s gas-free too!

To become an LP on Loopring, head over to the ‘Pool’ tab on top, and choose which pool you want to provide liquidity to from the drop-down menu. Click ‘Add’.

To add liquidity to a pool, you need an equal value of both assets, which gets deposited to the pool at the prevailing exchange rate of that pool. That is, if you want to become an LP in the LRC-ETH pool, you would need $100 worth of LRC and $100 worth of ETH. In future, you will be able to deposit with a single asset—we’re working on that!

Choose the amount you want to add from one asset or the other. The UI will automatically prompt you to deposit the other asset quantity given the exchange rate at that time to ensure an equal value. Then click ‘Add’.

Your deposit will execute immediately. 

Your position in the pool will be represented by LP tokens which you hold on L2. You can see your LP tokens for a given pool and the percentage that it represents on the ‘Pool’ page. You can also see your LP tokens in your ‘Balance’ under ‘Account’, since it is effectively an asset like any other. The name of an LP token for the LRC-ETH pool for example would be LP-LRC-ETH.

To see the history of your AMM pool add/remove liquidity operations, click ‘Account’, and then ‘AMM Transactions’.

👉 Note: being an LP is not risk free. You face the potential risk of ‘impermanent loss’ just like with most other AMMs.
Finding the highest earning pools on Loopring

Under the ‘AMM Info’ tab, click ‘AMM pools’. Here you’ll see the liquidity in each pool, the volume, fees earned, and if there are any LRC liquidity mining or other incentive programs.

All of this ultimately leads to an APY (annualized percentage yield) column, so you can see the expected return you’d earn from being an LP in that pool. 

To learn more about liquidity mining on Loopring L2, read this. There are liquidity incentives provided in LRC and other tokens for certain AMM pools. These incentive campaigns change in 14-day cycles, so keep an eye on the AMM pools page and our Discord for updated APYs and cycles. 

If you’re interested in liquidity mining, all you have to do is be an LP in the relevant pools. There’s nothing more to do. Just hodl!

The liquidity mining rewards are automatically sent to accounts on L2 at the end of the 14-day cycle. 

🤑 There are also rewards for traders! Users with high swap volume in a given pool are rewarded. Click ‘AMM Swap Tournament’ to learn which pools are being incentivized and with how much in rewards. This also changes in 14-day cycles.
How to remove liquidity from an AMM pool

On the ‘Pool’ tab, you will see ‘My Pools’ which shows you the pools currently have assets in. You can go ahead and click ‘Remove’. 

You will be prompted to decide how much of your assets you want to withdraw from that pool. Decide the amount, which effectively means redeeming your LP tokens for that portion of the underlying two tokens.

You will see the amount of each token you will be getting back in return. Please note that there is a very small fee when removing liquidity from a pool!

⌨️ Writer’s note: This amount you are removing includes any fees you have earned throughout your time providing liquidity. LP fees (0.15%) automatically accrue to the pool every time someone swaps with that pool. This enlarges the pool for all LPs, so when you remove your liquidity, you are taking your share of the fees with you.
How to Withdraw From L2 to L1

On the ‘Account’ tab, you can withdraw assets from your Loopring L2 account back to Ethereum L1. Remember, a big virtue of zkRollups is that you can withdraw at anytime—your funds can never be stolen, frozen, or seized by Loopring. 

Select the asset you want to withdraw and the amount. You can withdraw to a different address than your own; not just moving from your L2 to your L1, but from your L2 to a different L1. Either a different address of yours, or a friend, etc.

But by default, your own address is entered. Click ‘Withdraw’ and you will be prompted to sign a message, and that’s it.

Due to the aggregation of a zkRollup, and since it’s an L2 to L1 interaction, withdrawals can take some time until the ‘train wants to leave the station from L2 to L1’.

It can be 5 to 30 minutes to withdraw, or a few hours depending on a couple variables. With more activity on L2, it will actually be much shorter, since trains will leave the station more frequently as seats fill much quicker and more consistently.

There is a small flat fee to process a withdrawal, since the Loopring relayer has costs in processing these withdrawals (compute power for the ZK proofs, and the overhead gas cost to publish a rollup block to Ethereum).

If you’re in a rush to move from L2 to L1, we just enabled ‘fast withdrawals’. This was a much-requested feature allowing you to withdraw to L1 in the very next Ethereum block, you just pay a higher fee for the expedience.
You’re on the future of Ethereum!

Congratulations! You are now at the cutting edge of Ethereum.

Layer 2 is becoming an effective alternative for active Ethereum users. We wouldn’t be surprised if this is where the future of Ethereum lies (along with Eth2). You may have even noticed that shift is already happening.

2021 feels like it could be a great year for Layer 2s. Generally speaking, we’re hoping that Layer 2’s like Loopring and Optimism support a significant amount of economic activity on Ethereum.

If you completed much of this tactic, then you are ahead of the pack in seeing what the future of finance looks like. It’s still bankless. And it’s still on Ethereum.

The difference is that it’s instant and you’re savings lots of gas money. If you’re an Android user, you can check out the mobile smart wallet and have the power of L2 Ethereum in your pocket.

Banks don’t stand a chance.
