import { GET_NAV_LIST } from './navBarActionType';
import {NAVKEY} from './config'
const initState = {
    navList: [
        {
            key: NAVKEY.home,
            value: '首页'
        },
        {
            key: NAVKEY.service,
            value: '四大领域'
        },
        {
            key: NAVKEY.about,
            value: '新超越介绍'
        },
        {
            key: NAVKEY.work,
            value: '产品展示'
        },
        {
            key: NAVKEY.product,
            value: '两大产业'
        },
        {
            key: NAVKEY.cultures,
            value: '公司文化'
        },
        {
            key: NAVKEY.history,
            value: '公司大事记'
        },
        {
            key: NAVKEY.contact,
            value: '联系忘我们'
        }
    ]
};

const navBarReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_NAV_LIST: return state.navList;
        default: return state;
    }
};

export default navBarReducer;