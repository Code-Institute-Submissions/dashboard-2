import os
from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json

app = Flask(__name__)

MONGO_URI = os.getenv('MONGODB_URI', 'mongodb://localhost:27017')
DBS_NAME = os.getenv('MONGO_DB_NAME', 'test')
COLLECTION_NAME = 'projects'

@app.route("/")
def index():
    """flask view to serve main dashboard"""
    return render_template("index.html")

@app.route("/test/haadb")
def home_and_away():
    """flask view to serve data from mongodb"""

    FIELDS = {
        '_id': False, 'first': True, 'last': True,
        'gender': True, 'cause_of_death': True, 'storyline': True, 'year_died': True,
        'family': True, 'marital_stat': True, 'partner': True, 'job': True, 'house': True, 'deadinj': True, 'cause_of_inj': True, 'type_of_inj': True
    }

    with MongoClient(MONGO_URI) as conn:
        collection = conn[DBS_NAME][COLLECTION_NAME]
        projects = collection.find(projection=FIELDS, limit=20000)
        return json.dumps(list(projects))

if __name__ == "__main__":
    app.run(debug=True)