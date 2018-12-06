import { GET_CULTURELIST } from '../action/actionType';

const initState = {
    cultureList: [
        {
            content: '作为一个全球性拥有多元文化的企业，来自世界各地的员工为了一个目标努力奋斗。在这里国籍不是问题，年龄不是差距，语言不会带来障碍。每个人都能找到最适合自己的位置，发挥最大的价值。我们会走到世界各地的企业参观学习，掌握最准确的信息，寻找最合适的资源。',
            isHighLight: false
        },
        {
            content: '集团也非常注重人才培养和梯队的建设，每周会邀请各行业资深专家进行内部培训。企业会出资选拔优秀员工到各大商学院进行进一步深造。',
            isHighLight: false
        },
        {
            content: '精诚铸就品牌，平台重塑格局',
            isHighLight: true
        }
    ]
};

const cultureReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_CULTURELIST: return state.cultureList;
        default: return state;
    }
};

export default cultureReducer;