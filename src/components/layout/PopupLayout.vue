<template>
  <section
    class="modal__section"
    role="modal"
    aria-modal="true"
    :aria-labelledby="modalId"
    :aria-hidden="String(isModalClose)">
    <div class="modal-header">
      <h1 :id="modalId" class="modal-header__title">{{ modalName }}</h1>
    </div>
    <article class="modal__article">
      <slot name="default"></slot>
    </article>
    <button type="button" class="modal__btn modal__btn--close" :aria-label="`${modalName} 모달 팝업 닫기`" @click="modalClose(true)">
      <IconClose />
    </button>
  </section>
</template>

<script>
import IconClose from '@/components/icon/IconClose'
export default {
  name: 'PopupLayout',
  data () {
    return {
      isModalClose: true
    }
  },
  props: {
    modalId: {
      type: String,
      default: function () {
        const randomStr = Math.random().toString(36).substr(2, 6)
        return `modal__id--${randomStr}`
      }
    },
    modalName: {
      type: String,
      default: '팝업제목'
    }
  },
  methods: {
    modalClose: function (val) {
      this.isModalClose = val
    }
  },
  components: {
    IconClose
  }
}
</script>

<style lang="scss" scoped>
.modal__section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  &[aria-hidden="false"]{
    display: flex;
  }
}
.modal-header {
  flex: 0 0 auto;
  padding: 15px 16px;
  border-bottom: 1px solid #ddd;
}
.modal-header__title {
  padding: 0 20px;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  text-align: center;
  line-height: 24px;
}
.modal__article {
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1 1 auto;
  padding: 20px 16px calc(20px + env(safe-area-inset-bottom));
}
.modal__btn--close {
  position: absolute;
  top: 15px;
  right: 16px;
  cursor: pointer;
}
</style>
