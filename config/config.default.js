'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.name = '58fe-国内领先的前端社区';

  config.description = '国内领先的前端社区-58fe.com';

  config.site_logo = '';

  config.site_icon = '/public/images/cnode_icon_32.png';

  // debug 为 true 时，用于本地调试
  config.debug = true;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519887194138_3450';

  config.host = 'http://cnodejs.org';

  config.session_secret = 'node_club_secret'; // 务必修改

  // add your config here
  config.middleware = [ 'locals', 'authUser', 'blockUser', 'errorPage', 'errorHandler' ];

  config.authUser = {
    enable: true,
    match: '/',
  };

  // 是否允许直接注册（否则只能走 github 的方式）
  config.allow_sign_up = true;

  // cdn host，如 http://cnodejs.qiniudn.com
  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ''; // 静态文件存储域名

  config.mini_assets = process.env.EGG_MINI_ASSETS || false;

  // 版块
  config.tabs = [[ 'share', '分享' ], [ 'ask', '问答' ], [ 'job', '招聘' ]];
  // 版块
  config.fetabs = [
    {
      tab: 'index',
      name: '首页',
      labels: [
        [ 'all', '全部' ],
        [ 'excellent', '精华' ],
        [ 'hot', '最近热门' ],
        // ['',"猜你喜欢"]
      ],
    },
    {
      tab: 'tech',
      name: '技术',
      labels: [
        [ 'all', '全部' ],
        [ 'excellent', '精华' ],
        [ 'share', '技术分享' ],
        [ 'interview', '面试分享' ],
        [ 'vue', 'vue' ],
        [ 'react', 'react' ],
        [ 'node', 'node' ],
        [ 'css', 'css' ],
        [ 'js', 'javascript' ],
        [ 'webpack', 'webpack' ],
        [ 'other', '其他' ],
      ],
    },
    {
      tab: 'circle',
      name: '圈子',
      labels: [
        [ 'all', '全部' ],
        [ 'excellent', '精华' ],
        [ 'infer', '交友相亲' ],
        [ 'free-time', '摸鱼划水' ],
        [ 'post-part-time', '发布兼职' ],
        [ 'seeking-part-time', '寻求兼职' ],
      ],
    },
    {
      tab: 'ask',
      name: '问答',
      labels: [
        [ 'all', '全部' ],
        [ 'unsolved', '未解决' ],
        [ 'solved', '已解决' ],
        [ 'excellent', '精华' ],
      ],
    },
    {
      tab: 'job',
      name: '内推',
      labels: [
        [ 'all', '全部' ],
        [ 'infer', '内推' ],
        [ 'apply-job', '求职' ],
        [ 'bj', '北京' ],
        [ 'sh', '上海' ],
        [ 'sz', '深圳' ],
        [ 'gz', '广州' ],
        [ 'hz', '杭州' ],
        [ 'other-city', '其他城市' ],
        [ 'overseas', '海外' ],
      ],
    },
    {
      tab: 'more',
      name: '更多',
      labels: [
        [ 'promote', '推广' ],
        [ 'suggest', '建议意见' ],
        [ 'bug-feedback', 'bug反馈' ],
        [ 'dev', '测试' ],
      ],
    },

  ],

  // RSS配置
  config.rss = {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',
    // 最多获取的RSS Item数量
    max_rss_items: 50,
  };

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  config.qn_access = {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx',
  };

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/',
  };

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    layout: 'layout.html',
  };

  config.avatars_allow_hostname = [
    'avatars0.githubusercontent.com',
    'avatars1.githubusercontent.com',
    'avatars2.githubusercontent.com',
    'avatars.githubusercontent.com',
    'www.gravatar.com',
    'gravatar.com',
    'www.google-analytics.com',
  ];

  config.auth_cookie_name = 'node_club';
  config.admins = {
    ADMIN_USER: true,
  };

  config.siteFile = {
    '/favicon.ico': '/public/images/cnode_icon_32.png',
  };

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/egg_cnode',
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500,
    },
  };

  // passport
  config.passportGithub = {
    key: process.env.EGG_PASSPORT_GITHUB_CLIENT_ID || 'test',
    secret: process.env.EGG_PASSPORT_GITHUB_CLIENT_SECRET || 'test',
  };

  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass',
  };

  // 邮箱配置
  config.mail_opts = {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club',
    },
    ignoreTLS: true,
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.EGG_ALINODE_APPID || '',
    secret: process.env.EGG_ALINODE_SECRET || '',
  };

  config.topic = {
    perDayPerUserLimitCount: 10,
  };

  config.list_topic_count = 20;

  // 每个 IP 每天可创建用户数
  config.create_user_per_ip = 1000;

  config.search = 'google'; // 'google', 'baidu', 'local'

  config.security = {
    csrf: {
      ignore: '/api/*/*',
    },
  };

  config.default_page = 1;
  config.default_limit = 20;

  return config;
};