<template>
  <v-app id="rnr-app-main">
    <Header />
    <Nuxt />
  </v-app>
</template>

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background: #111 url('/img/stars.png') repeat center center;
  }

  #rnr-app-main {
    background: #111 url('/img/stars.png') repeat center center;
  }
</style>
