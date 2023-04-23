<template>
  <div class="tabMust">
    <van-tabs v-model:active="active">
      <!--        景区列表-->
      <van-tab title="景区" >
        <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
          <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
            <div v-if="spotList.length > 0">
              <scenic-spot  @click="onItemClick(item.id)" v-bind="item" v-for="(item, index) in spotList" :key="`spot_${index}`"/>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!--        景区村列表-->
      <van-tab title="景区村" >
        <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
          <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
            <div v-if="villageList.length > 0">
              <scenic-village @click="onVillageClick(item.id)" v-bind="item" v-for="(item, index) in villageList" :key="`village_${index}`"/>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <!--        文化场馆列表-->
      <van-tab title="文化场馆">
        <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
          <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
            <div v-if="venusList.length > 0">
              <cultural-venus @click="onVenusClick(item.id)" v-bind="item" v-for="(item, index) in venusList" :key="`venus_${index}`"/>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script lang="ts" setup>
import ScenicSpot from '../component/ScenicSpot.vue'
import ScenicVillage from '../component/ScenicVillage.vue'
import CulturalVenus from '../component/CulturalVenus.vue'
import {VillageVo} from '../../../entity/home/part/village'
import {SpotVo} from '../../../entity/home/part/spot'
import {CulturalVenusVo} from '../../../entity/home/part/culturalVenus'
import requestMethodVillage from '../../../api/home/part/village'
import requestMethodSpot from '../../../api/home/part/spot'
import requestMethodVenus from '../../../api/home/part/culturalVenus'
import {onMounted, reactive, ref} from "vue";
import {BaseUtil} from "../../../utils/base-util";
import router from "../../../router";
const active=ref(0)
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
//景区列表
const spotList=ref<Array<SpotVo>>([])
console.log(spotList)
//景区村
const villageList=ref<Array<VillageVo>>([])
//文化馆
const venusList=ref<Array<CulturalVenusVo>>([])

onMounted(()=>{
  onRefresh()
})
/**
 * 进去时显示的数据
 */
const onRefresh=()=>{
  pageInfo.pageNum=1
  finished.value=false
  refreshing.value=true
  getData()
  getVillage()
  getVenus()
}

/**
 * 请求景区数据
 */
const getData=async ()=>{
  const {data}=await requestMethodSpot.page({...pageInfo})
  data.list.forEach(item=>{
    item.photo=BaseUtil.getUploadPath(item.photo)
  })
  if (pageInfo.pageNum===1){
    spotList.value=spotList.value.concat(data.list)
  }else{
    spotList.value=spotList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}
/**
 * 请求景区村数据
 */
const getVillage=async ()=>{
  const {data}=await requestMethodVillage.page({...pageInfo})
  data.list.forEach(item=>{
    item.villagePic=BaseUtil.getUploadPath(item.villagePic)
  })
  if (pageInfo.pageNum===1){
    villageList.value=villageList.value.concat(data.list)
  }else{
    villageList.value=villageList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}
/**
 * 请求文化馆的数据
 */
const getVenus=async ()=>{
  const {data}=await requestMethodVenus.page({...pageInfo})
  data.list.forEach(item=>{
    item.venuesPic=BaseUtil.getUploadPath(item.venuesPic)
  })
  if (pageInfo.pageNum===1){
    venusList.value=venusList.value.concat(data.list)
  }else{
    venusList.value=venusList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}

/**
 * 下一页数据
 */
const onLoadMore =()=>{
  if (refreshing.value || loading.value){
    return
  }
  loading.value=true
  pageInfo.pageNum +=1
  getData()
}
const onItemClick = (id: string) => {
  router.push({
    path: '/detail',
    query: {
      id: id
    }
  })
}
const onVillageClick=(id:string)=>{
  router.push({
    path: '/villageDetail',
    query: {
      id: id
    }
  })
}
const onVenusClick=(id:string)=>{
  router.push({
    path: '/venusDetail',
    query: {
      id: id
    }
  })
}

</script>

<style scoped lang="scss">


</style>