<template>
  <v-container id="rnr-login-container" class="my-auto">
    <v-col
      cols="12"
      sm="6"
      md="6"
      offset-md="3"
    >
      <v-card
        id="rnr-login-card"
        elevation="2"
        class="pa-4"
      >
        <v-card-title>
          <h2 id="rnr-login-card-title">
            Login
          </h2>
        </v-card-title>

        <v-card-text>
          <v-form
            id="rnr-login-card-form"
            ref="form"
            v-model="valid"
          >
            <v-text-field
              id="rnr-login-card-form-email"
              v-model="email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              id="rnr-login-card-form-password"
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-row>
              <v-btn
                id="rnr-login-card-form-btn"
                class="ml-auto mr-4 mt-4"
                type="submit"
                :disabled="!valid"
                @click.prevent="validate"
              >
                Login
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>

    <CommonDisplayNameModal
      v-if="isUpdateDisplayNameShowing"
      v-model="isUpdateDisplayNameShowing"
      :persistent="true"
    />
  </v-container>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'LoginPage',

    middleware: ['guest'],

    data: () => ({
      email: '',
      password: '',
      emailRules: [
        email => !!email || 'Email is required',
        email => /.+@.+\..+/.test(email) || 'Email must be valid'
      ],
      passwordRules: [
        password => !!password || 'Password is required',
        password => /^[a-zA-Z0-9\s,-]{3,}$/.test(password)
          || 'Password must be greater than 3 characters'
      ],
      error: null,
      isUpdateDisplayNameShowing: false,
      valid: false
    }),

    watch: {
      valid() {
        return this.emailRules && this.passwordRules;
      }
    },

    created() {
      this.$fire.auth.onAuthStateChanged(user => this.fetchUser(user));
    },

    methods: {
      ...mapActions(['fetchUser']),

      async login() {
        try {
          const user = await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );

          if (!user.user.displayName) {
            this.isUpdateDisplayNameShowing = true;
          } else {
            this.$router.replace('/');
          }
        } catch (e) {
          this.error = e.message;
        }
      },

      validate() {
        if (this.$refs.form.validate()) {
          this.login();
        }
      }
    }
  };
</script>
