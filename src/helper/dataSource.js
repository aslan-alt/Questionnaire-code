const questions = [
    {
        id: 1, question: '小明在通过人行横道线前，看到人行横道红灯亮时，应该_____。',
        Options: {
            A: "迅速通过人行横道",
            B: "在人行横道线前等待",
            C: "缓慢通过人行横道",
            D: "绕开人行横道通过"
        },
        MultipleChoice: false,
        answer: ['B']
    },
    {
        id: 2, question: '行人需要穿过马路，恰好旁边有一个天桥，问他是否可以不上天桥直接穿过马路？', Options: {
            A: "可以，快一点就好",
            B: "可以，没有人看见就好",
            C: "不可以，这不符合交通管理",
            D: "可以，没有车没有红灯就可以经过"
        },
        answer: ['C'],
        MultipleChoice: false
    },
    {
        id: 3, question: '小明在穿过马路的时间选择翻越中间护栏，你觉得他的做法正确吗？', Options: {
            A: "正确，赶时间",
            B: "不正确，中间护栏阻碍了过马路的行人",
            C: "正确，没有中间护栏就可以快点过马路",
            D: "不正确，中间护栏是为了保护行人的安全"
        },
        answer: ['D'],
        MultipleChoice: false
    },
    {
        id: 4, question: '在坐车的时候，小明好奇路边的宠物，将身体伸出窗外，他可以这么做吗？', Options: {
            A: "不可以，行车途中，都是高速的车辆，容易发生意外",
            B: "可以，应满足孩子的好奇心",
            C: "可以，路上车辆距离那么远，不会有事",
            D: "不可以，小宠物没什么好看的"
        },
        answer: ['A'],
        MultipleChoice: false
    },
    {
        id: 5, question: '您认为在横过道路时，错误的行为是_____。', Options: {
            A: "既不左看，也不右看",
            B: "左看、右看、再左看",
            C: "左右观察，确定安全",
            D: ".一站、二看、三通过"
        },
        answer: ['A'],
        MultipleChoice: false
    },
    {
        id: 6, question: '骑摩托车载人时是否需要戴头盔？(可多选)', Options: {
            A: "只用司机戴头盔",
            B: "不需要",
            C: "后排也要带",
            D: "后排不需要带"
        },
        answer: ['A', 'C'],
        MultipleChoice: true
    },
    {
        id: 7, question: '行人在遇到交通警察指挥手势与信号灯指示不一致时，要按照____通行。', Options: {
            A: "标志、标线",
            B: "交通警察的指挥",
            C: "信号灯的指示",
            D: "道路交通情况"
        },
        answer: ['B'],
        MultipleChoice: false
    },
    {
        id: 8, question: '骑共享单车和电动车的时候，在十字路口，需要左转应该怎么过？', Options: {
            A: "走红色线过",
            B: "走1再走2",
            C: "没有限制，随便走能转就行",
            D: "电动车属于机动车要走机动车道"
        },
        answer: ['B'],
        imgName: 'schematicDiagram',
        MultipleChoice: false
    },
    {
        id: 9, question: '现在共享单车很是流行，很多人都喜欢，下列需要我们用共享单车时需要注意的是:', Options: {
            A: "12岁以下儿童可以骑车",
            B: "共享单车可以载人上路",
            C: "共享单车不可以载人上路",
            D: "可以将单车停在任意位置"
        },
        answer: ['C'],
        MultipleChoice: false
    },
    {
        id: 10, question: '在路上遇到了交通事故，你应该怎么做？', Options: {
            A: "可以围观看热闹",
            B: "近距离拿出手机记录生活",
            C: "在人员安全的情况下拨打122处理事故现场",
            D: "远离事故事不关己高高挂起"
        },
        answer: ['C'],
        MultipleChoice: false
    }
]



export default questions