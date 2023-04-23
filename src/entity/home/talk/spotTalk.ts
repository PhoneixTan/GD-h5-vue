import {BusinessPo} from "../../common/base";

export interface SpotTalkVo extends BusinessPo{
    //主键id
    id:string
    //备注
    memo:string
    //景区评论内容
    spotCommentContent:string
    //景区评论时间
    spotCommentTime:string
    //景区评分
    spotFraction:string
    //用户名
    userName:string
}