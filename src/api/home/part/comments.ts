import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {CommentsVo} from "../../../entity/home/part/comments";

const MODULE_API_PREFIX='/spotComment'
export default {
    /**
     * 分页查询活动页表
     * @param query
     */
    page:(query:QueryType)=>new PostRequestModel<PageModel<CommentsVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getCommentsId: (id: string) => new GetRequestModel<CommentsVo>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}