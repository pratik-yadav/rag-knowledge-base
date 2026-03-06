from pydantic import BaseModel

class UserSchema(BaseModel):
    name : str
    password : str
    email : str

class UserResponseSchema(BaseModel):
    name : str
    email : str
    id: int

class LoginSchema(BaseModel):
    password : str
    email : str

class LoginResponseSchema(BaseModel):
    token: str
    user: UserResponseSchema