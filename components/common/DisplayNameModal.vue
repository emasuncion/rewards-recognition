<template>
  <v-container id="rnr-update-display-name-container">
    <CommonModal
      :value="value"
      :persistent="persistent"
      @input="$emit('input', arguments[0])"
    >
      <v-card class="pa-4">
        <v-card-title class="px-auto d-flex justify-center">
          Update Name
        </v-card-title>

        <v-card-text>
          <v-form
            id="rnr-update-display-name-form"
            ref="form"
            v-model="valid"
          >
            <v-text-field
              id="rnr-update-display-name-form-name"
              v-model="name"
              label="Name"
              type="text"
              :rules="nameRules"
              required
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="ml-auto"
            :disabled="!valid || isOperationInProgress"
            outlined
            text
            @click.prevent="updateName"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </CommonModal>
  </v-container>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'UpdateDisplayName',

    props: {
      persistent: {
        type: Boolean,
        default: true
      },
      value: {
        type: Boolean,
        required: true,
        default: false
      }
    },

    data() {
      return {
        error: null,
        isOperationInProgress: false,
        valid: false,
        name: '',
        nameRules: [
          name => !!name || 'Name is required',
          name => /.{3,}$/.test(name) || 'Name must be greater than 2 characters',
          name => /^[\w\d\s]+$/.test(name)
            || 'Name must not contain numbers or special characters'
        ]
      };
    },

    methods: {
      async updateName() {
        const user = firebase.auth().currentUser;

        try {
          this.isOperationInProgress = true;
          await user.updateProfile({displayName: this.name});
          await this.$store.dispatch('fetchUser', firebase.auth().currentUser);
          this.isOperationInProgress = false;
          this.$router.replace('/');
        } catch (err) {
          this.error = err.message;
        }
      }
    }
  };
</script>
