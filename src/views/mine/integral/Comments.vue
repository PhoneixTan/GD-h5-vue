<template>
  <div class="page">
    <div class="tabBox" v-for="(item,index) in commentsList" :key="item.id" v-bind="item">
      <div class="userName">
        <h3>{{item.userName}}</h3>
      </div>
      <div class="time">
        {{item.gmtCreate}}
      </div>
      <div class="number">
        <p class="p1">{{item.spotFraction}}</p>
        <p class="p2">{{item.spotCommentContent}}</p>
      </div>
    </div>
    <div>
    </div>

  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import requestComment from '../../../api/home/part/comments'
import {CommentsVo} from "../../../entity/home/part/comments";
const commentsList = ref<CommentsVo[]>([])
onMounted(() => {
  requestComment.page({pageNum:1,pageSize: 10}).then(res => {
    console.log(res.data.list)
    commentsList.value = res.data.list.map(item => {
      return item
    })
  })
})
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: #f6f6f6;
  .tabBox{
    background-color: #ffffff;
    border-radius: 10px;
    width: 350px;
    margin-top: 20px;
    margin-left: 12px;
    .userName{
      margin-left: 10px;
    }
    .time{
      margin-left: 10px;
      position: relative;
      left: 150px;
      //top: 100px;
      font-family: -apple-system ;
    }
    .number{
      margin-left: 10px;
      padding: 0;
      .p1{
        font-size: 17px;
        margin: 0 0;
      }
      .p2{
        font-size: 12px;
      }
    }
  }


}
</style>