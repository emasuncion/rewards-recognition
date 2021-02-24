<template>
  <div class="d-flex align-center">
    <v-img
      :id="'rnr-'+className+'-star'"
      src="/img/star_outline.svg"
      max-width="25%"
    />
    <span :id="'rnr-'+className+'-text'" class="rnr-category-text">
      {{ categoryName }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Star',
    props: {
      categoryName: {
        type: String,
        default: () => {}
      },
      className: {
        type: String,
        default: () => {}
      }
    }
  };
</script>

<style lang="scss" scoped>
  #rnr-value-creator-star {
    margin-top: 15% !important;
    margin-left: 45% !important;
  }

  #rnr-people-developer-star {
    margin-left: 33% !important;
  }

  #rnr-value-creator-text {
    color: #999;
    margin-top: 22% !important;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }

  #rnr-people-developer-text,
  #rnr-business-operator-text {
    color: #999;
    margin-top: 7% !important;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }

  .rnr-category-text {
    font-size: 1.4em;
  }
</style>
