import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {SpotVo} from "../../../entity/home/part/spot";

const MODULE_API_PREFIX='/scenicspot'

export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<SpotVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getById: (id: string) => new GetRequestModel<SpotVo>(`${MODULE_API_PREFIX}/${id}`, {}).request(),
}