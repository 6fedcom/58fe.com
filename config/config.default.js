"use strict";
const path = require("path");

module.exports = appInfo => {
  const config = {};

  config.name = "前端社区";

  config.description =
    "国内比较专业、具有影响力的前端交流社区,致力于前端技术的研究与探讨。";

  config.site_logo = "";

  config.site_icon = "/public/images/58fe-ico.png";

  // debug 为 true 时，用于本地调试
  config.debug = true;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1519887194138_3450";

  config.host = "https://58fe.com";

  config.session_secret = "qian188105274"; // 务必修改

  // add your config here
  config.middleware = [
    "locals",
    "authUser",
    "blockUser",
    "errorPage",
    "errorHandler"
  ];

  config.authUser = {
    enable: true,
    match: "/"
  };

  // 是否允许直接注册（否则只能走 github 的方式）
  config.allow_sign_up = true;

  // cdn host，如 http://cnodejs.qiniudn.com
  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ""; // 静态文件存储域名

  config.mini_assets = process.env.EGG_MINI_ASSETS || false;
  //版块
  config.tabs = [
    {
      tab: "topic",
      name: "话题",
      labels: [
        ["all", "全部"],
        ["hot", "热门"],
        ["tech", "技术交流"],
        ["work", "工作吐槽"],
        ["freetime", "上班摸鱼"],
        ["life", "生活相关"],
        ["infer", "交友相亲"],
        ["parttime", "兼职外包"],
        ["feedback", "反馈与帮助"],
        ["other", "其他"],
        ["good", "精华"],
      ]
    },
    {
      tab: "column",
      name: "专栏",
      labels: [
        ["all", "全部"],
        ["hot", "热门"],
        ["frontend", "前端"],
        ["backend", "后端"],
        ["client", "客户端"],
        ["interview", "面试分享"],
        ["other", "其他"],
        ["good", "精华"],
      ]
    },
    {
      tab: "ask",
      name: "问答",
      labels: [
        ["all", "全部"],
        ["hot", "热门"],
        ["unsolved", "未解决"],
        ["solved", "已解决"],
        ["good", "精华"]
      ]
    },
    {
      tab: "job",
      name: "内推",
      labels: [
        ["all", "全部"],
        ["infer", "内推"],
        ["apply-job", "求职"],
        ["bj", "北京"],
        ["sh", "上海"],
        ["sz", "深圳"],
        ["gz", "广州"],
        ["hz", "杭州"],
        ["other-city", "其他城市"]
      ]
    },
    {
      tab: "circle",
      name: "圈子",
      labels: [
        ["all", "全部"],
        ["hot", "热门"],
        ["good", "推荐"],
      ]
    }
  ];

  // RSS配置
  config.rss = {
    title: "国内领先的前端社区-58fe.com,",
    link: "https://58fe.com",
    language: "zh-cn",
    description: "58fe.com,国内最专业的前端技术社区，致力于前端技术研究探讨。",
    // 最多获取的RSS Item数量
    max_rss_items: 50
  };

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  config.qn_access = {
    accessKey: "HCct3FpW17hnRMdsSCnogNeqtklD5nIiUa9hOrvi",
    secretKey: "7Pp2QhmgJo0SdwpKCiuq5M1VMFHbZNj68mjLBwRz",
    bucket: "cdn58fe",
    origin: "cdn.58fe.com",
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: ""
  };

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  config.upload = {
    path: path.join(__dirname, "../app/public/upload/"),
    url: "/public/upload/"
  };

  config.view = {
    defaultViewEngine: "ejs",
    mapping: {
      ".html": "ejs"
    }
  };

  config.ejs = {
    layout: "layout.html"
  };

  config.auth_cookie_name = "fe_club";
  config.admins = {
    ADMIN_USER: true,
    admin: true,
    testaccount: true
  };

  config.siteFile = {
    "/favicon.ico": "/public/images/58fe-ico.png"
  };

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || "127.0.0.1",
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || "",
      db: process.env.EGG_REDIS_DB || "0"
    }
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || "mongodb://127.0.0.1:27017/egg_cnode",
    options: {
      server: { poolSize: 20 },
      reconnectTries: 10,
      reconnectInterval: 500
    }
  };

  // passport
  config.passportGithub = {
    key: process.env.EGG_PASSPORT_GITHUB_CLIENT_ID || "bcb67bdf9ab12653b478",
    secret: process.env.EGG_PASSPORT_GITHUB_CLIENT_SECRET || "c58126314ee373eb91a010cd6e98b2b76c9ec48e",
  };

  config.passportLocal = {
    usernameField: "name",
    passwordField: "pass"
  };

  // 邮箱配置
  config.mail_opts = {
    host: "smtp.qq.com",
    port: 465,
    auth: {
      user: "694372017@qq.com",
      pass: "bcklzqlgmlwbbahf"
    },
    ignoreTLS: true
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.EGG_ALINODE_APPID || "83395",
    secret:
      process.env.EGG_ALINODE_SECRET ||
      "2c59d6d32cbac77e17ee0dd312deb3c01b0b23fa"
  };

  config.topic = {
    perDayPerUserLimitCount: 10
  };

  config.list_topic_count = 20;

  // 每个 IP 每天可创建用户数
  config.create_user_per_ip = 10;

  config.search = "google"; // 'google', 'baidu', 'local'

  config.security = {
    csrf: {
      ignore: "/api/*/*"
    }
  };

  config.default_page = 1;
  config.default_limit = 20;
  config.cnzz_tracker_id = "1278204572";
  return config;
};
