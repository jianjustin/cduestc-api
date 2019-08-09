module.exports = {
    title: '科成教务API',
    description: '对原有教务系统进行封装并开放出RESTAPI',
    themeConfig: {
        navbar: false,
        sidebar: [{
                title: '首页',
                collapsable: false,
                children: [
                    '/'
                ]
            },{
                title: '起步',
                collapsable: false,
                children: [
                    '/getting-started/'
                ]
            },
            {
                title: 'API文档',
                collapsable: false,
                children: [
                	'/api/',
                	'/api/LOGIN.md',
                	'/api/SCORE.md'
                ]
            }
        ]
    }
}