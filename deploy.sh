#!/bin/bash
#ssh into our server
ssh -t -i ~/.ec2/duggal.pem ec2-user@ec2-54-175-95-92.compute-1.amazonaws.com "cd python/875washington; git fetch --all; git reset --hard origin/master; python initdb.py; sudo supervisorctl restart all"
