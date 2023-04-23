<template>
	<div class="page">
    <div class="head">
      <img src="../../assets/images/district/img.png" />
    </div>
    <div class="active-content" @click="onActivtyItem(item.id)" v-for="(item,index) in activityList" :key="`active_${index}`" v-bind="item">
      <div class="active-left" >
        <van-image :src="item.activityCover"/>
      </div>
      <div class="active-right">
        <div class="active-title">{{item.activityTitle}}</div>
        <div class="active-time">{{item.gmtCreate}}</div>
        <div class="active-introduction">
          {{item.activityKeywords}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import requestActivity from '../../api/home/part/activity'
import {ActivityVo} from "../../entity/home/activity";
import {BaseUtil} from "../../utils/base-util";
import router from "../../router";
const activityList = ref<ActivityVo[]>([])
console.log(activityList)
onMounted(() => {
  requestActivity.page({pageNum:1,pageSize: 10}).then(res => {
    console.log(res.data.list)
    activityList.value = res.data.list.map(item => {
      item.activityCover = item.activityCover ? BaseUtil.getUploadPath(item.activityCover) : ''
      return item
    })
  })
})

const onActivtyItem=(id:string)=>{
  router.push({
    path:'/Activity/detail',
    query:{
      id:id
    }
  })
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/mixin.scss';
.page{
  width: 100%;
  height: 95%;
  background-color: #88d3d8;
  .head{
    img{
      width: 375px;
    }
  }
  .active-content{
    position: relative;
    top: -16px;
    background-color:#5ac0c2;
    margin-top: 10px;
    //border-radius: 8px;
    .van-image{
      width: 120px;
      padding: 20px 0 15px 20px;
    }
    .active-right{
      position: absolute;
      //transform: translateY(-80px);
      top: 20px;
      left: 170px;
      .active-title{
        color: #2c2c2c;
        font-weight: bold;
      }
      .active-time{
        font-size: 12px;
        color: #2c2c2c;
        margin-top: 10px;
      }
      .active-introduction{
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }

}


</style>
