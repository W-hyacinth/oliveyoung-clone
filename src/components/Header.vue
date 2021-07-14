<template>
  <header id="header" class="header">
    <h1 class="header__logo">
      <router-link to="/" class="header__home"><span class="visually-hidden">올리브 영</span></router-link>
    </h1>
    <div class="header-search__group">
        <router-link to="/search" class="header-search__link" :data-search-title="searchData.name">
          <span class="visually-hidden">검색 페이지로 이동</span>
        </router-link>
        <a :href="searchData.detail_url" class="header-product__link" @click.prevent="comingSoon">
          <span class="visually-hidden">{{ searchData.name }} 상세 페이지로 이동</span>
        </a>
    </div>
    <a href="" class="header-cart__link" @click.prevent="comingSoon"><span class="visually-hidden">장바구니로 이동</span></a>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      searchData: {}
    }
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await axios.get('/static/js/headerSearch.json')
        this.searchData = response.data.product
      } catch (error) {
        console.error(error)
      }
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 10px 20px 15px;
  border-bottom: 1px solid #ddd;
}
.header__logo {
  flex: 0 0 auto;
  display: flex;
  width: 30px;
  margin-right: 12px;
}
.header__home {
  display: block;
  width: 100%;
  padding-bottom: 100%;
  background: url('~@/assets/images/common/bi.png') center center / contain no-repeat;
}
.header-search__group {
  flex: 1 1 auto;
  display: flex;
  max-width: calc(100% - 84px);
  border-bottom: 2px solid #9bce26;
}
.header-search__link {
  flex: 1 1 auto;
  display: flex;
  max-width: calc(100% - 42px);
  align-items: center;
  &:before {
    overflow: hidden;
    display: block;
    font-size: 13px;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    content: attr(data-search-title);
  }
}
.header-product__link {
  flex: 0 0 auto;
  width: 30px;
  display: block;
  margin-left: 12px;
  background: url('~@/assets/images/common/header/ico_search.svg') center center / 20px no-repeat;
}
.header-cart__link {
  flex: 0 0 auto;
  width: 30px;
  margin-left: 12px;
  display: block;
  background: url('~@/assets/images/common/header/ico_basket.png') center center / contain no-repeat;
}
</style>
