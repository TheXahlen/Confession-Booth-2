from flask import *
import os
import json
def post_json(identity,confession,size,color,decoration,time):
    if confession == "" or identity == "":
        pass
    else:
        with open("data.json") as fp:
            listObj = json.load(fp)
            fp.close()
            listObj["entries"].append({
                "index" :{
                "identity" : identity,    
                "confession" : confession,
                "size" : size,
                "color" : color,
                "decoration": decoration,
                "time": time
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
        confession = request.form["confession_send"]
        identity = request.form["identity_send"]
        size = request.form["size_send"]
        color = request.form["color_send"]
        decoration = request.form["decoration_send"]
        time = request.form["time_send"]
        print("Submitted data:", confession,identity,size,color,decoration,time)
        post_json(identity,confession,size,color,decoration,time)
        return redirect(request.referrer)
    else:
        return render_template("index.html/",json=ReturnList())
