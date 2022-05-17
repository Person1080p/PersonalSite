# cp -R * /usr/share/nginx/html
# git add ./
# git commit -m "$1"
# git push

scp -r * web@192.168.1.166:/var/www/html/
git add ./
git commit -m "$1"
git push

---
turn off x11: systemctl set-default multi-user.target
enable x11: systemctl set-default graphical.target