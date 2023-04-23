import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {PartBb} from "../../../entity/home/part/part-bb";


const MODULE_API_PREFIX='/bb'

export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<PartBb>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getById: (id: string) => new GetRequestModel<PartBb>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}