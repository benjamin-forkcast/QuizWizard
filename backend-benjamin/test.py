import openai
from app import build_prompt
import os
from dotenv import load_dotenv
load_dotenv()

# Fetch the OpenAI API key from environment variables, also check that it exists
openai_api_key = os.getenv('OPENAI_API_KEY')
if not openai_api_key:
    raise ValueError("The OPENAI_API_KEY environment variable is not set!")
openai.api_key = openai_api_key

# Mock parameters
mock_parameters = {
    'number_pythoof_questions': '5',
    'theme': 'fruit',
    'country': 'US',
    'format': 'multiple choice',
    'difficulty': 'easy',
    'vibe': 'humorous',
    'custom_request': 'Include a question about apples'
}

# Generate prompt by calling the build_prompt function from the main app
prompt = build_prompt(mock_parameters)

# Request a quiz from OpenAI
response = openai.Completion.create(engine="text-davinci-002", prompt=prompt, max_tokens=1000)

# Print the quiz result
print(response['choices'][0]['text'].strip())

# You can now manually inspect the quiz to see if it's what you expect