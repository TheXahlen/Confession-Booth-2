from flask import Flask, render_template, request
import uuid
import base64
import os
import json
def post_json(req):
    if req == "":
        pass
    else:
        with open("data.json") as fp:
            listObj = json.load(fp)
            fp.close()
            listObj["entries"].append({
                "id" :{
                "confession" : req
                }})
        with open("data.json", 'w') as json_file:
            json.dump(listObj, json_file, 
                                indent=4,  
                                separators=(',',': '))
        json_file.close()
            
app = Flask(__name__)
@app.route('/')
def home():
    return render_template("index.html",uuid=uuid.uuid4())
@app.route('/', methods=['POST','GET'])
def submit():
    if request.method == "POST":
        text = request.form["nm"]
        post_json(text)
        return render_template("index.html",uuid=uuid.uuid4())
    else:
        return render_template("index.html",uuid=uuid.uuid4())
if __name__ == '__main__':
    app.run(debug=True,host="10.159.13.217")

