import {PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {SuggestionVo} from "../../../entity/home/part/suggestion";

const MODULE_API_PREFIX='/suggestion'
export default {
    /**
     * 分页查询列表
     */
    page:(query:QueryType)=>new PostRequestModel<PageModel<SuggestionVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    /**
     * 添加数据
     */
    add:(query?:QueryType)=>new PostRequestModel(MODULE_API_PREFIX+'/',query).request()
}