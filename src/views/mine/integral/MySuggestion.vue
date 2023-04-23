<template>
  <div class="page">
    <div class="title">
      <van-tabs v-model:active="active">
        <van-tab title="意见反馈">
          <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
            <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
              <div v-if="suggestionList.length > 0">
                <back-detail v-bind="item" v-for="(item, index) in suggestionList" :key="`suggest_${index}`"/>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="投诉建议">
          <van-pull-refresh  v-model="refreshing" @refresh="onRefresh">
            <van-list :immediate-check="false" :loading="loading" :finished="finished" @foad="onLoadMore">
              <div  v-if="suggestionList.length > 0">
                <worest-detail v-bind="item" v-for="(item, index) in worstList" :key="`worst_${index}`"/>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {SuggestionVo} from "../../../entity/home/part/suggestion";
import requestMethodSuggestion from '../../../api/home/part/suggestion'
import requestMethodWorst from '../../../api/home/part/worst'
import {BaseUtil} from "../../../utils/base-util";
import router from "../../../router";
import BackDetail from "./BackDetail.vue";
import WorestDetail from "./WorestDetail.vue";
import {WorstVo} from "../../../entity/home/part/worst";
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

const suggestionList=ref<Array<SuggestionVo>>([])
const worstList=ref<Array<WorstVo>>([])
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
  getDate()
  getWorst()
}
/**
 * 分页请求数据
 */
const getDate=async ()=>{
  const {data}=await requestMethodSuggestion.page({...pageInfo})
  if (pageInfo.pageNum===1){
    suggestionList.value=suggestionList.value.concat(data.list)
  }else {
    suggestionList.value=suggestionList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}
/**
 * 分页请求数据
 */
const getWorst=async ()=>{
  const {data}=await requestMethodWorst.page({...pageInfo})
  if (pageInfo.pageNum===1){
    worstList.value=worstList.value.concat(data.list)
  }else {
    worstList.value=worstList.value.concat(data.list)
  }
  pageInfo.total=data.total
  loading.value=false
  refreshing.value=false
  finished.value=data.isLastPage
}

/**
 * 请求下一页数据
 */
const onLoadMore = () =>{
  if (refreshing.value || loading.value){
    return
  }
  loading.value=true
  pageInfo.pageNum += 1
  getDate()
}

</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: #f6f6f6;
}
</style>