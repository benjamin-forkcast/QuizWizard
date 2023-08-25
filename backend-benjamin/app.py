
from flask import Flask, render_template, request
import openai
import os
from openai.error import OpenAIError

# Utility function to generate a prompt based on provided parameters
def build_prompt(parameters):
    # Define the base prompt
    base_prompt = """You are an AI-powered quiz generator. You take input according to the criteria below to guide the generation of a unique quiz.
    1. Number of questions - how many questions should the quiz consist of?
    2. Theme - what topic or topics should be included in the  quiz. All questions should not necessarily be pure trivia about the topic, but it can be interpreted a bit more loosely as well. For example, if the theme is fruit it could be fun to include a question about the company "Apple" too.
    3. Country - to which country does the audience belong? This is to ensure that the questions are relevant to the crowd. If the theme is sports, an audience from India might be more interested in cricket than baseball. However, it can also mean that questions about local phenomena can be included.
    4. Format - should the questions be multiple choice, open-ended, or something else? Multiple choice is generally easier to answer and therefore often of lower difficulty.
    5. Difficulty - how difficult should the questions be? They can range from very easy to very difficult, but keep in mind that even a very difficult question should be possible to answer.
    6. Vibe - should the quiz be humorous, serious, or something else? This can affect the type of questions that are generated.
    7. Custom request - any other specific requirements or requests for the quiz.
    Please avoid obvious questions no matter the difficulty. Do not ask what is bigger of an elephant, a mouse or a fruit fly or anything of that sort. Consider what is "common knowledge" for the audience and avoid anything that falls in that category. Please make sure that the question does not automatically reveal the answer. For example, you cannot ask what kind of animal a "brown bear" is, since the name reveals that it is a bear. Consider the same thing even if the name is a translation to another language, for example you cannot ask what kind of animal a "brunbjörn" is either, since "björn" means bear in Swedish.
    Please also avoid anything overly specific. Even a soccer expert would not know when a small local football club in Armenia was founded, so such questions can not be included. There should be a good chance that some contestant knows the answer to every question. Please make sure that any persons, phenomena, products, brands etc. that you ask about are well-established and known to a reasonably wide audience.
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

    # Combine the base prompt and user request into a single prompt
    full_prompt = f"{base_prompt}{request_prompt}"

    return full_prompt

# Initialize the Flask application
app = Flask(__name__)

# Fetch the OpenAI API key from environment variables, also check that it exists
openai_api_key = os.getenv('OPENAI_API_KEY')
if not openai_api_key:
    raise ValueError("The OPENAI_API_KEY environment variable is not set!")
openai.api_key = openai_api_key

@app.route('/generate', methods=['POST'])
def generate():
    try:
        # Extract parameters from the incoming request
        parameters = request.get_json(force=True)

        # Return an error if no parameters are provided
        if not parameters:
            return {"error": "No parameters provided"}, 400

        # Check for required parameters and return an error if any are missing
        for param in ['number_of_questions', 'theme', 'country', 'format', 'difficulty', 'vibe', 'custom_request']:
            if param not in parameters:
                return {"error": f"Missing parameter: {param}"}, 400

        # Generate a prompt based on the provided parameters
        prompt = build_prompt(parameters)

        # Make a request to the OpenAI API with the generated prompt
        response = openai.Completion.create(engine="text-davinci-002", prompt=prompt, max_tokens=1000)

        # Process and return the OpenAI API response
        return {"result": response['choices'][0]['text'].strip()}

    # Handle any exceptions that arise and return an error message
    except OpenAIError as oai_error:
        return {"error": f"OpenAI Error: {str(oai_error)}"}, 500
    except ValueError as ve:
        return {"error": f"Value Error: {str(ve)}"}, 400
    except Exception as e:
        return {"error": f"General Error: {str(e)}"}, 500

# Run the Flask app if this script is executed directly
if __name__ == '__main__':
    app.run(port=5000, debug=True)
