import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {SpotTalkVo} from "../../../entity/home/talk/spotTalk";

const MODULE_API_PREFIX='/spotComment'
export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<SpotTalkVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getById: (id: string) => new GetRequestModel<SpotTalkVo>(`${MODULE_API_PREFIX}/${id}`, {}).request(),
    /**
     * 新增信息
     */
    add:(query?:QueryType)=>new PostRequestModel(MODULE_API_PREFIX+'/',query).request()
}