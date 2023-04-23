<template>
  <div class="page">
    <div class="talkPic">
      <van-image :src="spotList?.photo"/>
    </div>
    <div class="talkHeader">
      <div class="title">
        <h3>{{spotList?.spotname}}</h3>
      </div>
      <div class="grade">
        {{spotList?.grade}}
      </div>
      <div class="icon">
        <img src="../../../../assets/images/home/talk_icon.png" />
      </div>
      <div class="address">
        <img src="../../../../assets/images/home/place-marker.gif"/>
        <span>{{spotList?.spotAddress}}</span>
      </div>
    </div>
    <div class="talkText">
      评论列表
    </div>
    <div class="tabBox" v-for="(item, index) in spotNeedList" :key="item.id">
      <div class="userName"  >
        <h4>{{item?.createUserName}}</h4>
      </div>
      <div class="time">
        {{item?.gmtCreate}}
      </div>
      <div class="list">
        <div class="number">
          <h5>评分：{{item?.spotFraction}}分</h5>
          <p>{{item?.spotCommentContent}}</p>
        </div>
      </div>
    </div>
    <div class="addTalk" @click="onAdd(spotList?.talkingId)">
      <van-button color="#6ad2d1" round block>立即评价</van-button>
    </div>
    <div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {SpotTalkVo} from "../../../../entity/home/talk/spotTalk";
import requestMethodTalk from "../../../../api/home/talk/spotTalk";
import requestMethodSpot from '../../../../api/home/part/spot'
import {SpotVo} from "../../../../entity/home/part/spot";
import {BaseUtil} from "../../../../utils/base-util";
import router from "../../../../router";
const props = defineProps<{id: string}>()
const spotList=ref<SpotVo>()
onMounted(async ()=>{
  await getSpotTalk()
})
console.log(props.id)
// console.log(spotTalkList)
const spotNeedList=ref([])
const getSpotTalk=async ()=>{
  const {data}=await requestMethodSpot.getById(props.id)
  data.photo = data.photo ? BaseUtil.getUploadPath(data.photo as string) : ''
  console.log('11111')
  console.log(data)
  spotList.value=data
  // spotTalkList.value.map()
  spotList.value?.talkingId.split(',').map((item,index) => {
    console.log(item)
    requestMethodTalk.getById(item).then(({data}) => {
      spotNeedList.value.push(data)
    })
  })
}
// console.log(spoteedList.value)
console.log(spotList.value)
const onAdd=(id:string)=>{
  router.push({
    path:'/addSpotTalk',
    query:{
      id:id
    }
  })
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: #f6f6f6;
  .talkHeader{
    background-color: #ffffff;
    border-radius: 10px;
    width: 350px;
    margin-left: 12px;
    position: relative;
    top: -50px;
    //left: 12px;
    margin-bottom: 12px;
    .title{
      margin-left: 20px;
    }
    .grade{
      position: absolute;right: 130px;top: 25px;color: #ffcf7d
    }
    .icon{
      position: absolute;right: 0px;top: 8px;
     img{
       width: 100px;
       height: 60px;
     }
    }
    .address{
      margin-left: 20px;
      margin-bottom: 15px;
      img{
        width: 20px;
        height: 20px;
        position: relative;
        top: 5px;
      }
      span{
        margin-left: 10px;
        font-size: 12px;color: #3c3c3c
      }
    }
  }
  .talkText{
    transform: translateY(-40px);
    margin-left: 17px;
    font-weight: 500;
    font-size: 15px;
  }
  .tabBox{
    transform: translateY(-35px);
    background-color: #ffffff;
    border-radius: 5px;
    width: 350px;
    margin-bottom: 20px;
    margin-left: 12px;
    .userName{
      margin-left: 10px;
    }
    .time{
      margin-left: 170px;
      transform: translateY(-35px);
      font-family: -apple-system ;
    }
    .list{
      position: relative;
      height: 70px;
      top: -10px;
      .number{
        padding-bottom: 0px;
        transform: translateY(-35px);
        margin-left: 10px;
        p{
          margin: 0 0;
          position: relative;
          top: -15px;
          font-size: 13px;color: #3c3c3c
        }
      }
    }

  }
  .addTalk{
    position: absolute;
    bottom: 3px;
    width: 355px;
    margin-left: 10px;
  }


}
</style>