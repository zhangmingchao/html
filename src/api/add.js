import request from "@/utils/request"
class Api {
    constructor () {

    }

    getPermission(){
        return request({
            url:'/permission/getPermission',
            method:'get'
        })
    }
}

const api = new Api();
export default api;