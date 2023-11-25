<template>
  <div class="boxlist__container">
    <div class="boxlist__main">
      <van-swipe-cell class="boxlist__item__wrapper" v-for="(data,index) in props.dataList" :key="index">
        <div class="boxlist__item">
          <div class="boxlist__item__left">
            <div class="boxlist__item__icon">
              <img
                v-if="data.redcar"
                class="boxlist__item__icon__redcar"
                :class="{'boxlist__item__icon__redcar--space': data.bluecar}"
                src="../assets/index/redcar1.png"
                alt=""
              />
              <img
                v-if="data.bluecar"
                class="boxlist__item__icon__bluecar"
                src="../assets/index/bluecar1.png"
                alt=""
              />
            </div>
            <div class="boxlist__item__info" v-if="data.username">
              <van-icon
                name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"
              />
              <div class="boxlist__item__info__text">{{data.username}}</div>
            </div>
          </div>
          <div class="boxlist__item__status--active" v-if="data.ready">准备就绪</div>
          <div class="boxlist__item__status--disabled" v-if="data.disabled">维修中</div><!-- <div class="boxlist__item__status--disabled">维修中</div> -->
        </div>
        <template #right>
          <div class="boxlist__item__right"   v-if="data.allowDel">
            <div class="boxlist__item__del">退场</div>
          </div>
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script setup >
const props = defineProps({
        dataList:{
            default:()=>[],
            type:Array
        }

})



</script>

<style lang="scss" scoped>
.boxlist {
  &__container {
    background-color: #f5f6f7;
    height: 100%;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }
  &__main {
    height: 100%;
    overflow-x: hidden;
    padding:0 0 30px 0;
    width: 100%;
    overflow-y: auto;
    box-sizing: border-box;
  }
  &__item {
    width: 626px;
    height: 88px;
    background-color: #ffffff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    &__status--active {
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #3ac081;
    }
    &__status--disabled {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FF0000;
    }

    &__left {
      display: flex;
      align-items: center;
    }
    &__info {
      display: flex;
      align-items: center;
      margin-left: 38px;

      &__text {
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333232;

        margin-left: 15px;
      }
    }

    &__icon {
      display: flex;
      align-items: end;

      &__redcar {
        width: 75px;
        height: 48px;
      
      &--space{
        margin-right: 22px;
      }
      }

    

      &__bluecar {
        width: 76px;
        height: 60px;

      }
    }

    &__del {
      margin-left: 32px;
      width: 120px;
      height: 56px;
      border: 1px solid #ff0000;
      border-radius: 28px;
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ff0000;
      line-height: 56px;
      text-align: center;
      margin-right: 30px;
    }

    &__right {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__wrapper {
      margin-top: 30px;
      height: 88px;
    }
  }
}
</style>
