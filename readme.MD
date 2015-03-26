Installing backend (on OS X):

1) Create virtualenv

`virtualenv venv`

2) Activate your environment

`. venv/bin/activate`

or 

`source venv/bin/activate`

3) Install Flask

`pip install flask`

4) Create your database by running

`sqlite3 /tmp/875wash.db < schema.sql`

Running the app:

1) From the commandline, run

`python 875wash.py`


Notes on deploying on EC2

http://bcjordan.com/pip-on-amazon-ec2/

https://medium.com/@rodkey/deploying-a-flask-application-on-aws-a72daba6bb80

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

http://stackoverflow.com/questions/8193768/trying-to-ssh-into-an-amazon-ec2-instance-permission-error

http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#public-ip-addresses

http://stackoverflow.com/questions/20941704/ec2-instance-has-no-public-dns


http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

# Notes on running supervisord

ps -A

kill -9 PID

http://stackoverflow.com/questions/17780291/python-socket-error-errno-98-address-already-in-use

http://stackoverflow.com/questions/6532486/supervising-virtualenv-django-app-via-supervisor

http://serverfault.com/questions/483438/ubuntu-supervisord-and-virtualenv

http://stackoverflow.com/questions/10716159/nginx-and-supervisor-setup-in-ubuntu

http://supervisord.org/running.html

http://ec2-54-175-95-92.compute-1.amazonaws.com:5000/

