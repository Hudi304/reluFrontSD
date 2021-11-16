import { API } from "../../api";

export const GET_UserPage_API_new = (params: { userGuid: string }): Promise<any> =>
  API(true, undefined, { headers: null }).get(`/user/logs/${params.userGuid}`)
