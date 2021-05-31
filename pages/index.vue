<template>
  <div id="rnr-content-container" class="mt-12 px-15">
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <div class="rnr-strapline">
          <div>
            <em> A chance to be acknowledged; </em>
          </div>
          <div>
            <em> A chance to commend fellow colleagues. </em>
          </div>
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="6"
      >
        <CommonStar
          category-name="Value Creator"
          class-name="value-creator"
          @open="openCommendModal"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        id="rnr-star-container"
        cols="12"
        sm="12"
        md="6"
        offset-md="3"
      >
        <CommonStar
          category-name="People Developer"
          class-name="people-developer"
          @open="openCommendModal"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        offset-md="1"
      >
        <CommonStar
          category-name="Business Operator"
          class-name="business-operator"
          @open="openCommendModal"
        />
      </v-col>
    </v-row>

    <CommonCommendModal
      v-if="isStarModalOpen"
      v-model="isStarModalOpen"
      :category-name="categoryName"
    />
  </div>
</template>

<script>
  export default {
    name: 'Index',

    middleware: ['authenticated'],

    data() {
      return {
        categoryName: '',
        isStarModalOpen: false
      };
    },

    methods: {
      openCommendModal(categoryName) {
        this.categoryName = categoryName;
        this.isStarModalOpen = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
.rnr-strapline {
  font-size: 1.75em;
  margin-top: 15%;
  text-align: center;
  color: $white;

  @include xsOnly {
    font-size: 1.5em;
    margin-top: 3em;
  }
}

#rnr-star-container {
  @include xsOnly {
    padding: 0 !important;
  }
}
</style>
