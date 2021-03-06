<template>
  <v-container id="rnr-star-modal-container">
    <CommonStarModal
      :value="value"
      :persistent="persistent"
      class="rnr-star-modal-contents"
      @input="$emit('input', arguments[0])"
    >
      <v-card class="pt-5 px-10 pb-7">
        <v-card-title
          class="px-auto headline d-flex justify-center"
          primary-title
        >
          {{ categoryName }}
        </v-card-title>
        <v-card-subtitle class="d-flex justify-center py-3 sub-center">
          {{ categorySubtitle1 }}
        </v-card-subtitle>
        <v-card-subtitle class="d-flex justify-center py-3 sub-center">
          {{ categorySubtitle2 }}
        </v-card-subtitle>

        <v-card-text>
          <v-form ref="form" v-model="isFormValid">
            <v-select
              v-model="selectedNominee"
              :items="usersList"
              item-text="name"
              item-value="email"
              :rules="listRules"
              class="mt-4"
              dense
              label="Select nominee"
            />

            <v-textarea
              ref="descriptionInput"
              v-model="description"
              label="Description"
              :rules="descriptionRules"
              outlined
              no-resize
              rows="5"
            />

            <v-card-actions class="pa-0">
              <v-spacer />
              <v-btn
                :disabled="isOperationInProgress"
                outlined
                text
                @click.prevent="closeModal"
              >
                Cancel
              </v-btn>
              <v-btn
                :disabled="!isFormValid || isOperationInProgress"
                :loading="isOperationInProgress"
                depressed
                @click.prevent="commend"
              >
                Commend
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </CommonStarModal>

    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      :timeout="timeout"
    >
      {{ snackbarText }}
      <template #action="{attrs}">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'CommendModal',

    props: {
      categoryName: {
        type: String,
        required: true
      },
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
        categorySub1: {
          valueCreator: `Individual that exemplify improvements to delivery outcomes and continuously
        achieving higher client satisfaction on the delivery.`,
          peopleDeveloper: `Individual that exemplify leadership skill of developing other
        people to do better job as well as continuously improving oneself technically
        and functionally in the organization.`,
          businessOperator:
            'Individual that exemplify Delivery Excellence and meet schedule and budget on time.'
        },
        categorySub2: {
          valueCreator:
            'Being able to provide continuous improvement and sustainable process changes within the team.',
          peopleDeveloper:
            'Being able to recognize achievements and contributions within the team.'
        },
        description: '',
        descriptionRules: [desc => !!desc || 'Description is required'],
        isFormValid: false,
        isSubmitButtonEnabled: false,
        isOperationInProgress: false,
        listRules: [list => !!list || 'Nominee is required'],
        selectedNominee: '',
        snackbarText: '',
        multiLine: true,
        snackbar: false,
        timeout: 2000
      };
    },

    computed: {
      ...mapGetters(['user', 'usersList']),

      categorySubtitle1() {
        let text = '';
        if (this.categoryName === 'Value Creator') {
          text = this.categorySub1.valueCreator;
        } else if (this.categoryName === 'People Developer') {
          text = this.categorySub1.peopleDeveloper;
        } else if (this.categoryName === 'Business Operator') {
          text = this.categorySub1.businessOperator;
        }
        return text;
      },

      categorySubtitle2() {
        let text = '';
        if (this.categoryName === 'Value Creator') {
          text = this.categorySub2.valueCreator;
        } else if (this.categoryName === 'People Developer') {
          text = this.categorySub2.peopleDeveloper;
        }
        return text;
      }
    },

    watch: {
      isFormValid() {
        return this.listRules && this.descriptionRules;
      }
    },

    methods: {
      ...mapActions(['saveCommendation']),

      async commend() {
        this.isOperationInProgress = true;

        const param = {
          data: {
            category: this.categoryName,
            value: this.description,
            commended_by: this.user.data.displayName
          },
          user: this.selectedNominee
        };
        this.snackbarText = await this.saveCommendation(param);

        this.isOperationInProgress = false;
        this.snackbar = true;
        this.$refs.form.reset();
      },

      closeModal() {
        this.$emit('input', false);
      }
    }
  };
</script>

<style lang="scss" scoped>
.sub-center {
  text-align: center;
}
</style>
