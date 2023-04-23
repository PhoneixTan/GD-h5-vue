import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {hotelVo} from "../../../entity/home/part/part-hotel";

const MODULE_API_PREFIX='/hotel'

export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<hotelVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getById: (id: string) => new GetRequestModel<hotelVo>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}