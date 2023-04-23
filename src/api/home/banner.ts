import {GetRequestModel, PostRequestModel, QueryType} from "../../http/request-model";
import {PageModel} from "../../http/result-model";
import {BannerVo} from "../../entity/home/banner";


const MODULE_API_PREFIX='/banner'

export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<BannerVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getById: (id: string) => new GetRequestModel<BannerVo>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}