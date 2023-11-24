<script setup lang="ts"></script>

<template>
  <div class="content">
    <!-- main -->
    <div class=" content__box content__choose">
        <!-- 下拉选择 -->
         <div>极限xr飞碟车场</div>
         <img class="content__choose__img"  src="./assets/index/dropdown.png" alt="">
       </div>



    <div class="content__box content__queuing-area">
      <!-- 排队区 -->


    </div>
    <div class="content__box content__parking-area">
      <!-- 车场内 -->
    </div>


  </div>

  <footer>
    <!-- 底部导航 -->
    <div>1</div>
    <div>2</div>
    
  </footer>
</template>

<style scoped lang="scss">
body {
  background-color: #f5f6f7;

  .content {
    background-color: inherit;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 128px;
    box-sizing: border-box;
    width:100%;


     &__box{
      background-color: #ffffff;
      width: 100%;
      box-sizing: border-box;
     }

     &__queuing-area{
       height:867px;

   
     }

     &__choose{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #F5F6F7;
        height: 96px;
        font-size: 30px;
        font-weight: bold !important;
        color: #333333;
        padding: 0 30px;
        

      &__img{
        width:24px;
        height:14px;
        margin-left:15px;
      }


       }

     &__parking-area{
        height:623px;
        margin-top:20px;
     }

  }

  footer {
    /* 底部导航栏的样式 */
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
