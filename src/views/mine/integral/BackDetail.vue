<template>
    <div class="card">
      <div class="name">
        {{props?.suggestName}}
      </div>
      <div class="time">
        {{props?.gmtCreate}}
      </div>
      <div class="content">
        {{props?.suggestContent}}
      </div>
      <div class="back">
          {{props?.suggestBack}}
      </div>
    </div>

</template>

<script lang="ts" setup>
interface Props {
  // 主键id
  id:string
  // 备注
  memo:string
  //建议反馈内容
  suggestContent:string
  //建议反馈姓名
  suggestName:string
  //建议反馈电话
  suggestPhone:string
  //上传时间
  upTime:string
  gmtCreate:string
  suggestBack:string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';
  .card {
    background-color: var(--van-white);
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 15px;
    margin-top: 10px;
    //@include flexMixer(space-between, center);
    //box-sizing: border-box;
    .name{
      color: #9a9a9a;
      position: relative;
      left: 30px;
    }
    .time{
      color: #9a9a9a;
      position: relative;
      left: 200px;
      top: -15px;
      font-size: 12px;
      //margin-left: 170px;
      //transform: translateY(-35px);
      //font-family: -apple-system ;
    }
   .content{
     font-size: 13px;
     margin-left: 25px;
   }
    .back{
      background-color: #e5e5e5;
      color: #9a9a9a;
      border-radius: 5px;
      font-size: 5px;
      margin-left: 25px;
    }
  }




</style>