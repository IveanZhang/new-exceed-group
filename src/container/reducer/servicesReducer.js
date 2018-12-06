import { GET_SERVICES } from '../action/actionType';

const initState = {
    services: [
        {
            name: '地 产',
            icon: 'building',
            url: 'http://www.neg18.com/realestate.html',
            content: '新超越集团积极拓展上下游渠道，与多家地产开发和销售巨头建立了稳定的合作关系，地产相关从业人员超过千人，业务涉及房产翻建、地产投资、农庄、商用买卖、物业管理等，能够满足客户在不同阶段的配置需求，实现资产保值增值。'
        },
        {
            name: '金 融',
            icon: 'landmark',
            url: 'http://www.neg18.com/financeproduct.html',
            content: '新超越资本与中国大陆金融界和北美本土业绩卓越的各类金融机构通力合作，甄选最有竞争力的标准化金融产品和优质私募产品，为客户提供国际资本市场的多元渠道和专业精准的一站式投资理财体验和解决方案，实现全球资产配置。'
        },
        {
            name: '旅 游',
            icon: 'plane-departure',
            url: 'http://www.neg18.com/tourism.html',
            content: '新超越集团作为行业中的发起者，已经成功联盟了80多家遍布在加拿大中、东、西部的持有ADS资格的旅行社，组建了一支训练有素且经验丰富的团队。这支团队包括了前端销售、旅游顾问、技术部门、市场部门和导游团队等。具备了接待整体团（如公务团）和商务团，及单体团（如私人定制团）等的能力。在北美境内为客户们提供全方位的旅游和考察服务。'
        },
        {
            name: '教 育',
            icon: 'graduation-cap',
            url: 'http://www.neg18.com/education.html',
            content: '新超越集团在北美有着广泛的教育资源，深谙北美院校申请途径，与加拿大最顶尖的50多所大、中、小学通力合作，致力于为学生提供优质且多元化的教育资源，可提供前期学校的参观对接， 咨询、申请辅导、课程设计、签证落地的全方位服务。创造了近乎完美的院校申请成功率和签证记录。'
        }
    ]
};

const servicesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_SERVICES: return state.services;
        default: return state;
    }
};

export default servicesReducer;