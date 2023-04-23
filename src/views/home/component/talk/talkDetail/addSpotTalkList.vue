<template>
  <div class="page">
    <van-form @submit="onSubmit">
  <div class="number">
    <!-- 可以使用 CellGroup 作为容器 -->
    <van-cell-group inset>
      <van-field v-model="formState.spotFraction" label="评分" placeholder="请输入数字1～5" />
    </van-cell-group>

  </div>
  <div class="text">
    <van-cell-group inset>
      <van-field
          v-model="formState.spotCommentContent"
          rows="5"
          autosize
          type="textarea"
          placeholder="这里值得去吗？有什么亮点？快快写上您的心得~"
      />
    </van-cell-group>
  </div>
  <div class="publish">
    <van-button color="#6ad2d1" round block native-type="submit">发表</van-button>
  </div>
  </van-form>
  </div>
</template>

<script lang="ts" setup>
import {SpotTalkVo} from '../../../../../entity/home/talk/spotTalk'
import requestMetodAddSpotTalk from '../../../../../api/home/talk/spotTalk'
import requestMetodAddSpot from '../../../../../api/home/part/spot'
import {QueryObjectType, QueryType} from "../../../../../http/request-model";
import router from "../../../../../router";
import {messageMethod} from "../../../../../utils/message-util";
import {reactive} from "vue";
import {SpotVo} from "../../../../../entity/home/part/spot";
const formState=reactive<SpotTalkVo>({
  //主键id
  id:'',
  //备注
  memo:'',
  //景区评论内容
  spotCommentContent:'',
  //景区评论时间
  spotCommentTime:'',
  //景区评分
  spotFraction:'',
  //用户名
  userName:'',
}
)
async function onSubmit(){
  const params={
    //景区评论内容
    spotCommentContent:formState.spotCommentContent,
    //景区评分
    spotFraction:formState.spotFraction
  }
  await requestMetodAddSpotTalk.add(params as unknown as QueryType)
  // await requestMetodAddSpot.addTalk(params as unknown as QueryType)
  messageMethod.success('提交成功')
  router.go(-1)
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/mixin.scss";
.page{
  background-color: #f6f6f6;
  .publish{
    position: absolute;
    bottom: 3px;
    width: 355px;
    margin-left: 10px;
  }
}

</style>