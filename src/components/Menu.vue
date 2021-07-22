<template>
  <article id="olive-menu__article" class="olive-menu__article">
    <nav class="olive-menu" ref="menuMenu">
      <router-link
        v-for="(item, menuIndex) in menuList" :key="menuIndex"
        :aria-current="item.path.indexOf($route.path) >= 0 ? 'page' : false"
        :to="item.path"
        class="olive-menu__link">
          <span class="olive-menu__name">{{ item.name }}</span>
        </router-link>
    </nav>
  </article>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menuList: [
        {
          name: '홈',
          path: '/main'
        },
        {
          name: '오특',
          path: '/comingSoon'
        },
        {
          name: '신상',
          path: '/comingSoon'
        },
        {
          name: '랭킹',
          path: '/comingSoon'
        },
        {
          name: '프리미엄관',
          path: '/comingSoon'
        },
        {
          name: '오늘드림',
          path: '/comingSoon'
        },
        {
          name: '기획전',
          path: '/comingSoon'
        },
        {
          name: '세일',
          path: '/comingSoon'
        },
        {
          name: '기프트카드',
          path: '/comingSoon'
        },
        {
          name: '맴버십/쿠폰',
          path: '/comingSoon'
        },
        {
          name: '이벤트',
          path: '/comingSoon'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.olive-menu__article {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  &:before,
  &:after {
    position: absolute;
    width: 16px;
    height: 100%;
    z-index: 1;
    content: "";
  }
  &:before {
    left: 0;
    background: linear-gradient(90deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }
  &:after {
    right: 0;
    background: linear-gradient(270deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }
}
.olive-menu {
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 60px;
  // justify-content: start;
  &:before,
  &:after {
    flex: 0 0 auto;
    display: block;
    width: 16px;
    content: "";
  }
}
.olive-menu__link {
  flex: 0 0 auto;
  display: block;
  padding: 0 5px;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  line-height: 20px;
  &:nth-child(n+2) {
    margin-left: 12px;
  }
  &[aria-current="page"] {
    .olive-menu__name {
      color: #f27370;
      &:after {
        background-color: #f27370;
      }
    }
  }
}
.olive-menu__name {
  display: block;
  position: relative;
  padding: 12px 3px;
  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: transparent;
    border-radius: 4px;
    content: "";
  }
}
</style>
