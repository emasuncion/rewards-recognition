<template>
  <v-dialog
    :value="value"
    :width="width"
    :persistent="persistent"
    @input="$emit('input', arguments[0])"
  >
    <slot />
  </v-dialog>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        required: true,
        default: false
      },
      width: {
        type: String,
        default: '590px'
      },
      persistent: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
