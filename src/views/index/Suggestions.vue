<template>
  <van-tabs v-model:active="active" animated>
    <van-tab title="意见反馈">
      <van-form class="back"  @submit="onSubmit">
        <div class="name">
          <p>姓名</p>
          <van-field v-model="formState.suggestName" autocomplete="off" class="your-name" allow-clear placeholder="请输入姓名" />
        </div>
        <div class="phone">
          <p>联系方式</p>
            <van-field v-model="formState.suggestPhone" autocomplete="off" class="your-phone" allow-clear placeholder="请输入联系方式"/>
        </div>
        <div class="content">
          <p>内容</p>
            <van-field v-model="formState.suggestContent" autocomplete="off" class="your-content" allow-clear placeholder="请输入内容"/>
        </div>
        <div style="margin: 30px;padding-top: 20px">
          <van-button round block color="#6ad2d1" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>

    </van-tab>
    <van-tab title="我要投诉">
      <van-form class="worst"  @submit="onSubmit">
        <div class="name">
          <p>姓名</p>
          <van-field v-model="bad.worstName" autocomplete="off" class="your-name" allow-clear placeholder="请输入姓名" />
        </div>
        <div class="phone">
          <p>联系方式</p>
          <van-field v-model="bad.worstPhone" autocomplete="off" class="your-phone" allow-clear placeholder="请输入联系电话号码"/>
        </div>
        <div class="content">
          <p>内容</p>
          <van-field v-model="bad.worstContent" autocomplete="off" class="your-content" allow-clear placeholder="请输入内容"/>
        </div>
        <div style="margin: 30px;padding-top: 20px">
          <van-button round block color="#6ad2d1" native-type="submit">
            提交
          </van-button>
        </div>

      </van-form>
    </van-tab>
  </van-tabs>

</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {SuggestionVo} from "../../entity/home/part/suggestion";
import requestMethodSuggestion from '../../api/home/part/suggestion';
import {QueryObjectType, QueryType} from "../../http/request-model";
import router from "../../router";
import {messageMethod} from "../../utils/message-util";
import {WorstVo} from "../../entity/home/part/worst";
const active = ref(0);
const props=defineProps<{id:string}>()
const formState=reactive<SuggestionVo>({
  // 主键id
  id:'',
  // 备注
  memo:'',
  //建议反馈内容
  suggestContent:'',
  //建议反馈姓名
  suggestName:'',
  //建议反馈电话
  suggestPhone:'',
  //上传时间
  upTime:'',
})
const bad=reactive<WorstVo>({
  id:'',
  //上传时间
  upTime:'',
  //投诉内容
  worstContent:'',
  //投诉姓名
  worstName:'',
  //投诉电话
  worstPhone:'',
})
async function onSubmit() {
  console.log(formState)
  const params = {
    //建议反馈内容
    suggestContent:formState.suggestContent,
    //建议反馈姓名
    suggestName:formState.suggestName,
    //建议反馈电话
    suggestPhone:formState.suggestPhone,
  }
  //接口
  await requestMethodSuggestion.add(params as unknown as QueryType)
  messageMethod.success('提交成功！')
  router.go(-1)
}
// async function onSubmit(params:SuggestionVo){
//   const data={
//     ...(params as unknown as QueryObjectType),
//   }
//   const {message}=await requestMethodSuggestion.add(data)
//   messageMethod.success('提交成功')
//   router.go(-1)
// }

</script>

<style lang="scss" scoped>
p{
  font-size: 15px;
  color: #353b45;
}
.back{
  .name{
    margin-left: 20px;
    margin-right: 20px;
    .yourName{
      height: 40px;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }
  .phone{
    margin-left: 20px;
    margin-right: 20px;
    .your-phone{
      height: 40px;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }
  .content{
    margin-right:20px;
    margin-left: 20px;
    .your-content{
      height: 140px;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }
}
.worst{
  .name{
    margin-left: 20px;
    margin-right: 20px;
    .yourName{
      height: 40px;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }
  .phone{
    margin-left: 20px;
    margin-right: 20px;
    .your-phone{
      height: 40px;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }
  .content{
    margin-right:20px;
    margin-left: 20px;
    .your-content{
      height: 140px;
      background: #fff;
      overflow: hidden;
      margin-top: 10px;
    }
  }
}

</style>