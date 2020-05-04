#!/bin/bash

echo
echo "Delete htdocs on local FTP server $TABLET_IP"

checkfolder=$(lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP -e "ls; exit")

if [ "$checkfolder" == "" ]; then
    echo "No files to delete"
else
    echo "Deleting files"
    lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP -e "glob -a rm -rf *; exit"
fi
