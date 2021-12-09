set -e

npm run build
cd dist
cp ../404.html ./
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/lian0103/vue3Blog.git master:gh-pages
