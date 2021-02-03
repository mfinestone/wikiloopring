<template>
<img src="/logo.png" alt="Loopring" style="width:100%;height:50px;">
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 200
    }
  },
  computed: {
    getWidth() {
      return this.width;
    },
    getHeight() {
      return Math.ceil((this.getWidth / 48) * 48);
    }
  }
};
</script>
