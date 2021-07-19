<template>
  <section class="search__section">
    <article class="search-header">
      <form action="" @submit.prevent="onSubmit">
        <button type="button" @click="goBack">뒤로가기</button>
        <InputText ref="searchInput" :value="query" @input="searchText" aria-label="" />
        <button v-if="query" type="reset" @click.prevent="onReset">검색어 삭제 버튼</button>
        <!-- <button type="button">검색</button> -->
      </form>
    </article>
    <article v-if="query.length" class="search-popular">
      <ul v-if="searchPopularKeyword.length > 0" class="search-popular__list">
        <li
          v-for="(item, keywordIndex) in searchPopularKeyword"
          :key="keywordIndex"
          class="search-popular__item">
          <a
            class="search-popular__link"
            :href="item.linkurl"
            v-html="item.hkeyword" />
        </li>
      </ul>
    </article>
    <article v-else class="search-result">
      <div v-if="searchResult.length">
        <!-- <ul class="prod__list">
          <li v-for="(item, prodIndex) in searchResult" :key="prodIndex">
            <img src="" alt="">
          </li>
        </ul> -->
      </div>
      <div v-else>
        {{ query }} 검색어로 찾을 수 없습니다.
      </div>
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
      searchPopularKeyword: [],
      searchResult: []
    }
  },
  methods: {
    searchText: function (val) {
      this.query = val
    },
    onSubmit: function (e) {
      if (!this.query) alert('검색어를 입력해주세요')
    },
    onReset: function () {
      this.resetForm()
      this.$refs.searchInput.focus()
    },
    resetForm: function () {
      this.query = ''
      this.searchPopularKeyword = []
    },
    searchPopularData: async function (val) {
      try {
        this.searchPopularKeyword = []
        const arr = []
        const response = await axios.get('/static/js/searchPopularKeyword.json')
        for (let x of response.data.ark.result) {
          for (let y of x.items) {
            arr.push(y)
          }
        }

        this.searchPopularKeyword = arr.filter(el => el.keyword.indexOf(val) >= 0).sort((a, b) => { return b['count'] - a['count'] })

        this.matchPopularKeyword(val)
      } catch (error) {
        console.error(error)
      }
    },
    matchPopularKeyword: function (val) {
      this.searchPopularKeyword.forEach((el) => {
        if (el.keyword.indexOf(val) >= 0) {
          el.hkeyword = el.keyword.replace(val, `<span class="search-popular__link--highlight">${val}</span>`)
        } else {
          el.hkeyword = el.keyword
        }
      })
    }
  },
  computed: {},
  watch: {
    query: function (val) {
      this.searchPopularData(val)
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
.search-popular__link {
  display: block;
  padding: 0 15px;
  font-weight: 700;
  font-size: 15px;
  color: #000;
  line-height: 40px;
  border: 1px solid #eee;
  border-radius: 3px;
}
/deep/ .search-popular__link--highlight {
  color: #f27370;
}
</style>
