#!/bin/bash

ncftp -u "$FTP_USER" -p "$FTP_PASS" "$FTP_HOST"<<EOF
rm -rf docs
quit
EOF

ncftpput -R -v -u "$FTP_USER" -p "$FTP_PASS" "$FTP_HOST" docs docs/*