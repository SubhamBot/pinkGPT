
from flask import Flask, request, jsonify
from flask_cors import CORS  
from gradio_client import Client
 

app = Flask(__name__)
CORS(app)  


client = Client("https://demo.tincans.ai/")

@app.route('/', methods=['GET', 'OPTIONS'])
def get_hi():
    print('hi')
    return jsonify({'message': 'Hi'}), 200


@app.route('/api/get-result', methods=['POST', 'OPTIONS'])


def get_result():
    if request.method == 'OPTIONS':
        
        response = jsonify({'message': 'Preflight request received'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response, 200

    try:
        if not request.is_json:
            return jsonify({'error': 'Request body must be JSON'}), 400
        
        
        text = request.json.get('text')
        
        
        result = client.predict(text, None, None, api_name="/predict")
        
        
        response = result
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
       
        print(e)
        
        response = jsonify({'error': 'Server error'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500
 

if __name__ == '__main__':
    print('boring')
    app.run(port=5000)