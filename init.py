from flask import *
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
@app.route('/submit', methods=['POST','GET'])
def submit():
    if request.method == "POST":
        confession = request.form["confession"]
        idty = request.form["identity_send"]
        post_json(idty,confession)
        return redirect(request.referrer)
    else:
        return render_template("index.html/",json=ReturnList())

