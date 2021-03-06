---
description: ''
sidebar: 'faq'
next: '/faq/howto/'
---

# General FAQs

## What is Loopring?

### Loopring's Vision and Objectives

Blockchain technology empowers real ownership - ownership of digital assets, and soon, ownership of legacy financial and physical assets as well. This technology and the cryptoassets it supports have upended traditional notions of currency and will establish the foundation of the next generation of finance.

Ironically, however, most cryptoasset holders still trade these assets on Centralized Exchanges, or CEXes, temporarily giving up their ownership (keys) to intermediaries, and eschewing a primary benefit & virtue of the asset itself. Over the years, users have lost more than two billion USD worth of cryptoassets on these custodial platforms. More depressingly, it is often difficult to distinguish if assets were stolen by external hackers or an inside job by malicious owners.

We believe that cryptoasset trading should be and will be risk-free and worry-free in terms of custody. Traders should have strong cryptographic guarantees that their assets cannot be wrongfully taken from the platforms where they trade - not by hackers, not by exchange owners, and not even by state-level adversaries. The solution is to trade on non-custodial exchanges, also referred to as Decentralized Exchanges, or DEXs - powered by the underlying blockchains & smart contracts where these assets natively live.

We also envision that trading cryptoassets on DEXs will be less expensive compared to CEXes, because security is essentially outsourced to the blockchain and cryptographic processes, instead of large, expensive, fallible human teams. These cost savings can be passed through to users. Finally, liquidity will be more fluid, able to be aggregated at a much larger scale, if not globally.

Loopring's objective is to design and engineer the best-in-class orderbook-based DEX protocol on Ethereum. With Loopring v3 - using a cutting-edge construction called zkRollup - we have achieved this. We wish to make this infrastructure available for the entire industry, powering people and projects to build highly scalable non-custodial crypto-exchanges, and improving cryptoasset holders' overall trading experience and peace of mind. Satisfying owners, users, and regulators, we expect that our effort will accelerate the adoption of blockchain technology and cryptocurrencies.

### Loopring Protocol is Secure

The security of user assets is and will always remain Loopring's top priority. Previous versions of the Loopring protocol did not take custody of user assets at all - traders were always in possession of their funds. The latest version, Loopring 3.0, relies on smart contracts to hold assets to be traded. We designed the protocol in such a way that users can always claim their assets in all circumstances, even when DEX operators are evil or cease to exist. Loopring exchanges inherit 100% Ethereum-level security guarantees.

Loopring 3.0 does not rely on any external cryptoeconomic assumptions, challenge periods, or fraud proofs as found in Optimistic Rollup or other layer 2 scaling solutions. Instead, the Loopring protocol enforces every execution with validity proofs (Zero-Knowledge Proofs) to update and attest DEX states, achieving the highest level of security. All actions are correct by construction, or simply cannot happen: exchange operators are constrained to purely protocol-described behaviour.

We claim that Loopring v3 offers users the same level of security as the underlying Ethereum blockchain if a feature called On-Chain Data Availability (OCDA) is turned on. Trading on Loopring-based DEXs does not demand traders place any trust whatsoever in the DEX owners or operators, nor the Loopring team. In terms of crypto-trading, we believe being trustless will become the new standard of trustworthiness.

### The Redemption of Centralized Exchanges

If you have ever run a centralized exchange business for cryptocurrencies, you know the stress and fear of being hacked. You also know the regulatory burden which is being imposed on custodial crypto-businesses, and rightfully so. Loopring ensures that even if all your servers were compromised, you will, at worst, only lose a couple of Ether that you use as transaction fees (gas). You can always recover from such an incident and resume your business. Even in the unimaginable case of being blackmailed, extorted or threatend with violence, an exchange owner simply cannot access user funds - a powerful deterrent. And without control over user assets, you also shed the bulk of regulatory burden. Control is a liability. Using an open-sourced, audited, cryptographically sound protocol means less time & money spent on security & compliance, and more on growing your business.

### Loopring is Remarkably Performant

DEXs have been around on Ethereum for a few years already, but have not yet reached their full potential. One main reason is because most DEX protocols suffer terrible performance issues: the throughput is too low while the cost is too high. This is also commonly referred to as the scalability problem. The performance issues prevent those DEX protocols (and the products built atop) from being massively adopted as no professional market makers or traders can use these as their primary trading venues. The performance vs. security tradeoff has indeed been a polarizing one. Loopring v3 was conceived to solve DEX scalability without compromising on Ethereum security.

We believe the way many trading protocols use the underlying blockchain is fundamentally flawed. Loopring takes a different approach known as zkRollup proposed by Vitalik Buterin. zkRollup migrates most computations off the blockchain and only broadcasts exchanges' new state roots and their corresponding proofs onto the blockchain. In other words, the Loopring protocol uses the underlying Ethereum blockchain mainly as a data layer and a Zero-Knowledge Proof verification thin-logic layer. As a result, Loopring's throughput is as high as 2,025 trades per second with OCDA, and 16,400 trades per second without. The corollary is that the cost per trade settlement is as small as $0.00015 USD, which can be further optimized (halved in near-term) by using techniques such as GPU-based proof generation and recursive SNARKs.

We also believe that Loopring's performance is sufficient for professional traders and market makers to deploy algorithmic strategies and other automated trading bots. This was not previously possible on any DEX as it was prohibitively slow and expensive. By building on top of Loopring 3.0, orderbook-based DEXs can be commercially viable for the first time. With Loopring, we expect non-custodial exchanges to begin outcompeting and displacing many centralized counterparts.

## Why Use Loopring?

## Etc
