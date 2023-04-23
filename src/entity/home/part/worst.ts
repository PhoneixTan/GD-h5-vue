import {BusinessPo} from "../../common/base";

export interface WorstVo extends BusinessPo{
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