<template>
  <v-app id="rnr-app-main">
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<style lang="scss">
  html {
    overflow: hidden !important;
  }

  #rnr-app-main {
    background: #111 url('/img/stars.png') repeat center center;
  }
</style>
