<template>
  <v-container id="rnr-app-bar-container">
    <v-app-bar
      id="rnr-app-bar-navbar"
      app
      color="transparent"
      fixed
      flat
      :max-height="$vuetify.breakpoint.mobile ? 65 : 80"
    >
      <v-row class="d-flex align-center justify-content px-md-10">
        <img id="rnr-pte-logo" src="/img/pte_logo.png">
        <h1
          v-if="$vuetify.breakpoint.mdAndUp"
          id="rnr-banner-title"
          class="mt-md-10 pt-md-5"
        >
          REWARDS & RECOGNITION
        </h1>
        <h1
          v-if="$vuetify.breakpoint.smAndDown"
          id="rnr-banner-title"
          class="mt-10 pt-5"
        >
          R&R
        </h1>

        <v-spacer />

        <span v-if="!$vuetify.breakpoint.smAndDown && user.isAuthenticated">
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
            @click.prevent="logout"
          >
            <v-icon>
              mdi-account
            </v-icon>
          </v-btn>
        </span>
      </v-row>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        class="mt-10"
        color="#999"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
      fixed
      right
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-title>
              Rewards & Recognition
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn
              id="rnr-leaderboard"
              class="mx-auto"
              color="#999"
              :ripple="ripple"
              text
            >
              Leaderboard
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              id="rnr-star-count"
              class="mx-auto"
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
          </v-list-item>
          <v-list-item>
            <v-btn
              id="rnr-faq"
              class="mx-auto"
              color="#999"
              :ripple="ripple"
              text
            >
              FAQ
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              id="rnr-account"
              class="mx-auto"
              color="#999"
              icon
              :ripple="ripple"
              tile
            >
              Log out
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'Header',

    data() {
      return {
        drawer: false,
        group: null,
        ripple: false
      };
    },

    computed: {...mapGetters(['user'])},

    methods: {...mapActions(['logout'])}
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
