import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {ActivityVo} from "../../../entity/home/activity";

const MODULE_API_PREFIX='/activity'
export default {
    /**
     * 分页查询活动页表
     * @param query
     */
    page:(query:QueryType)=>new PostRequestModel<PageModel<ActivityVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getActivityId: (id: string) => new GetRequestModel<ActivityVo>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}