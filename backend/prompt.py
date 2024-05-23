# 1. Vectorise the response csv data
# 2. Do similarity search
# 3. Setup LLMChain & prompts
# 4. Retrieval augumented generation

import os
# Authorization: Bearer OPENAI_API_KEY
os.environ['OPENAI_API_KEY'] = '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'

from langchain.prompts import PromptTemplate
# from langchain.chat_models import ChatOpenAI
# from langchain_openai import ChatOpenAI
from langchain_community.chat_models.openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_core.prompts import ChatPromptTemplate
# from openai import ChatCompletion
from langchain.chains import LLMChain
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
print(f"API Key Loaded: {api_key}")

# 3. Setup LLMChain & prompts
llm = ChatOpenAI(model="gpt-3.5-turbo-0125", temperature=0)


# print(response)

template = """
You are a world class business development representative. 
I will share a prospect's message with you and you will give me the best answer that 
I should send to this prospect based on past best practies, 
and you will follow ALL of the rules below:

1/ Response should be very similar or even identical to the past best practies, 
in terms of length, ton of voice, logical arguments and other details

2/ If the best practice are irrelevant, then try to mimic the style of the best practice to prospect's message

Below is a message I received from the prospect:
{message}

Please write the best response that I should send to this prospect:
"""

prompt = PromptTemplate(input_variables=["message"], template=template)

chain = LLMChain(prompt=prompt,llm=llm)

# 4. Retrieval augmented generation
def generate_response(message):
    response = chain.run(message=message)
    return response

# {'error': {'message': 'You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.', 'type': 'insufficient_quota', 'param': None, 'code': 'insufficient_quota'}}


# 5. Build an app with streamlit
def main():

    result = generate_response("Tell me a little bit more about data scientist job")
    print(result)


if __name__ == "__main__":
    main()
