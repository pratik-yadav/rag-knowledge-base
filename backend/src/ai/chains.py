from langchain.prompts import PromptTemplate
from src.ai.groq_client import llm

prompt = PromptTemplate(
    template="Answer this question: {question}",
    input_variables=["question"]
)

def ask_llm(question: str):
    chain = prompt | llm
    return chain.invoke({"question": question})