<template>
  <section class="search__section">
    <article class="search-header">
      <form action="" @submit.prevent="onSubmit">
        <button type="button" @click="goBack">뒤로가기</button>
        <InputText ref="searchInput" :value="query" @input="searchText" aria-label="" />
        <button v-if="query" type="reset" @click.prevent="onReset">검색어 삭제 버튼</button>
        <button type="button" @click="onSubmit">검색</button>
      </form>
    </article>
    <template v-if="query.length && !isSubmit">
      <article v-if="searchCategory.length" class="search-category">
        <ul class="search-category__list">
          <li
            v-for="(item, categoryIndex) in searchCategory"
            :key="categoryIndex"
            class="search-category__item">
            <a href=""
              @click.prevent="onSubmit"
              class="search__link">
              <em v-if="item.MID_CAT_NM" v-html="item.hkeyword1"></em>
              <em v-if="item.SML_CAT_NM" v-html="item.hkeyword2"></em>
              <em v-if="item.DISP_CAT_NM" v-html="item.hkeyword3"></em>
            </a>
          </li>
        </ul>
      </article>
      <article v-if="searchPopularKeyword.length" class="search-popular">
        <ul class="search-popular__list">
          <li
            v-for="(item, keywordIndex) in searchPopularKeyword"
            :key="keywordIndex"
            class="search-popular__item">
            <a
              :href="item.linkurl"
              v-html="item.hkeyword"
              @click.prevent="onSubmit"
              class="search__link">
            </a>
          </li>
        </ul>
      </article>
    </template>
    <article v-if="searchResult.length > 0 && isSubmit" class="search-result">
      <template v-if="query === '쿠션'">
        <ul class="prod__list">
          <li
            v-for="(item, prodIndex) in searchResult[0].Result"
            :key="prodIndex"
            class="prod__item">
            {{ item.GOODS_NM }}
          </li>
        </ul>
      </template>
      <template v-else>
        <p>
          현재 고객님이 입력하신 검색어는 {{ query }} 입니다.<br>
          그러나 이 사이트는 포트폴리오 용도로 재작되었기 때문에 쿠션으로 재검색 해주세요.
        </p>
      </template>
    </article>
    <!-- <router-view /> -->
  </section>
</template>

<script>
import axios from 'axios'
import InputText from '@/components/InputText'
export default {
  name: 'Search',
  data () {
    return {
      query: '',
      isSubmit: false,
      searchCategory: [],
      searchPopularKeyword: [],
      searchResult: []
    }
  },
  methods: {
    searchText: function (val) {
      this.query = val
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
      this.searchPopularKeyword = []
      this.searchCategory = []
    },
    searchPopularData: async function (val) {
      try {
        const arrPopular = []
        const arrCategory = []
        const response = await axios.get('/static/js/searchPopularKeyword.json')

        this.searchPopularKeyword = []
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
          this.searchPopularKeyword = arrPopular.filter(el => el.keyword.indexOf(val) >= 0).sort((a, b) => { return b['count'] - a['count'] })

          this.matchKeyword(val, this.searchCategory, 'hkeyword1', 'MID_CAT_NM')
          this.matchKeyword(val, this.searchCategory, 'hkeyword2', 'SML_CAT_NM')
          this.matchKeyword(val, this.searchCategory, 'hkeyword3', 'DISP_CAT_NM')
          this.matchKeyword(val, this.searchPopularKeyword, 'hkeyword', 'keyword')
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
        this.searchPopularData(val)
      }
    }
  },
  created () {
    // this.searchPopularData()
  },
  mounted () {
  },
  components: {
    InputText
  }
}
</script>

<style lang="scss" scoped>
.search-popular__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.search-popular__item {
  flex: 0 0 auto;
  margin: 0 8px 8px 0;
}
.search__link {
  display: block;
  padding: 0 15px;
  font-weight: 700;
  font-size: 15px;
  color: #000;
  line-height: 40px;
  border: 1px solid #eee;
  border-radius: 3px;
}
/deep/ .search__link--highlight {
  color: #f27370;
}
</style>
