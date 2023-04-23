import {GetRequestModel, PostRequestModel, QueryType} from "../../http/request-model";
import {PageModel} from "../../http/result-model";
import {FoodVo} from "../../entity/home/food";



const MODULE_API_PREFIX='/food'

export default {
    page:(query?:QueryType)=>new PostRequestModel<PageModel<FoodVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getFoodId:(id:string)=>new GetRequestModel<FoodVo>(`${MODULE_API_PREFIX}/${id}`,{}).request()

}