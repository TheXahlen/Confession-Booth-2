from flask import Flask, render_template, request
import os
import json
with open("data.json") as file:
        jsonOBJ =  json.load(file)
jsonOBJ = json.dumps(jsonOBJ, indent=2)
file.close()
def post_json(idty,confession):
    if confession == None or idty == None:
        pass
    else:
        with open("data.json") as fp:
            listObj = json.load(fp)
            fp.close()
            listObj["entries"].append({
                idty :{
                "confession" : confession
                }})
        with open("data.json", 'w') as json_file:
            json.dump(listObj, json_file,indent=4,separators=(',',': '))
        json_file.close()
app = Flask(__name__)
@app.route('/')
def home():
    return render_template("index.html")
@app.route('/', methods=['POST','GET'])
def submit():
    if request.method == "POST":
        confession = request.form["confession"]
        idty = request.form["identity_send"]
        post_json(idty,confession)
        return render_template("index.html")
    else:
        return render_template("index.html")
if __name__ == '__main__':
    app.run(debug=True,host="10.159.13.217")

