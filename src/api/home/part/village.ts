import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {VillageVo} from "../../../entity/home/part/village";
import {SpotVo} from "../../../entity/home/part/spot";

const MODULE_API_PREFIX='/scenicvillage'

export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<VillageVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getVillageId: (id: string) => new GetRequestModel<VillageVo>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}