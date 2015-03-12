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
