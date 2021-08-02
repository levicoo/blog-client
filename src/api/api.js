import request from './request'

export default {
    getMenuList() {
        return request({
            url: '/menus',
            method: 'get',
        })
    },
    getLogo() {
        return request({
            url: '/logotitle',
            method: 'get',
        }) 
    },
    getBannerList() {
        return request({
            url: '/banners',
            method: 'get',
        })
    },
    getArticles(params) {
        return request({
            url: '/article',
            method: 'get',
            data: params
        })
    },
    getTags() {
        return request({
            url: '/tags',
            method: 'get',
        })
    },
}