<template>
  <a
    :href="bannerLink"
    class="main-banner__link">
      <span
        class="main-banner__image"
        :style="{ backgroundImage: `url(${bannerImage})`}"></span>
        <div class="main-banner__txt" v-if="bannerDesc.length > 0">
          <strong class="main-banner__title">
            <span class="main-banner__title--block" v-html="bannerDesc[0]" :style="{color: bannerDescColor[0]}"></span>
            <span class="main-banner__title--block" v-html="bannerDesc[1]" :style="{color: bannerDescColor[1]}"></span>
          </strong>
          <p class="main-banner__sub-txt" v-if="bannerDesc[2]" :style="{color: bannerDescColor[2]}">{{bannerDesc[2]}}</p>
      </div>
  </a>
</template>

<script>
export default {
  name: 'MainBannerItem',
  props: {
    bannerLink: {
      type: String,
      default: ''
    },
    bannerImage: {
      type: String,
      default: ''
    },
    bannerDesc: {
      type: Array,
      default: function () {
        return []
      }
    },
    bannerDescColor: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-banner__link {
  display: block;
  flex-direction: column;
  position: relative;
  font-size: 100vw;
}
.main-banner__image {
  display: block;
  width: 100%;
  padding-bottom: 76%;
  background: center center / contain no-repeat;
}
.main-banner__txt {
  position: absolute;
  top: 10.5263%;
  left: 6.5%;
  width: 87%;
  z-index: 1;
}
.main-banner__title {
  display: block;
  font-weight: 700;
  font-size: 0.065em;
  color: #333;
  text-align: left;
  line-height: 1.4;
  &--block {
    display: block;
  }
}
.main-banner__sub-txt {
  display: block;
  margin-top: 2%;
  font-size: 0.035em;
  color: #333;
}
</style>
