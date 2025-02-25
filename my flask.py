from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/get', methods=['GET'])
def handle_get():
    return {"message": "Hello from GET!"}

@app.route('/post', methods=['POST'])
def handle_post():
    data = request.json
    return {"message": "Hello from POST!", "data": data}

if __name__ == '__main__':
    app.run(debug=True)