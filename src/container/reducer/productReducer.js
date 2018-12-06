import { GET_PRODUCTLIST } from '../action/actionType';

const initState = {
    productList: [
        {
            name: '文化',
            icon: 'dove',
            url: 'http://www.neg18.com/project.html',
            content: [
                '举办音乐类、舞蹈类等国际化赛事',
                '联合参与各类峰会、论坛等国际会议',
                '投资电影、电视、演出等文化产品'
            ]
        },
        {
            name: '健康',
            icon: 'heartbeat',
            url: 'http://www.neg18.com/project.html',
            content: [
                '与多家人工智能企业合作',
                '涉及医疗、无人驾驶、金融、安防',
                '在加拿大建有多个旅游度假疗养地'
            ]
        }
    ]
};

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PRODUCTLIST: return state.productList;
        default: return state;
    }
};

export default productReducer;