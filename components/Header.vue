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

        <span v-if="showHeaderActions" class="d-flex">
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
            <v-icon> mdi-star </v-icon>
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

          <v-menu offset-y>
            <template #activator="{on, attrs}">
              <v-btn
                id="rnr-account"
                class="mt-md-10 pt-md-5"
                color="#999"
                v-bind="attrs"
                icon
                :ripple="ripple"
                tile
                v-on="on"
              >
                <v-icon> mdi-account </v-icon>
                {{ user.data.displayName }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in accountItems" :key="index">
                <v-list-item-title
                  v-if="item.name === 'Logout'"
                  tag="button"
                  class="rnr-account-menu-items"
                  @click.prevent="logout"
                >
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-title
                  v-else
                  tag="button"
                  class="rnr-account-menu-items"
                >
                  {{ item.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </span>
      </v-row>

      <v-app-bar-nav-icon
        v-if="showHeaderActionsMobile"
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
          <v-list-item class="mx-auto">
            <v-btn
              class="mx-auto"
              color="#999"
              text
              @click.stop="drawer = !drawer"
            >
              <v-icon> mdi-close </v-icon>
            </v-btn>
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
              <v-icon> mdi-star </v-icon>
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
              @click.prevent="logout"
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
        accountItems: [
          {name: 'Profile', action: 'logout'},
          {name: 'Logout', action: 'logout'}
        ],
        drawer: false,
        group: null,
        ripple: false
      };
    },

    computed: {
      ...mapGetters(['user']),

      showHeaderActions() {
        return !this.$vuetify.breakpoint.smAndDown && this.user.isAuthenticated;
      },

      showHeaderActionsMobile() {
        return this.$vuetify.breakpoint.smAndDown && this.user.isAuthenticated;
      }
    },

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
  width: auto;
  align-self: center;

  &:hover {
    color: #fff !important;
  }
  &::before,
  &::after {
    background-color: transparent !important;
  }
}

.rnr-account-menu-items {
  cursor: pointer;
}
</style>
