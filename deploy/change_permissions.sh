#!/bin/bash
cd /home/ubuntu/codedeploy-koloarum
sudo cp -r /home/ubuntu/codedeploy-koloarum/* /var/www/html/koloarum.staging312.com/
cd /var/www/html/koloarum.staging312.com/
sudo /etc/init.d/apache2 reload
