set -e
# 打包
npm run build
# 移動至到打包後的dist目錄 
cd dist
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/lian0103/vue3Blog.git main:gh-pages

cd -