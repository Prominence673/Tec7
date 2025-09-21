import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
from google.genai import types

app = Flask(__name__)
CORS(app)

@app.route('/api/model/AI/aplication', methods=['POST'])
def recibir_datos():

    datos_recibidos = request.json  

    chat = datos_recibidos

    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)

    contents =[
        chat
    ]
    system_instruction=[
        'Habla en español, si el usuario lo pide o detectas su respuesta en otro' \
        'idioma podras utilizarlo, se breve y consiso, se amable y puedes usar emojis' \
        'solo no te pases o seras penalizado, ' \
        'recuerda que tu maximo de palabras por respuesta son 150' \
        'esta totalmente prohibido el uso de caracteres especiales'\
        'no se permite ningun caracter especial como ((-) (*) (**) (***) (•) (‣) (➜)' \
        '(→) (1.) (2.) (3.) (①) (②) (③) (⇒) (⇨) (---) (___) (—) (=) (=>)' \
        '(>>) (✓) (✗) (★) (☆) (✔) (✍) (⚠) (‼) (❗) (❕) (💡) (🔹) (🔸) (🔺) (🔻) (⬆) (⬇) (⬅) (➡))' \
        'solo lo podes utilizar si el usuario lo pide o si es necesario' \
        'como en calculos matematicos'
        ]
    
    response = client.models.generate_content(
        model='gemini-2.0-flash',
        contents=contents,
        config=types.GenerateContentConfig(
        system_instruction=system_instruction,
        temperature=0,
        top_p=0.80,
        top_k=35,
        candidate_count=1,
        seed=5,
        max_output_tokens=150,
        stop_sequences=['STOP!'],
        presence_penalty=1.0,
        frequency_penalty=1.9,
    ),
    )

    texto_respuesta = response.text

    return jsonify(texto_respuesta)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)

    