<template>
    <div class="content">
    <!-- main -->
    <div class="content__box content__choose">
      <!-- 下拉选择 -->
      <div>极限xr飞碟车场</div>
      <img class="content__choose__img" src="../assets/index/dropdown.png" alt="" />
    </div>

    <div class="content__box content__queuing-area">
      <!-- 排队区 -->
      <BoxHeader title="排队区"></BoxHeader>
      <BoxList :dataList="queuingAreaList" style="flex: 1"></BoxList>
    </div>
    <div class="content__box content__parking-area">
      <!-- 车场内 -->
      <BoxHeader title="车场内" :statusDisplay="true" :btnActive="true"></BoxHeader>
      <BoxList :dataList="parkingAreaList" style="flex: 1"></BoxList>
    </div>
  </div>

</template>


<script>
const queuingAreaList = [
  { redcar: true },
  { bluecar: true },
  { bluecar: true },
  { bluecar: true },
  { bluecar: true, disabled: true },
];
const parkingAreaList = [
  {
    redcar: true,
    bluecar: true,
    username: "萌新蛋仔",
    ready: true,
    allowDel:true
  },
  {
    redcar: true,
    bluecar: true,
    username: "大宝狮子",
    ready: true,
    allowDel:true
  },
  {
    redcar: true,
    bluecar: true,
    username: "散客",
    ready: true,
    allowDel:true
  },
  {
    bluecar: true,
    allowDel:true

  },
];

export default {
    name:'CarManage'
}
</script>
<script setup >
import BoxHeader from "../components/BoxHeader.vue";
import BoxList from "../components/BoxList.vue";
</script>

<style scoped lang="scss">

.content {
    background-color: inherit;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 128px;
    box-sizing: border-box;
    width: 100%;

    &__box {
      background-color: #ffffff;
      width: 100%;
      box-sizing: border-box;
    }

    &__queuing-area {
      height: 867px;
      padding: 42px 30px 30px 30px;
      display: flex;
      flex-direction: column;
    }

    &__choose {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f5f6f7;
      height: 96px;
      font-size: 30px;
      font-weight: bold !important;
      color: #333333;
      padding: 0 30px;

      &__img {
        width: 24px;
        height: 14px;
        margin-left: 15px;
      }
    }

    &__parking-area {
      height: 623px;
      margin-top: 20px;
      padding: 30px 30px 30px 30px;
      display: flex;
      flex-direction: column;
    }
  }
</style>