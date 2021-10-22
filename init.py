from flask import Flask, render_template, request
import os
import json
def post_json(idty,confession):
    if confession == None or idty == None:
        pass
    else:
        with open("data.json") as fp:
            listObj = json.load(fp)
            fp.close()
            listObj["entries"].append({
                "index" :{
                "identity" : idty,    
                "confession" : confession
                }})
        with open("data.json", 'w') as json_file:
            json.dump(listObj, json_file,indent=4,separators=(',',': '))
        json_file.close()
def ReturnList():
    with open("data.json") as fp:
        listObj = json.load(fp)
        fp.close()
        return_json = listObj
    return return_json
app = Flask(__name__)
@app.route('/')
def home():
    return render_template("index.html",json=ReturnList())
@app.route('/', methods=['POST','GET'])
def submit():
    if request.method == "POST":
        confession = request.form["confession"]
        idty = request.form["identity_send"]
        post_json(idty,confession)
        return render_template("index.html",json=ReturnList())
    else:
        return render_template("index.html",json=ReturnList())

