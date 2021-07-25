<template>
  <section class="search__section">
    <article class="search-header">
      <form action="" class="search-header__form" @submit.prevent="onSubmit">
        <button type="button" class="search__btn search__btn--back" aria-label="이전 페이지로 이동" @click="goBack">
          <IconBack stroke="1" />
        </button>
        <div class="search-input__area">
          <InputText
            class="search__input"
            placeholder="검색어를 입력해주세요 (ex. 쿠션)"
            aria-label="검색어 입력"
            ref="searchInput"
            :value="query"
            @input="searchText" />
          <button
            v-if="query"
            type="reset"
            class="search__btn search__btn--reset"
            aria-label="검색어 초기화"
            @click.prevent="onReset">
            <IconDel stroke="1" />
          </button>
        </div>
        <button type="button" class="search__btn search__btn--search" aria-label="검색" @click="onSubmit">
          <IconSearch size="20" />
        </button>
      </form>
    </article>
    <main class="search-main">
      <h1 class="visually-hidden">검색 메인</h1>
      <template v-if="!isSubmit">
        <template v-if="query.length">
          <article v-if="searchCategory.length" class="search-category">
            <ul class="search-category__list">
              <li
                v-for="(item, categoryIndex) in searchCategory"
                :key="categoryIndex"
                class="search-category__item">
                <a href=""
                  @click.prevent="onSubmit"
                  class="search__link">
                  <em class="search-category__name" v-if="item.MID_CAT_NM" v-html="item.hkeyword1"></em>
                  <em class="search-category__name" v-if="item.SML_CAT_NM" v-html="item.hkeyword2"></em>
                  <em class="search-category__name" v-if="item.DISP_CAT_NM" v-html="item.hkeyword3"></em>
                </a>
              </li>
            </ul>
          </article>
          <article v-if="searchRelationKeyword.length" class="search-relation">
            <ul class="search-relation__list">
              <li
                v-for="(item, keywordIndex) in searchRelationKeyword"
                :key="keywordIndex"
                class="search-relation__item">
                <a
                  :href="item.linkurl"
                  v-html="item.hkeyword"
                  @click.prevent="onResult"
                  class="search__link">
                </a>
              </li>
            </ul>
          </article>
        </template>
        <template v-else>
          <section v-if="searchPopularKeyword.length" class="search-rank__section">
            <h2 class="search-rank__title search-rank__title--popular">
              급상승 검색어
            </h2>
            <article class="search-rank__article">
              <ol class="search-rank__list">
                <li
                  v-for="(items, index) in searchPopularKeyword"
                  :key="index"
                  class="search-rank__item">
                  <a href="" class="search-rank__link" @click.prevent="onRankResult">{{items.searchTerm}}</a>
                  <div class="search-rank__status">
                    <span v-if="items.rankDiff !== 0" class="search-rank__cnt">{{ Math.abs(items.rankDiff) }}</span>
                    <em :class="rankDiffStatusClassName(items.rankDiff)">
                      <span class="visually-hidden">{{ rankDiffStatus(items.rankDiff) }}</span>
                    </em>
                  </div>
                </li>
              </ol>
            </article>
          </section>
        </template>
      </template>
      <article v-if="searchResult.length > 0 && isSubmit" class="search-result__article" :class="{'search-result__article--nodata': query !== searchableKeyword}">
        <transition-group v-if="query === searchableKeyword" name="fade" tag="ul" class="prod__list" appear>
          <ProductItem v-for="(item, prodIndex) in searchResult[0].Result" :key="prodIndex + 0" :item="item" class="prod__item" />
        </transition-group>
        <template v-else>
          <IconCaution size="100" color="#e6e6e6" />
          <p class="search-result__notice">
            현재 고객님이 입력하신 검색어는 <span class="search-result__notice--highlight">{{ query }}</span> 입니다.<br>
            그러나 이 사이트는 포트폴리오 용도로 재작되었기 때문에 <span class="search-result__notice--highlight">{{ searchableKeyword }}</span>으로 재검색 해주세요.
          </p>
        </template>
      </article>
    </main>
    <!-- <router-view /> -->
  </section>
</template>

<script>
import axios from 'axios'
import ProductItem from '@/components/ProductItem'
import IconBack from '@/components/icon/IconBack'
import IconDel from '@/components/icon/IconDel'
import IconMenu from '@/components/icon/IconMenu'
import IconSearch from '@/components/icon/IconSearch'
import IconCaution from '@/components/icon/IconCaution'
import InputText from '@/components/InputText'
export default {
  name: 'Search',
  metaInfo: {
    titleTemplate: '검색 | %s'
  },
  data () {
    return {
      query: '',
      searchableKeyword: '쿠션',
      isSubmit: false,
      popularKeywordLimit: 30,
      searchPopularKeyword: [],
      searchCategory: [],
      searchRelationKeyword: [],
      searchResult: [],
      searchHistory: [
        {
          keyword: '클렌징',
          date: 20210716
        },
        {
          keyword: '알테니스킵',
          date: 20210719
        },
        {
          keyword: '쿠션',
          date: 20210721
        }
      ]
    }
  },
  methods: {
    searchText: function (val) {
      this.query = val
    },
    onRankResult: function (e) {
      const ePath = e.path || (e.composedPath && e.composedPath())
      const areaArr = ePath.map(el => el.className)
      const linkIdx = areaArr.indexOf('search-rank__link')

      this.query = ePath[linkIdx].innerText.split('\n').join('')
      this.onSubmit()
    },
    onResult: function (e) {
      const ePath = e.path || (e.composedPath && e.composedPath())
      const areaArr = ePath.map(el => el.className)
      const linkIdx = areaArr.indexOf('search__link')

      this.query = ePath[linkIdx].innerText.split('\n').join('')
      this.onSubmit()
    },
    onSubmit: function (e) {
      if (!this.query) {
        alert('검색어를 입력해주세요')
        return
      }
      this.searchResultData()
    },
    onReset: function () {
      this.resetForm()
      this.$refs.searchInput.focus()
      this.isSubmit = false
    },
    resetForm: function () {
      this.query = ''
      this.searchRelationKeyword = []
      this.searchCategory = []
    },
    rankDiffStatus: function (rankCnt) {
      const obj = {
        '유지': rankCnt === 0,
        '상승': rankCnt > 0,
        '하락': rankCnt < 0
      }
      return Object.keys(obj).filter(k => { return obj[k] })[0]
    },
    rankDiffStatusClassName: function (rankCnt) {
      return {
        'rank__icon': true,
        'rank__icon--keep': rankCnt === 0,
        'rank__icon--up': rankCnt > 0,
        'rank__icon--down': rankCnt < 0
      }
    },
    searchPopularData: async function () {
      try {
        const response = await axios.get('/static/js/searchPopularKeyword.json')
        this.searchPopularKeyword = response.data.items.splice(0, this.popularKeywordLimit)
      } catch (error) {
        console.error(error)
      }
    },
    searchRelationData: async function (val) {
      try {
        const arrPopular = []
        const arrCategory = []
        const response = await axios.get('/static/js/searchRelationKeyword.json')

        this.searchRelationKeyword = []
        this.searchCategory = []

        if (val) {
          for (let x of response.data.ark.result) {
            for (let y of x.items) {
              arrPopular.push(y)
            }
          }
          for (let x of response.data.arkCategory.result.items) {
            if (x.DISP_CAT_NM.indexOf(val) >= 0 || x.MID_CAT_NM.indexOf(val) >= 0 || x.SML_CAT_NM.indexOf(val) >= 0) {
              arrCategory.push(x)
            }
          }

          this.searchCategory = arrCategory.slice(0, 2)
          this.searchRelationKeyword = arrPopular.filter(el => el.keyword.indexOf(val) >= 0).sort((a, b) => { return b['count'] - a['count'] })

          this.matchKeyword(val, this.searchCategory, 'hkeyword1', 'MID_CAT_NM')
          this.matchKeyword(val, this.searchCategory, 'hkeyword2', 'SML_CAT_NM')
          this.matchKeyword(val, this.searchCategory, 'hkeyword3', 'DISP_CAT_NM')
          this.matchKeyword(val, this.searchRelationKeyword, 'hkeyword', 'keyword')
        }
      } catch (error) {
        console.error(error)
      }
    },
    searchResultData: async function () {
      try {
        const response = await axios.get('/static/js/searchResult.json')
        this.isSubmit = true
        this.searchResult = response.data.Data.filter(el => el.CollName === 'OLIVE_GOODS')
      } catch (error) {

      }
    },
    matchKeyword: function (val, arrEl = [], tProperty, sProperty) {
      arrEl.forEach((el) => {
        if (!el.hasOwnProperty(tProperty)) {
          el[tProperty] = null
        }

        if (el[sProperty].indexOf(val) >= 0) {
          el[tProperty] = el[sProperty].replace(val, `<span class="search__link--highlight">${val}</span>`)
        } else {
          el[tProperty] = el[sProperty]
        }
      })
    }
  },
  computed: {},
  watch: {
    query: function (val) {
      this.isSubmit = false
      if (!val) {
        this.resetForm()
      } else {
        this.searchRelationData(val)
      }
    }
  },
  created () {
    this.searchPopularData()
  },
  mounted () {
  },
  components: {
    ProductItem,
    InputText,
    IconBack,
    IconMenu,
    IconSearch,
    IconCaution,
    IconDel
  }
}
</script>

<style lang="scss" scoped>
$highlight : #f27370;
$brandColor: #9bce26;
.search__section {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.search-header {
  position: sticky;
  top: 0;
  padding: 8px 20px 8px 16px;
  background-color: #fff;
  border-bottom: solid 2px $brandColor;
  z-index: 10;
}
.search-main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.search-header__form {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search-input__area {
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search__input {
  flex: 1 1 auto;
  padding: 12px 0;
  font-size: 16px;
  line-height: 1;
  outline: none;
}
.search__btn {
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.search__btn--back {
  margin-right: 12px;
}
.search__btn--search,
.search__btn--reset {
  margin-left: 12px;
}
.search-rank {
  &__section {
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
  }
  &__article {
    flex: 1 1 auto;
  }
  &__title {
    flex: 0 0 auto;
    padding: 13px 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background-color: #f9f9f9;
  }
  &__list {
    counter-reset: rank;
  }
  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 5px;
    margin: 0 16px;
    counter-increment: rank;
    &:before {
      flex: 0 0 auto;
      display: block;
      min-width: 20px;
      margin-right: 10px;
      font-weight: 800;
      font-size: 18px;
      color: #555;
      line-height: 24px;
      content: counter(rank);
    }
    &:nth-of-type(n+2) {
      border-top: 1px solid #eee;
    }
  }
  &__link {
    flex: 1 1 auto;
    overflow: hidden;
    display: block;
    font-size: 16px;
    color: #333;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__status {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__cnt {
    flex: 0 0 auto;
    display: block;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    margin-left: 8px;
  }
}
.rank__icon {
  $size : 5px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  &--keep {
    &:before {
      display: block;
      width: 14px;
      height: 2px;
      background-color: #ccc;
      content: "";
    }
  }
  &--up {
    &:before {
      display: block;
      width: 0;
      height: 0;
      border-left: $size solid transparent;
      border-right: $size solid transparent;
      border-bottom: $size*2 solid #e02020;
      content: "";
    }
  }
  &--down {
    &:before {
      display: block;
      width: 0;
      height: 0;
      border-left: $size solid transparent;
      border-right: $size solid transparent;
      border-top: $size*2 solid #183efe;
      content: "";
    }
  }
}
.search-category {
  padding: 20px 16px;
  &__list {

  }
  &__item {
    &:nth-of-type(n+2) {
      margin-top:12px;
    }
    .search__link {
      &:after {
        display: block;
        font-size: 12px;
        color: #888;
        line-height: 20px;
        content: "카테고리 \003e";
      }
    }
  }
  &__name {
    display: flex;
    flex-direction: row;
    align-items: center;
    &:nth-of-type(n+2) {
      &:before {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-size: 12px;
        content: "\003e";
      }
    }
    &:last-of-type {
      margin-right: 12px;
    }
  }
  + .search-relation {
    border-top: 5px solid #eee;
  }
}
.search-relation {
  padding: 20px 16px;
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 auto;
    margin: 0 8px 8px 0;
  }
}
.search__link {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 15px;
  font-size: 15px;
  color: #000;
  line-height: 30px;
  border: 1px solid #eee;
  border-radius: 3px;
}
/deep/ .search__link--highlight {
  color: $highlight;
}
.search-result__article {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  &--nodata {
    justify-content: center;
    align-items: center;
  }
}
.search-result__notice {
  margin: 20px 16px 0;
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.4;
  word-break: keep-all;
  word-wrap: break-word;
}
.search-result__notice--highlight {
  font-weight: 700;
  color: $highlight;
}
.prod__list {
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 16px;
}
</style>
