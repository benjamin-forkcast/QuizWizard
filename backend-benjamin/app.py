from flask import Flask, render_template, request
import openai
import os

app = Flask(__name__)

# Get the OPENAI_API_KEY from the environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        # Get parameters from the request
        parameters = request.get_json(force=True)

        if not parameters:
            return {"error": "No parameters provided"}, 400

        # Check for missing parameters
        for param in ['number_of_questions', 'theme', 'country', 'format', 'difficulty', 'vibe', 'custom_request']:
            if param not in parameters:
                return {"error": f"Missing parameter: {param}"}, 400

        # Use the build_prompt function to generate the prompt
        prompt = build_prompt(parameters)

        # Call OpenAI API
        response = openai.Completion.create(engine="text-davinci-002", prompt=prompt, max_tokens=100)

        # Here, you may need to process the response to a format that frontend can use
        return {"result": response['choices'][0]['text'].strip()}

    except Exception as e:
        return {"error": str(e)}, 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)

def build_prompt(parameters):
    # Start the base prompt
    base_prompt = """You are an AI-powered quiz generator. You take input according to the criteria below to guide the generation of a unique quiz.
    1. Number of questions - how many questions should the quiz consist of?
    2. Theme - what topic or topics should be included in the quiz...
    ...
    Please also avoid anything overly specific...

    I now want you to generate a quiz according to the following parameters:"""

    # Format the user's parameters into the request
    request_prompt = """
    1. Number of questions: {number_of_questions}
    2. Theme: {theme}
    3. Country: {country}
    4. Format: {format}
    5. Difficulty: {difficulty}
    6. Vibe: {vibe}
    7. Custom request: {custom_request}
    """.format(
        number_of_questions=parameters.get('number_of_questions'),
        theme=parameters.get('theme'),
        country=parameters.get('country'),
        format=parameters.get('format'),
        difficulty=parameters.get('difficulty'),
        vibe=parameters.get('vibe'),
        custom_request=parameters.get('custom_request'),
    )

    # Combine the base prompt and the request into one full prompt
    full_prompt = f"{base_prompt}{request_prompt}"

    return full_prompt