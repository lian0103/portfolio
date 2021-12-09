set -e
if [ "$1" != '' ]
then 
    npm run build
    git add -A
    git commit -m $1
    git push 
fi