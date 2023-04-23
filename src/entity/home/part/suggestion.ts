import {BusinessPo} from "../../common/base";

export interface SuggestionVo extends BusinessPo{
    //建议反馈内容
    suggestContent?:string
    //建议反馈姓名
    suggestName?:string
    //建议反馈电话
    suggestPhone?:string
    //上传时间
    upTime?:string
    //投诉内容
    worstContent?:string
    //投诉姓名
    worstName?:string
    //投诉电话
    worstPhone?:string
    gmtCreate?:string
}