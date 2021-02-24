<template>
  <v-footer
    id="rnr-footer"
    class="ml-auto mr-6 mb-6"
    absolute
    color="transparent"
    max-width="100%"
  >
    <v-btn
      class="pr-2"
      :ripple="ripple"
      text
    >
      ? HELP
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      ripple: false
    };
  }
};
</script>

<style lang="scss" scoped>
  #rnr-footer button {
    &:hover {
      color: #fff !important;
    }
    &::before,
    &::after {
      background-color: transparent !important;
    }

    color: #999;
    right: 0;
    position: absolute;
  }
</style>
