sudo stop /cooltiz-webapp-nodejs
curl -u 'justvisiting' -L -o master.zip  https://github.com/justvisiting/cooltize/zipball/master/
unzip master.zip -d tmp
cd tmp/*/webapp/
sudo cp /cooltiz-webapp-nodejs.conf /etc/init
cp -r ./* ~/cooltize/webapp/
sudo start /cooltiz-webapp-nodejs
