<template>
  <div class="boxheader__container">
    <div class="boxheader__title">
      <div class="boxheader__title__border"></div>
      <div class="boxheader__title__desc">{{props.title}}</div>
    </div>
    <div class="boxheader__oper">
      <div class="boxheader__oper__status" v-if="props.statusDisplay">
        <div class="boxheader__oper__status__circle"></div>
        <div class="boxheader__oper__status__text">准备中</div>
      </div>

      <div class="boxheader__oper__btn boxheader__oper__btn--active" v-if="props.btnActive">开局</div>
      <div class="boxheader__oper__btn boxheader__oper__btn--disable" v-else>开局</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  statusDisplay: {
    type: Boolean,
    default: false,
  },
  btnActive: {
    type: Boolean,
    default: false,
  },
  title:{
    type: String,
    default: "",
  }
});
</script>

<style scoped lang="scss">
.boxheader {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:45px;
  }

  &__title {
    display: flex;
    align-items: center;

    &__desc {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      line-height: 38px;
    }

    &__border {
      width: 6px;
      height: 30px;
      background: linear-gradient(0deg, #6fbeff 0%, #a1ffd1 100%);
      border-radius: 3px;
      margin-right: 14px;
    }
  }

  &__oper {
    display: flex;
    align-items: center;

    &__btn {
      width: 120px;
      height: 56px;

      border-radius: 28px;
      text-align: center;
      line-height: 56px;
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;

      &--active {
        background: linear-gradient(90deg, #6fbeff 0%, #a1ffd1 100%);
      }
      &--disable {
        background: #9d9d9d;
      }
    }

    &__status {
      display: flex;
      align-items: center;
      margin-right: 28px;
      &__circle {
        width: 16px;
        height: 16px;
        background: #ffba00;
        border-radius: 50%;
      }

      &__text {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffba00;
        line-height: 38px;
        margin-left: 18px;
      }
    }
  }
}
</style>
