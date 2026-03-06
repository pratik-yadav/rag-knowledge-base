from fastapi import FastAPI
from src.utils.db import Base, engine
from src.tasks.models import TaskModel
from src.tasks.router import task_routes
from src.user.router import user_routes

Base.metadata.create_all(engine)

app = FastAPI()
app.include_router(task_routes)
app.include_router(user_routes)

# import os
# from dotenv import load_dotenv
# from langchain_groq import ChatGroq

# load_dotenv()

# llm = ChatGroq(
#     model="llama-3.3-70b-versatile",
#     temperature=0
# )

# response = llm.invoke("Who was the winner of IPL 2024?")

# print(response.content)