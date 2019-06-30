import request from "@/utils/request"
export default {
    getList(){
        return request({
            url:'/gathering/gathering',
            method:'get'
        })
    },
    search(page,size,searchMap) {
        return request({
            url: `/gathering/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        })
    },
    addGathering(pojo){
        return request({
            url:'/gathering/addGathering',
            method: 'post',
            data: pojo
        })
    },
    findById(id) {
        return request({
          url: `/gathering/gathering/${id}`,
          method: 'get'
        })
    }
}