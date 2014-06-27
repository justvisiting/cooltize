sudo stop ionosui
curl -u 'justvisiting' -L -o master.zip  https://github.com/ionosnetworks/lft/zipball/master/
unzip master.zip -d tmp
cd tmp/*/ui/
sudo cp ionosui.conf /etc/init
cp -r ./* ~/lft/ui/
sudo start ionosui
