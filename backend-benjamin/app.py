from flask import Flask, render_template, request
import openai
import os

app = Flask(__name__)

# Get the OPENAI_API_KEY from the environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.form.get('prompt')
    response = openai.Completion.create(engine="text-davinci-002", prompt=prompt, max_tokens=100)
    return render_template('generated.html', generated_text=response['choices'][0]['text'].strip())

if __name__ == '__main__':
    app.run(port=5000, debug=True)