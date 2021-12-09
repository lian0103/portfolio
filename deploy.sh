set -e
# 打包
npm run build
git add -A
git commit -m 'deploy'
git push 

cd -