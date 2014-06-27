sudo apt-get install nodejs
sudo apt-get update
sudo ln -s /usr/bin/nodejs /usr/bin/node
mkdir -p ~/cooltize/webapp
sudo sh -c 'cat cooltizeUIlogrotate.txt >> /etc/logrotate.conf'
