import {BusinessPo} from "../common/base";

export interface FoodVo extends BusinessPo{
    // 辅调料
    foodAssist:string
    // 详情图片
    foodDetailPic:string
    //成品特色
    foodFeatures:string
    //美食菜谱
    foodIntroduce:string
    //主料
    foodMain:string
    //  菜品做法
    foodMake:string
    // 美食名称
    foodName:string
    //美食图片
    foodPic:string
    //  菜品故事
    foodPractice:string
    //主键id
    id:string
    //备注
    memo:string
}