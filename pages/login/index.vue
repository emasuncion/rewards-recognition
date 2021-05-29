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
                @click.prevent="validate"
              >
                Login
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginPage',

    data: () => ({
      email: '',
      password: '',
      emailRules: [
        email => !!email || 'Email is required',
        email => /.+@.+\..+/.test(email) || 'Email must be valid'
      ],
      passwordRules: [password => !!password || 'Password is required']
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.$router.push('/');
        }
      }
    }
  };
</script>
