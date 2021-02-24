<template>
  <div id="rnr-content-container" class="mt-12 px-15">
    <v-row>
      <v-col cols="6">
        <div class="rnr-strapline">
          <div>
            <em>
              A chance to be acknowledged;
            </em>
          </div>
          <div>
            <em>
              A chance to commend fellow colleagues.
            </em>
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <CommonStar category-name="Value Creator" class-name="value-creator" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" offset-md="3">
        <CommonStar category-name="People Developer" class-name="people-developer" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" offset-md="1">
        <CommonStar category-name="Business Operator" class-name="business-operator" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  };
</script>

<style lang="scss" scoped>
  .rnr-strapline {
    font-size: 1.75em;
    margin-top: 15%;
    text-align: center;
  }
</style>
