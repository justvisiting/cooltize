sudo stop cooltize-webapp-nodejs
curl -u 'justvisiting' -L -o master.zip  https://github.com/justvisiting/cooltize/zipball/master/
rm -rf tmp/*
unzip master.zip -d tmp
cd tmp/*/webapp/
sudo cp cooltize-webapp-nodejs.conf /etc/init
cp -r ./* ~/cooltize/webapp/
sudo start cooltize-webapp-nodejs
