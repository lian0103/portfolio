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
