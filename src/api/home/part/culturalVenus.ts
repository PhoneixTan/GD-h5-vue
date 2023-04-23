import {GetRequestModel, PostRequestModel, QueryType} from "../../../http/request-model";
import {PageModel} from "../../../http/result-model";
import {CulturalVenusVo} from "../../../entity/home/part/culturalVenus";
import {SpotVo} from "../../../entity/home/part/spot";

const MODULE_API_PREFIX='/culturalvenues'

export default {
    page:(query:QueryType)=>new PostRequestModel<PageModel<CulturalVenusVo>>(`${MODULE_API_PREFIX}/page`,query).request(),
    getVenusId: (id: string) => new GetRequestModel<CulturalVenusVo>(`${MODULE_API_PREFIX}/${id}`, {}).request()
}