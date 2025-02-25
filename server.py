from flask import Flask, jsonify, render_template
from manager import Manager

app = Flask(__name__)
record = Manager()
@app.route('/')
def homePage():
    return render_template("exemple.html")

@app.route('/startRecording', methods=['POST'])
def startRecording():
    record.start_recording()
    return jsonify({"message": "הסקריפט הופעל בהצלחה!"}), 200

@app.route('/stopRecording', methods=['POST'])
def stopRecording():
    record.stop_recording()
    return jsonify({"message": "הסקריפט הופעל בהצלחה!"}), 200



if __name__ == '__main__':
    app.run(debug=True)
