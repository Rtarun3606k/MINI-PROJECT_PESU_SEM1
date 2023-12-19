# from db import db
# from datetime import datetime
# from flask_wtf import FlaskForm
# from wtforms import SubmitField
# from flask_wtf.file import FileField , FileRequired , FileAllowed


# from flask_uploads import UploadSet , IMAGES , configure_uploads
# from werkzeug.utils import secure_filename
# from werkzeug.datastructures import  FileStorage
# from flask import Flask, render_template, url_for, request, redirect, flash ,send_from_directory,Response
# from flask_sqlalchemy import SQLAlchemy

# # class UploadForm(FlaskForm):
# #     photo = FileField(
# #         validators=[
# #             FileAllowed(photos, "only images are allowed"),
# #             FileRequired('File field should not be empty')
# #         ]
# #     )
# #     submit = SubmitField('Upload')


# # use this command when u change db class or methods or db coloms

# # >>> from app import app , db
# # >>> app.app_context().push()
# # >>> db.create_all()   


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(500),nullable=False )
#     email = db.Column(db.String(500),nullable=False )
#     pa = db.Column(db.String(500),nullable=False )  #message
#     # messages = db.Column(db.String(500),nullable=False )  #message
#     date_created = db.Column(db.DateTime, default=datetime.utcnow)

#     def __repr__(self) -> str:
#         return f"{self.name} - {self.pa}"






# class projectdb(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     project_name = db.Column(db.String(500),nullable=False )
#     project_language = db.Column(db.String(500),nullable=False )
#     project_link = db.Column(db.String(500),nullable=False )  
#     project_reach_link = db.Column(db.String(500),nullable=False )  
#     project_description = db.Column(db.String(500),nullable=False )  
#     date_created = db.Column(db.DateTime, default=datetime.utcnow)

#     def __repr__(self) -> str:
#         return f"{self.project_name} - {self.project_link}"


# class certdb(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     cert_name = db.Column(db.String(500),nullable=False )
#     cert_company_name = db.Column(db.String(500),nullable=False )
#     cert_image = db.Column(db.String(500),nullable=False )  
#     cert_link = db.Column(db.String(500),nullable=False )   
#     date_created = db.Column(db.DateTime, default=datetime.utcnow)
#     id = db.Column(db.Integer, primary_key=True)
#     img = db.Column(db.Text, unique=True, nullable=False)
#     name = db.Column(db.Text, nullable=False)
#     mimetype = db.Column(db.Text, nullable=False)

#     def __repr__(self) -> str:
#         return f"{self.cert_name} - {self.cert_link}"



# class Img(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     img = db.Column(db.Text, unique=True, nullable=False)
#     name = db.Column(db.Text, nullable=False)
#     mimetype = db.Column(db.Text, nullable=False)