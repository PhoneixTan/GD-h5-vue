<template>
  <div class="page">
    <div class="jiudian">
      <van-image :src="JiudianIcon" ></van-image>
    </div>
    <div class="title">
      <van-tabs v-model:active="active" type="card">
        <van-tab title="酒店">
          <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
            <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
              <div v-if="hotelList.length > 0">
                <hotel-cart @click="onHotelClick(item.id)" v-bind="item" v-for="(item, index) in hotelList" :key="`hotel_${index}`"/>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="等级民宿">
          <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
            <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
              <div  v-if="bbList.length > 0">
                <b-b-cart @click="onBBClick(item.id)" v-bind="item" v-for="(item, index) in bbList" :key="`bb_${index}`"/>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>

    </div>
  </div>
</template>

<script lang="ts" setup>
import JiudianIcon from '../../../assets/images/home/part/jiudian/banner.jpg'
import {onMounted, reactive, ref} from "vue";
import HotelCart from '../component/HotelCart.vue'
import BBCart from '../component/BBCart.vue'
import {hotelVo} from "../../../entity/home/part/part-hotel";
import requestMethodHotel from '../../../api/home/part/part-hotel'
import requestMethodBB from '../../../api/home/part/part-bb'
import {PartBb} from "../../../entity/home/part/part-bb";
import {BaseUtil} from "../../../utils/base-util";
import router from "../../../router";
const active = ref(0)
//下拉刷新
const refreshing=ref(false)
//数据加载中
const loading =ref(false)
//是否为最后一条数据
const finished=ref(false)
//分页请求参数
const pageInfo=reactive({
  pageNum:1,
  pageSize:20,
  total:1
})
//酒店列表
const hotelList=ref<Array<hotelVo>>([])
//民宿列表
const bbList=ref<Array<PartBb>>([])
onMounted(()=>{
  onRefresh()
})
/**
 * 第一次进去显示的数据
 */
const onRefresh=()=>{
  pageInfo.pageNum=1
  finished.value=false
  refreshing.value=true
  getData()
  getDate()
}
/**
 * 分页请求民宿数据
 */
const getDate=async ()=>{
  const {data}=await requestMethodBB.page({...pageInfo})
  data.list.forEach(item=>{
    item.bbPic=BaseUtil.getUploadPath(item.bbPic)
  })
  if (pageInfo.pageNum===1){
    bbList.value=bbList.value.concat(data.list)
  }else {
    bbList.value=bbList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}


/**
 * 分页请求酒店数据
 */
const getData=async ()=>{
  const {data}=await requestMethodHotel.page({...pageInfo})
  data.list.forEach(item => {
    item.hotelPic = BaseUtil.getUploadPath(item.hotelPic)
  })
  if (pageInfo.pageNum===1){
    hotelList.value=data.list
  }else {
    hotelList.value=hotelList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}
/**
 * 请求酒店下一页数据
 */
const onLoadMore = () =>{
  if (refreshing.value || loading.value){
    return
  }
  loading.value=true
  pageInfo.pageNum += 1
  getData()
  getDate()
}
const onHotelClick=(id:string)=>{
  router.push({
    path:'/hotelDetail',
    query:{
      id:id
    }
  })
}
const onBBClick=(id:string)=>{
  router.push({
    path:'/BBDetail',
    query:{
      id:id
    }
  })
}

</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.jiudian{
  @include widthMixer(100%,215px)
}
</style>