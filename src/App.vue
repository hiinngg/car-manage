<script setup lang="ts"></script>

<template>

  <router-view></router-view>
  <footer>
    <!-- 底部导航 -->
    <div class="footer__item">
      <img class="footer__item__icon" src="./assets/index/manage.png" alt="" />
      <div class="footer__item__text footer__item__text--active">车场管理</div>
    </div>
    <div class="footer__item">
      <img class="footer__item__icon" src="./assets/index/user.png" alt="" />
      <div class="footer__item__text">我的</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
body {
  background-color: #f5f6f7;

  footer {
    /* 底部导航栏的样式 */
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    box-sizing: border-box;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .footer {
    &__item {
      margin-top:12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      &__icon {
        width: 40px;
        height: 42px;
      }
      &__text {
        margin-top: 9px;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #B3B3B3;

        &--active {
          color: #0076ff;
          background: linear-gradient(0deg, #6fbeff 0%, #a1ffd1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>
