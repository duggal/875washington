#imports
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash
from contextlib import closing

#configuration
DATABASE = 'db/875wash.db'
DEBUG = True
SECRET_KEY = 'devkey'
USERNAME = 'admin'
PASSWORD = 'password'

#create our application
app = Flask(__name__)
app.config.from_object(__name__)

#database
def connect_db():
	return sqlite3.connect(app.config['DATABASE'])

def init_db():
	with closing(connect_db()) as db:
		with app.open_resource('schema.sql', mode='r') as f:
			db.cursor().executescript(f.read())
		db.commit()

@app.before_request
def before_request():
	g.db = connect_db()

@app.teardown_request
def teardown_request(exception):
	db = getattr(g, 'db', None)
	if db is not None:
		db.close()

#views
@app.route('/')
def show_directory():
	cur = g.db.execute('select name, number from tenants order by name asc')
	tenants = [dict(name=row[0], number=row[1]) for row in cur.fetchall()]
	tenants = sorted(tenants, key=lambda k: k['name'].lower()) #case insensitive sorting
	return render_template('index.html', tenants=tenants)

@app.route('/show')
def show_tenants():
	cur = g.db.execute('select name, number from tenants order by name asc')
	tenants = [dict(name=row[0], number=row[1]) for row in cur.fetchall()]
	return render_template('show_tenants.html', tenants=tenants)

@app.route('/addtenant', methods=['POST'])
def add_tenant():
	if not session.get('logged_in'):
		abort(401)
	g.db.execute('insert into tenants(name, number) values (?, ?)', [request.form['name'], request.form['number']] )
	g.db.commit()
	flash('new entry was successfully posted!')
	return redirect(url_for('show_tenants'))

@app.route('/login', methods=['GET', 'POST'])
def login():
	error = None
	if request.method == 'POST':
		if request.form['username'] != app.config['USERNAME']:
			error = 'Invalid Username'
		elif request.form['password'] != app.config['PASSWORD']:
			error = 'Invalid Password'
		else:
			session['logged_in'] = True
			flash('You were logged in')
			return redirect(url_for('show_tenants'))
	return render_template('login.html', error=error)

@app.route('/logout')
def logout():
	session.pop('logged_in', None)
	flash('You were logged out')
	return redirect(url_for('show_tenants'))

#initalize backend and db
@app.route('/setup')
def setup_tenants():
	
	#setup a dictionary with tenants name and number
	default_tenants = {

		'tenants' : [
		('Arch Entertainment', '207'),
		('ASB Real Estate Investments', '302'),
		('Bond Creative Search, Inc.', '503'),
		('Clinic LLC', '504'),
		('Crowdpleaser Music/Face the Music/Wildfire', '307'),
		('Daryanini & Bland PC', '304/305'),
		('Indian Paintbrush Productions', '502'),
		('Kyle Editing, LLC', '500/507'),
		('Luthien Group', '205'),
		('Palantir Technologies', '4th Floor'),
		('Pension Partners', '505'),
		('Rock World USA, LLC', '300'),
		('TOMS', '203'),
		('Zimmermann (USA) Inc.', '301')
		]

	}
	#for each entry in the dictionary, insert it to the database	
	for defaulttenants, tenants in default_tenants.items():
		for name, number in tenants:
			g.db.execute('insert into tenants(name, number) values (?, ?)', [name, number])
	    	g.db.commit()

	cur = g.db.execute('select name, number from tenants order by id desc')
	tenants = [dict(name=row[0], number=row[1]) for row in cur.fetchall()]
	return render_template('index.html', tenants=tenants)

if __name__ == '__main__':
	app.run(host='0.0.0.0')
