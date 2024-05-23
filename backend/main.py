from flask import Flask, request, jsonify
import prompt

app = Flask(__name__)

@app.route('/prompt_request', methods=['POST'])
def process_text():
    data = request.get_json()
    text = data.get('text', '')
    processed_text = text.upper()  
    return jsonify({'result': processed_text})

if __name__ == '__main__':
    app.run(debug=True)
