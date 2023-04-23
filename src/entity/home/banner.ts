import {BusinessPo} from "../common/base";
/*
 * 轮播图实体类
 * */

export interface BannerVo extends BusinessPo {
    //轮播图点赞数
    bannerLattice:string
    //轮播图片
    bannerPic:string
    //轮播图标题
    bannerTitle:string
    //主键id
    id:string
    //备注
    memo:string
}

