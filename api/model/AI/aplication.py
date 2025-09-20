import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai

app = Flask(__name__)
CORS(app)

@app.route('/api/model/AI/aplication', methods=['POST'])
def recibir_datos():

    datos_recibidos = request.json  

    chat = datos_recibidos

    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents=chat
    )
    texto_respuesta = response.text

    return jsonify(texto_respuesta)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)

    