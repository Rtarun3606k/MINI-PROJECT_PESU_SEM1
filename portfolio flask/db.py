from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///projectsdatabases.db"
# Function that initializes the db and creates the tables
def db_init(app):
    db.init_app(app)

    # Creates the logs tables if the db doesnt already exist
    with app.app_context():
        db.create_all()