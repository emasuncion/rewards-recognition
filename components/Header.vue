<template>
  <v-container>
    <v-app-bar
      id="rnr-app-bar-navbar"
      app
      color="transparent"
      fixed
      flat
      :max-height="$vuetify.breakpoint.mobile ? 65 : 80"
    >
      <v-row class="d-flex align-center justify-content px-md-10">
        <img id="rnr-pte-logo" src="/img/pte_logo.png" />
        <h1 id="rnr-banner-title" class="mt-md-10 pt-md-5">
          REWARDS & RECOGNITION
        </h1>

        <v-spacer />

        <v-btn
          id="rnr-leaderboard"
          class="mt-md-10 pt-md-5"
          color="#999"
          :ripple="ripple"
          text
        >
          Leaderboard
        </v-btn>
        <v-btn
          id="rnr-star-count"
          class="mt-md-10 pt-md-5"
          color="#999"
          icon
          :ripple="ripple"
          tile
        >
          <v-icon>
            mdi-star
          </v-icon>
          0
        </v-btn>
        <v-btn
          id="rnr-faq"
          class="mt-md-10 pt-md-5"
          color="#999"
          :ripple="ripple"
          text
        >
          FAQ
        </v-btn>
        <v-btn
          id="rnr-account"
          class="mt-md-10 pt-md-5"
          color="#999"
          icon
          :ripple="ripple"
          tile
        >
          <v-icon>
            mdi-account
          </v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        ripple: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  #rnr-pte-logo {
    width: 6.5em;
    margin-top: 4.1em;
  }

  #rnr-banner-title {
    color: #fff;
  }

  #rnr-leaderboard,
  #rnr-star-count,
  #rnr-faq,
  #rnr-account {
    &:hover {
      color: #fff !important;
    }
    &::before,
    &::after {
      background-color: transparent !important;
    }
  }
</style>
