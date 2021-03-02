<template>
  <v-container>
    <CommonStarModal
      :value="value"
      :persistent="persistent"
      @input="$emit('input', arguments[0])"
    >
      <v-card class="pt-5 px-10 pb-7">
        <v-card-title class="px-auto headline d-flex justify-center" primary-title>
          {{ categoryName }}
        </v-card-title>
        <v-card-subtitle class="d-flex justify-center py-3">
          A chance to be acknowledged;
          A chance to commend fellow colleagues.
        </v-card-subtitle>

        <v-card-text>
          <v-form
            ref="form"
            v-model="isFormValid"
            :disabled="isOperationInProgress"
          >
            <v-combobox
              dense
              filled
              label="Name"
            />

            <v-textarea
              ref="descriptionInput"
              v-model="description"
              label="Description"
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
                :disabled="!isSubmitButtonEnabled"
                :loading="isOperationInProgress"
                depressed
              >
                Commend
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </CommonStarModal>
  </v-container>
</template>

<script>
  export default {
    name: 'ValueCreatorModal',
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
        isFormValid: false,
        isSubmitButtonEnabled: false,
        isOperationInProgress: false
      };
    },
    watch: {
      isFormValid(value) {
        this.isSubmitButtonEnabled = value;
      }
    },
    methods: {
      closeModal() {
        this.$emit('input', false);
      }
    }
  };
</script>
