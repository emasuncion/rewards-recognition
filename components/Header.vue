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
      <v-row class="d-flex align-center" align="center">
        <h1 id="rnr-banner-title" class="mx-md-auto">
          REWARDS & RECOGNITION
        </h1>

        <v-btn
          id="rnr-leaderboard"
          class="mx-md-4"
          color="#999"
          :ripple="ripple"
          text
        >
          Leaderboard
        </v-btn>
        <v-btn
          id="rnr-star-count"
          class="mx-md-4"
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
          id="rnr-account"
          class="mx-md-4 pr-md6"
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
  #rnr-app-bar-navbar {
    border-bottom: solid thin #95989A !important;
  }

  #rnr-banner-title {
    padding-left: 16.7% !important;
    color: #fff;
  }

  #rnr-leaderboard,
  #rnr-star-count,
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
