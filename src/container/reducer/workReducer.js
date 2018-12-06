import { GET_WORKLIST } from '../action/actionType';

const initState = {
    workList: [
        {
            name: '迪拜达马克Celestia精装公寓',
            url: 'http://www.neg18.com/realestate.html',
            content: 'Celestia 精装公寓，Celestia精装公寓位于迪拜南部—世界上最大的航空枢纽和众多世界级设施的2020年世博会的中枢神经中心。精品品质生活，绝佳投资项目。'
        },
        {
            name: '法国房产投资-璞蔚房地产',
            url: 'http://www.neg18.com/financeproduct.html',
            content: '巴黎自然村庄Villages Nature Paris严格遵循可持续环保建造概念，巴黎自然村庄Villages Nature Paris拥有欧洲最大的水上乐园以及地热礁湖，全年恒温。'
        },
        {
            name: '法国多维尔市：五星级杜克半岛公寓',
            url: 'http://www.neg18.com/tourism.html',
            content: '欧洲五星级酒店式服务，高端装潢配置,150 平米顶级酒吧,玻璃天顶早餐厅,室外泳池、室内泳池.水疗中心： 220平米水疗空间，土耳其浴、桑拿浴等一应俱全。'
        },
        {
            name: '佛州奥兰多—Balmoral度假别墅',
            url: 'http://www.neg18.com/education.html',
            content: '位于佛罗里达州中部，靠近奥兰多，坐落在一个美丽的私人封闭式社区，设有带私人游泳池的宽敞度假屋，周围环绕着宁静的公园，花园，郁郁葱葱的风景，宁静的湖泊和人行道。 咨询、申请辅导、课程设计、签证落地的全方位服务。创造了近乎完美的院校申请成功率和签证记录。'
        },
        {
            name: '亚特兰大·全新独栋别墅—蓝堡美墅',
            url: 'http://www.neg18.com/education.html',
            content: '蓝堡美墅Lombard Estates是由美国佐治亚州三大房地产开发商之一的麦克金利地产有限公司在亚特兰大东南近郊Ellenwood（艾伦伍德）地区全新打造的独栋别墅项目。 咨询、申请辅导、课程设计、签证落地的全方位服务。创造了近乎完美的院校申请成功率和签证记录。'
        },
        {
            name: '达马克梅森Privé——迪拜水岸酒店式公寓',
            url: 'http://www.neg18.com/education.html',
            content: '市中心哈利法塔区，滨水景观酒店式公寓,豪华套房，一居两居全景水岸观景房可选。达马克梅森的酒店服务根据您的需求为您打造最舒心的居住体验。'
        },
        {
            name: '最新超值楼盘——希腊VIRONAS四层公寓出售',
            url: 'http://www.neg18.com/education.html',
            content: '公寓1,2,3,和4层，每层分别82.04平方米。包含：2间卧室，1间卫生间，开放式的客厅，餐厅配有厨房和壁炉、储藏室，停车位以及独立供暖系统。'
        },
        {
            name: 'Shipyard——旧金山顶级海景别墅',
            url: 'http://www.neg18.com/education.html',
            content: '旧金山湾海景别墅Shipyard是位于旧金山市的一个大综合规划社区，坐拥180°旧金山海湾一线景色，这里是西海岸最大的艺术家聚集地之一。'
        }
    ]
};

const workReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_WORKLIST: return state.workList;
        default: return state;
    }
};

export default workReducer;