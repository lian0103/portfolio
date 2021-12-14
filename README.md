
2021-12-08 專案初始、選單製作
vue3 & vite & tailwindcss 重構2019年vue2的部落格 -> 改為自介&作品集

2021-12-09 處理路由

2021-12-13 檔案整理、加入留言大頭照選擇、加入.env檔
// .env 存放 VITE_FIREBASE_APIKEY from firebase

2021-12-14 使用firebase cli 佈署在firebase hosting
待研究: vite config file管理 https://vitejs.dev/guide/env-and-mode.html

佈署流程 deploy.sh 
```shell
set -e

if [ "$1" == 'github' ]
then 
npm run build
cd dist
cp ../404.html ./
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/lian0103/portfolio.git master:gh-pages
fi

if [ "$1" == 'firebase' ]
then 
npm run build-stage
firebase deploy --only hosting
fi

```

github page: 
https://lian0103.github.io/portfolio/
路由部分採用 vue router部分使用 createWebHashHistory()

firebase hosting:
https://message-47a1c.web.app/about
路由部分採用 vue router部分使用 createWebHistory()

