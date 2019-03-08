#!/bin/bash
echo "test 1"
if [ -e  /home/ubuntu/codedeploy-koloarum/deploy/change_permissions.sh ]
then
    sudo chmod -R 755 /home/ubuntu/codedeploy-koloarum/deploy/change_permissions.sh
else
    exit 0
fi
