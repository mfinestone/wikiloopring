---
description: ''
sidebar: 'faq'
prev: '/faq/amm'
---

# Exchange V1 (Deprecated)

## Original Link on Medium - https://medium.com/loopring-protocol/loopring-exchange-faq-196d6c40f6cf

## Frequently Asked Questions about the Loopring Exchange, Ethereum’s zkRollup DEX.

    Note: this FAQ is for Loopring Exchange v1, which is deprecated. Loopring Exchange v2, which runs on the upgraded Loopring protocol, is available at https://exchange.loopring.io. Many concepts are still similar (both run on a zkRollup), but there are also many differences/improvements. Stay tuned for a new FAQ for v2 coming soon.

Image for post
Image for post
Table of Contents

    Loopring Overview
    Questions Relating to Activation of Layer 2 Accounts
    Questions Relating to Transaction Processing Times
    Questions Relating to Fees
    Questions Relating to Trading, Transfers, and Asset Types

Loopring Overview
What is Loopring Exchange?

Loopring Exchange is Ethereum’s first and only zkRollup DEX. It is a completely non-custodial orderbook exchange that can replicate the high-performance trading experience of centralized exchanges. That means users can trade speedily and cheaply — without worrying about Ethereum congestion or gas fees — while maintaining self-custody and control of their assets at all times. Loopring Exchange is built atop the open source Loopring Protocol.

Loopring Exchange also acts as a payment app, as it supports the recently launched Loopring Pay. Every user can send ETH and ERC20 token transfers to any other user on the zkRollup instantly, cheaply, and securely.

For those who may be accustomed to centralized exchanges like Coinbase Pro or Binance, it’s helpful to think of Loopring Exchange generally like that, but while living on Ethereum, so users have self-custody security at all times, and user assets can never be stolen by the exchange, by hackers, or frozen by regulators. It also functions similarly in that getting assets on and off the exchange may take a bit of time and network fees, but once on the exchange, everything is instant and cheap, thanks to our zkRollup technology.
What is a zkRollup?

Quick Answer: zkRollup is a layer-2 scaling solution on Ethereum, allowing much higher throughput (transactions per second) and much lower costs, without sacrificing security.

Detailed: zkRollup is a type of scaling solution for Ethereum, commonly placed in the category of “layer 2”, although at times we like to think of it as “layer 1.5”. It is used to process more transactions, more quickly, and for a cheaper cost. It does this by moving all of the heavy lifting (computations) off-chain, but keeping the rules enforced by validity proofs: mathematical proofs that cannot be falsified. Because Ethereum verifies these proofs, and stores enough data to tell exactly which off-chain account owns what, zkRollups inherit the same non-custodial security as Ethereum.

Loopring has built a zkRollup, and that allows our platform to process user transactions (trades and transfers) instantly, and for very cheap. And as long as Ethereum exists, your assets are completely in your control. We are ~1000x faster and cheaper than a “normal” layer-1 DEX. Read more: quickly, or in-depth, or watch this 45 minute video.
Questions Relating to Activation of Accounts and Logging In
Image for post
Image for post
How do I activate an account?

All you need to activate an account is an Ethereum address. Activating an account means your Ethereum address is tied to a “slot” (Account ID) in the off-chain account system (the Merkle tree). This takes one on-chain transaction, and so that means paying a gas fee on Ethereum, and waiting for the transaction to be confirmed. Then it takes 5–30 minutes longer for the account to be created on the zkRollup, and reflected on your interface. [See the section below on “Times” to find out why].
Why do I even need to activate an account? I’ve never heard that for a DEX before?

You haven’t heard of it because we are the first zkRollup DEX :). Activate just means mapping your Ethereum address to the Merkle tree. It is necessary to realize the 1000x scaling benefits vs other DEXs.
Is personal info or KYC needed?

No, just an Ethereum address.
I didn’t enter a password, what gives?

There are no passwords. Instead, each exchange account is controlled by a special “account key” which is derived from your Ethereum signatures. You don’t need to remember anything extra, only have access to your address, as usual. Read more.
So how do I log back in?

To log back in, you simply sign a message from your Ethereum address. The signature will be used to recompute your account key. Note that your account key lives only in your browser session and will not be sent to Loopring’s relayer or any other remote servers.
Image for post
Image for post
Image for post
Image for post
Why is there sometimes a small fee for activating an account, besides the gas fee?

The current version of the Loopring protocol can only support up to 1 million users (slots) for each exchange (to reduce Zero-Knowledge proof cost). We charge a small account activation fee (0.0036 ETH) to cover relayer costs, Ethereum transaction gas, and to avoid a Sybil attack (we don’t want someone filling up the whole tree of 1 million slots just to mess with us). Right now, that cost is waived.
Questions Relating to Transaction Processing Times
Image for post
Image for post
My deposit or withdrawal is taking a long time to process, what’s happening?

Quick Answer: To get on or off the Loopring platform (zkRollup environment), your deposits and withdrawals must interact with Ethereum blockchain, which can be subject to congestion.

Detailed: When you are actually on the Loopring Exchange trading or transferring funds, everything happens instantly and without paying gas. This is because these actions happen on our zkRollup — a sort of fast lane — and not on the main Ethereum road. But to get ON or OFF this fast lane (deposits or withdrawals), you must interact with the Ethereum network, so high gas costs and congestion may make these actions take a while to confirm.
But I see my Ethereum transaction has already succeeded on chain, but the deposit or withdrawal still says “processing”, and I don’t see my assets where they should be?

Quick Answer: This is normal. Once confirmed on chain, the relayer still has to ‘prove’ what happened, and because it does so in batches, sometimes it takes a while. Fear not: the protocol is completely non-custodial, your assets are always yours, but deposits/withdrawals can at times be slow, even after the on-chain transaction has succeeded.

Detailed: After the Ethereum transaction is settled and 30 confirmations happen on-chain, the deposit or withdrawal need to be ‘proven’ by the Relayer. Basically, the Relayer needs to ‘translate this message’ onto the other respective layer, and prove it is true by running a mathematical computation. To be most efficient, it does this in bigger batches, since there is a fixed cost associated with the proof. Sometimes it must wait for requests from other users, up to 30 minutes, before it starts ‘proving’ the batch. So if there’s not a lot of deposits or withdrawals in a given period, it can take longer (especially in these early days, with less consistent activity).

As more users and activity are on the exchange, this happens as quickly as every few minutes, since batches will fill up fast. Until then, we apologize that this can sometimes take an hour or more. The important thing to remember is: fear not, because the protocol is 100% non-custodial, and only users can control their own assets — it’s impossible for the exchange or anyone to take your funds. So while it sucks to wait, please wait a bit longer, it will get there.
Image for post
Image for post
What is the maximum amount of time a Deposit or Withdrawal should take?

In the longest scenario, deposits and withdrawals may take up to 2 hours to get fully processed. It takes 6 to 7 minutes for the user’s request to have 30 confirmations on-chain; the relayer waits up to 30 minutes to aggregate enough requests; and the prover will likely take 30 minutes. At that point, users are able to see the related withdrawal block (the batch that they are included in) on-chain waiting to be confirmed. As we are using a gas price lower than the suggested value, the withdrawal block may take longer than most user-initiated transactions. Please note, when more consistent activity will be on the exchange (and when the exchange is ported to our already optimized prover and latest protocol version), this process will take just a couple of minutes or less.
When must I wait for normal ‘layer 1’ Ethereum transactions to be completed?

Only when interacting with the Ethereum chain directly, so that means account activation, password reset, deposits, and withdrawals. Trades and transfers are instant.
Questions Relating to Fees
When must I pay gas fees?

As above, only when interacting with the Ethereum chain directly, so that means deposits, withdrawals, and when you first activate an account (or if need to ‘reset’ the account key in future). Trades and transfers do not require gas.
What fees do I pay to trade on Loopring?

To trade, you pay between 0% to 0.2% of your trade’s value, taken from the token you are buying. Specifically, for a maker order (a limit order that rests on the orderbook), you pay 0% when that eventually gets filled (and actually, you earn a fee due to there being rebates on all maker orders). For a taker order (an order you take from the book immediately), you pay between 0.06% and 0.20%, depending on your VIP tier level. Read more
Are there any other fees I need to pay?

As mentioned in the account activation section, there is sometimes a small ETH fee when you first activate an account. There can sometimes also be a very small ETH fee added in the moments where you have to pay gas — for example withdrawals have a fee of 0.02 ETH. We charge these fees to cover Zero-Knowledge proof cost and Ethereum transaction gas fee, and to avoid Sybil attack.
Questions Relating To Trading and Assets
Can I trade via API?

Yes, most certainly. Here is the Exchange API. In fact, Loopring Exchange being a zkRollup high-performance DEX means programmatic traders can trade just as if they were on a ‘normal’, legacy-style centralized exchange. That means hundreds of trades per second, free order placement and free order cancellation, low latency, and no gas fees. We can even support high-frequency traders.
Image for post
Image for post
https://docs.loopring.io/en/
Can the exchange support advanced order types?

Yes, but not at this moment. Advanced order types like stop loss, stop limit, post only, and more will be available at a later date.
Can I trade on the exchange from my mobile device?

Our mobile app is not yet ready, but it will be in the not-too-distant future. As can be seen in our latest monthly update [May], our mobile smart contract wallet recently completed audits. This Loopring Wallet will be tightly integrated with the exchange.

Note, even though you can only access the Loopring Exchange on desktop right now, you can use your mobile wallet to control it via WalletConnect.
How do Transfers (Payments) Work?

You can send instant and (currently) free payments to anyone else on Loopring’s zkRollup. Simply go to the Account page and hit “Transfer”.
Image for post
Image for post
What is the policy of listing new assets?

Discretion as to which token pairs to list rests with Loopring Technology Limited. Loopring Exchange can list any ERC20 token, but priority is to support assets that traders demand, and are from projects that move Ethereum and the crypto space forward. There must also be the preconditions for initial liquidity. The exchange does not charge listing fees, and does not list securities. Token issuers or liquidity providers can fill out this form for tokens they would like to list on Loopring Exchange.
Relevant smart contracts for the exchange:

Exchange address: https://etherscan.io/address/0x944644ea989ec64c2ab9ef341d383cef586a5777

Relayer address: https://etherscan.io/address/0x81a48f7bb0b8fce3db9faf013d63963ae4948c1d
