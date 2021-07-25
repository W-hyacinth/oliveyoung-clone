<template>
  <li class="prod__item">
    <a
      :href="detailUrl"
      class="prod-thumb__link">
      <span
        v-if="item.BEST_GOODS_YN === 'Y'"
        class="prod-thumb__flag prod-thumb__flag--best">베스트</span>
      <em
        :style="{backgroundImage: `url('${customBackgroundUrl}')`}"
        :data-image-src="customBackgroundUrl"
        class="prod-thumb__image">
        <span class="visually-hidden">{{ item.GOODS_NM }} 상세 페이지로 이동</span>
      </em>
    </a>
    <div class="prod-info__area">
      <div class="prod__func">
        <span
          v-if="item.ONLYONE_SCT_CD === '1'"
          class="prod__only">EXCLUSIVE</span>
        <div class="prod__util">
          <button
            :aria-pressed="isFavorite ? 'true' : 'false'"
            type="button"
            class="prod__btn prod__btn--like"
            @click="bookmarkFavor">
            <IconFavorite size="20" :isActive="isFavorite" />
            <span class="visually-hidden">찜하기</span>
          </button>
          <button type="button" class="prod__btn prod__btn--cart" @click="cartProd">
            <IconCart size="20" />
            <span class="visually-hidden">장바구니 담기</span>
          </button>
        </div>
      </div>
      <a
        :href="detailUrl"
        class="prod__link">
        <strong class="prod__name">{{ item.GOODS_NM }}</strong>
        <div class="prod-discount" v-if="item.DSCNT_YN === 'Y'">
          <span class="prod-price__percent">{{discountPercent}}</span>
          <del class="prod-price__cnt prod-price__cnt--origin" :data-unit="monetaryUnit">{{ numberWithComma(item.SUP_PRC) }}</del>
        </div>
        <div class="prod-price">
          <strong class="prod-price__cnt prod-price__cnt--current" :data-unit="monetaryUnit">{{ numberWithComma(item.SALE_PRC) }}</strong>
          <span v-if="item.QUICK_YN === 'Y'" class="prod-today">오늘드림</span>
        </div>
        <div class="prod-rating">
          <span class="prod-rating__point">{{ prodPoint }}</span>
          <span v-if="item.PRMUM_GDAS_TOT_CNT" class="prod-rating__cnt">({{ maxCnt(item.PRMUM_GDAS_TOT_CNT, 999) }})</span>
        </div>
        <div v-if="isProdFlag" class="prod-label__area">
          <span v-if="item.DSCNT_YN === 'Y'" class="prod-label__flag prod-label__flag--sale">세일</span>
          <span v-if="item.CPN_YN === 'Y'" class="prod-label__flag prod-label__flag--coupon">쿠폰</span>
          <span v-if="item.PRST_YN === 'Y'" class="prod-label__flag prod-label__flag--gift">증정</span>
        </div>
      </a>
    </div>
  </li>
</template>

<script>
import IconFavorite from '@/components/icon/IconFavorite'
import IconCart from '@/components/icon/IconCart'

export default {
  name: 'ProductItem',
  data () {
    return {
      isFavorite: false
    }
  },
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  },
  methods: {
    bookmarkFavor: function () {
      this.isFavorite = !this.isFavorite
    },
    cartProd: function () {
      const checkCart = confirm(`${this.item.GOODS_NM} 상품을 장바구니에 담으시겠습니까`)
      if (checkCart) {
        alert('장바구니 담기 완료\n[장바구니 페이지는 아직 구현이 되어있지 않습니다.]')
      }
    },
    maxCnt: function (val, maximum) {
      return parseInt(val) > maximum ? `${maximum}+` : val
    }
  },
  computed: {
    customBackgroundUrl: function () {
      return this.item.IMG_PATH_NM ? `https://image.oliveyoung.co.kr/uploads/images/goods/${this.item.IMG_PATH_NM}` : 'none'
    },
    detailUrl: function () {
      return `https://m.oliveyoung.co.kr/m/goods/getGoodsDetail.do?goodsNo=${this.item.GOODS_NO}&dispCatNo=${this.item.DISP_CAT_NO}&trackingCd=Result_1`
    },
    discountPercent: function () {
      const origin = parseInt(this.item.SUP_PRC)
      const discount = parseInt(this.item.SALE_PRC)
      return `${parseInt((origin - discount) / origin * 100)}%`
    },
    prodPoint: function () {
      return (Number(this.item.GOODS_EVAL_SCR_VAL) / 2).toFixed(1)
    },
    isProdFlag: function () {
      return this.item.DSCNT_YN === 'Y' || this.item.CPN_YN === 'Y' || this.item.PRST_YN === 'Y'
    },
    monetaryUnit: function () {
      switch (this.item.LANG_CD) {
        case 'ko':
          return '원'
        case 'en':
          return '$'
      }
    }
  },
  components: {
    IconFavorite,
    IconCart
  }
}
</script>

<style lang="scss" scoped>
$highlight : #f27370;
$brandColor: #9bce26;

.prod__item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  width: calc(50% - 8px);
}
.prod-thumb__link {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 8px 0;
  background-color: #efefef;
}
.prod-thumb__image {
  flex: 0 1 auto;
  width: 160px;
  display: block;
  background: center center / cover no-repeat;
  mix-blend-mode: multiply;
  &:before {
    display: block;
    padding-bottom: 100%;
    content: "";
  }
}
.prod-thumb__flag {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 8px;
  width: 42px;
  height: 42px;
  font-weight: 700;
  font-size: 12px;
  color: transparent;
  border: 3px solid transparent;
  background-color: #dedede;
  z-index: 1;
  &--best {
    color: #fff;
    background-color: $highlight;
  }
}
.prod-info__area {
  display: flex;
  flex-direction: column;
  margin: 4px 0 8px;
}
.prod__func {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 12px;
}
.prod__only {
  font-weight: 700;
  font-size: 14px;
  color: $brandColor;
  line-height: 1.4;
}
.prod__util {
  margin-left: auto;
  display: flex;
  flex-direction: row;
}
.prod__btn {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:nth-of-type(n+2) {
    margin-left: 12px;
  }
}
.prod__link {
  display: flex;
  flex-direction: column;
}
.prod__name {
  overflow: hidden;
  flex: 0 0 auto;
  display: -webkit-box;
  font-size: 14px;
  color: #000;
  line-height: 1.2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.prod-discount {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
}
.prod-price {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
}
.prod-price__percent {
  flex: 0 0 auto;
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #e02020;
  line-height: 20px;
}
.prod-price__cnt {
  display: flex;
  flex: 0 0 auto;
  &:not([data-unit="원"]) {
    &:before {
      flex: 0 0 auto;
      display: flex;
      font-size: 15px;
      content: attr(data-unit)
    }
  }
  &[data-unit="원"] {
    &:after {
      flex: 0 0 auto;
      display: flex;
      font-size: 15px;
      content: attr(data-unit)
    }
  }
}
.prod-price__cnt--origin {
  margin-left: 5px;
  font-size: 14px;
  color: #888;
}
.prod-price__cnt--current {
  font-weight: 700;
  font-size: 17px;
  color: #000;
}
.prod-today {
  display: block;
  padding-left: 22px;
  margin-left: 2px;
  font-weight: 700;
  font-size: 12px;
  color: #e95294;
  line-height: 20px;
  background: url('~@/assets/images/common/ico_oneday.svg') center left 4px / 16px no-repeat;
}
.prod-rating {
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  &__point {
    flex: 0 0 auto;
    display: flex;
    font-size: 13px;
    color: #333;
    &:before {
      flex: 0 0 auto;
      display: block;
      margin-right: 4px;
      color: $highlight;
      content: "\2605"
    }
  }
  &__cnt {
    display: block;
    margin-left: 4px;
    font-size: 13px;
    color: #666;
  }
}
.prod-label__area {
  display: flex;
  flex-direction: row;
  margin-top: 8px;
}
.prod-label__flag {
  flex: 0 0 auto;
  display: block;
  padding: 0 4px;
  font-size: 12px;
  line-height: 16px;
  border: 1px solid transparent;
  border-radius: 2px;
  &:nth-of-type(n+2) {
    margin-left: 4px;
  }
  &--sale {
    color: $highlight;
    border-color: $highlight;
  }
  &--coupon {
    color: $brandColor;
    border-color: $brandColor;
  }
  &--gift {
    color: #64c8f2;
    border-color: #64c8f2;
  }
}
</style>
