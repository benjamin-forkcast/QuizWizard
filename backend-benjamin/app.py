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
    2. Theme - what topic or topics should be included in the  quiz. All questions should not necessarily be pure trivia about the topic, but it can be interpreted a bit more loosely as well. For example, if the theme is fruit it could be fun to include a question about the company "Apple" too.
    3. Country - to which country does the audience belong? This is to ensure that the questions are relevant to the crowd. If the theme is sports, an Indian audience might be interested in questions about cricket, while these would be far too difficult for a Norwegian audience. Global is also an option here. Note that not all questions must be specific for a certain country.
    4. Format - what type of questions should be included? There are three options which can also be mixed, even within a single quiz: 1/X/2 (provide three alternatives referred to as 1, X, or 2 out of which one is correct), estimations (estimate a number, quantity, year etc. and points are awarded to the nearest answers), and plain trivia questions where alternatives are not presented. It is up to you to mix between the requested formats and to choose formats which suit the specific questions you include.
    5. Difficulty - how hard should the questions be? The options are easy, medium, hard, and extreme. The easy questions should be challenging mostly for kids. Reasonable examples could be to ask  a general American audience about the capital of France or the weight of polar bears where the alternatives are 35, 350, or 3500 kilos. The medium questions should be manageable for most adults, but could be challenging if you don't know the specific topic. Examples for  a general American audience could be the capital of Poland or to name three ingredients in pancakes. Hard questions are challenging for most adults. Examples for  a general American audience could be the capital of Ethiopia or what the ice hockey team from Washington DC is called. Extreme should be challenging even for those with an interest in the topic in question. Examples for a general American audience could be the capital of Mali or naming three Chinese dynasties.
    6. Vibe - with which tone should the questions be asked? The options are funny, formal, or educational.
    7. Custom request - is there anything else that the user wants to incorporate? This is a free text option which could be to "include references to Star Wars" or to "tailor it for using at a graduation party". For example, the theme can be mathematics, and if the user requests references to the Lord of the Rings you can ask the user to estimate the height of Saurons tower based on an angle and a distance from Mount Doom.
    Remember to provide answers to all questions.
    I would also like you to ensure that all questions have a distinct answer. Before providing a quiz, please double check all questions and answers. Please also ensure that all alternatives make sense, which means that those that are not correct are evidently wrong without being unreasonable. For example, if you ask for the first female prime minister of the UK, do not provide male names as examples.
    Even very hard questions should be easy to answer if you know the answer. For example, not even a marine biologist could probably answer how many specimen there are of a specific clam in a specific region, but better question could be to ask about the latin name of a certain fish (easy to answer if you know it, and some do, while otherwise difficult to guess).
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

    # Combine the base prompt and the request into one full prompt
    full_prompt = f"{base_prompt}{request_prompt}"

    return full_prompt