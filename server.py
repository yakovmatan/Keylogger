from flask import Flask, jsonify, render_template,request
from manager import Manager
from flask_cors import CORS
import json
import os
import time
from time import localtime

app = Flask(__name__)
record = Manager()
CORS(app)

DATA_FOLDER = "received_data"

if not os.path.exists(DATA_FOLDER):
    os.makedirs(DATA_FOLDER)

@app.get("/")
def index():
    return "hi shuki!"


@app.route('/startRecording', methods=['POST'])
def startRecording():
    record.start_recording()
    return jsonify({"message": "הסקריפט הופעל בהצלחה!"}), 200


@app.route('/stopRecording', methods=['POST'])
def stopRecording():
    record.stop_recording()
    return jsonify({"message": "הסקריפט הופעל בהצלחה!"}), 200


@app.route('/', methods=['POST'])
def receive_data():
    data = request.get_json()
    if data:
        timestamp = time.strftime("%d-%m-%y",localtime())
        filename = f"{timestamp}.json"
        filepath = os.path.join(DATA_FOLDER, filename)

        try:
            with open(filepath, 'w') as f:
                json.dump(data, f, indent=4)
            print(f"Data saved to {filepath}")
            return jsonify({"message": "Data received and saved successfully!"}), 200
        except Exception as e:
            print(f"Error saving data to file: {e}")
            return jsonify({"error": "Error saving data!"}), 500

    else:
        return jsonify({"error": "No data received!"}), 400
data = time.strftime("%d-%m-%y",localtime())


@app.route('/getData/<date>', methods=['GET'])
def get_data(date):
    filename = f"{date}.json"
    filepath = os.path.join(DATA_FOLDER, filename)

    if os.path.exists(filepath):
        try:
            with open(filepath, 'r') as f:
                data = json.load(f)
            return jsonify(data), 200
        except Exception as e:
            return jsonify({"error": "Error reading data!"}), 500
    else:
        return jsonify({"": ""}), 404







if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=True)
