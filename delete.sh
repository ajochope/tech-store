#!/bin/bash

echo
echo "Delete htdocs on local FTP server $TABLET_IP"
checkfolder=$(
lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP -e "ls; exit"

#lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP <<EOF
#ls 
#EOF
)
if [ "$checkfolder" == "" ]; then
    echo "No files to delete"
else
    echo "Deleting files"
    lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP -e "glob -a rm -rf *; exit"
    #lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP <<EOF
    #glob -a rm -rf *
    #EOF
fi

