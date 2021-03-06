---
description: ''
sidebar: 'api'
prev: '/api/general/'
next: '/api/requestsigning/'
---


# Key Management

Before using Loopring's API, you need to know how to obtain and change your account's EdDSA key pair and ApiKey. When invoking the API, the ApiKey needs to be passed to the relayer as an HTTP header value; the EdDSA secret key is used to sign the request on the client-side digitally.

## Obtain EdDSA key pair and ApiKey

First of all, you need to register an account on Loopring Exchange (LoopringV2). Then you can use the "Export Account" function to export account-related information as a JSON object. The JSON object includes your EdDSA key pair and your account's ApiKey.

The exported JSON should look like the following:

```javascript=
{
    "exchangeName": "LoopringDEX: Beta 1",
    "exchangeAddress": "0x944644Ea989Ec64c2Ab9eF341D383cEf586A5777",
    "accountAddress": "0xe9577b420d96adfc97ff1e9e0557f8c73d7247fe",
    "accountId": 12345,
    "apiKey": "qXJpfTKrF0O5jIDPYIu7YkVgLFbvm5uIgPKBmHP2kBpcdKZjgfFKhIlE8evo9lKa",
    "publicKeyX": "0x2cba32a1bdb218aa380c1e42a8d7dcbf345ec9c914ecf37e34006b34260d1981",
    "publicKeyY": "0xb02f0e022052972c3f8b25d69e6f289cb8f847063c62840ea880089b2dc096e",
    "privateKey": "0x2bf7d29ae0293dd8b7538681341934a26ec5c98bd2f8c58e4d67bbede05d1b7"
}
```

The first four fields are constants to the current version of the Loopring Exchange; other fields are about your account. Among them, publicKeyX andpublicKeyY are collectively the EdDSA public key of your account, and privateKey is the EdDSA private key.

<code> Please keep your EdDSA key pair and ApiKey strictly confidential. If you leak these information, your assets will be at risk. In any case, Loopring Exchange's UI and its API will never ask you for your EdDSA private key. </code>

## Change EdDSA key pair and ApiKey

You can change your EdDSA key pair through the "Change Password" function on Loopring Exchange. Because changing the password involves an Ethereum transaction and zero-knowledge proof generation, it will take a while for your new EdDSA key pair to becomes effective. You can get account information through the /api/v3/account API. If thefrozen field is true, it means that your account is in the processing of applying the new EdDSA key pair, during such a period, neither your previous EdDSA key pair nor your new EdDSA key pair can be used to sign requests.

When you change your password on Loopring.io, your ApiKey will also be automatically updated. You can also change your ApiKey using API.

### EdDSA Generation

The Loopring protocol does not specify how to generate or manage EdDSA key pairs. Loopring Exchange uses each account's Ethereum address and trading password to derive the EdDSA key pair. As Ethereum addresses are public information, the strength of your trading password is thus critical to the security of your trading assets.

<code> If you use Loopring Exchange's website to set the trading password, your password should be strong enough not to worry about being brute-forced; otherwise, you need to be careful not to use a simple password. Unlike a centralized exchange, brute-forcing your EdDSA key does not have to go through Loopring relayer - your EdDSA public key is stored on Ethereum, and hackers can read it out for brute force comparison. </code>

The algorithm for compute the EdDSA key pair is as follows (Python):

seed = keccakHash('LOOPRING' + address.toLowerCase() + keccakHash(password))
keyPair = myEdDSAGenerator.generate(seed)

where keccakHash returns the hex string of the kecca256 result.

### ApiKey Generation

ApiKey is a globally unique string randomly generated by the Loopring relayer and bound to your account when your account is registered.
