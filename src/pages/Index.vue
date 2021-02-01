<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
          
          </h2>
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          Decentralized Wallet &amp; Exchange. Done Right.
        </h1>
        <p class="text-xl font-medium text-center">
          An Ethereum Smart Wallet &amp; Exchange with zkRollup-based Trading, Transfers and AMMs.
          <br>
          <strong class="text-ui-primary">Freedom at your fingertips.</strong>
        </p>

       

        <div class="flex justify-center mt-8">
          <g-link
            to="/api/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Let's Go
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Privacy. By Default. <span class="border-b border-dashed border-ui-primary text-ui-primary">Own your crypto.</span>.
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ZapIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Fast, Cheap, and Easy to use
          </h3>
          <p class="text-lg text-left">
            Loopring Wallet integrates Loopring's zkRollup layer-2 scaling protocol to raise speeds and lower fees by 1000x, while inheriting the absolute same security guarantees as Ethereum mainnet. <span class="border-b border-dashed border-ui-primary text-ui-primary">No seriously</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Search the Documentation
          </h3>
          <p class="text-lg text-left">
            Our docs are fast by default too. Find what you are looking for in the <span class="border-b border-dashed border-ui-primary text-ui-primary">blink of an eye</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <MoonIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Dark Mode
          </h3>
          <p class="text-lg text-left">
            Do your eyes need a break? Dark mode at the click of a button.
          </p>
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
     const title = 'Loopring Exchange and Wallet';
    const description = 'Loopring allows anyone to build high-throughput, non-custodial, orderbook-based exchanges on Ethereum by leveraging Zero-Knowledge Proofs.';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
