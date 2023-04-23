import {BusinessPo} from "../../common/base";
export interface CulturalVenusVo extends BusinessPo{
    //地址
    venuesAddress:string
    //文化馆描述
    venuesEvaluate:string
    //文化馆介
    venuesIntroduce:string
    //最大高峰
    venuesMaxpeak:string
    // 标题
    venuesName:string
    //电话号码
    venuesPhone:string
    //文化馆图片
    venuesPic:string
    // 累计
    venuesTotal:string
}