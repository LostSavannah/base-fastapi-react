import os 

from fastapi import FastAPI
from internal.http import cors, spa

from routers import about

directory = os.environ.get("API_STATIC")

app = FastAPI() 
#Configuring cors
app.middleware("http")(cors())

#Including routers
app.include_router(about.router, prefix="/about", tags=["About"])

#Mounting spa static
app.mount("/", spa(directory), name="static")

if __name__ == '__main__':
    import uvicorn
    try:
        uvicorn.run(
            app, 
            host=os.getenv("API_HOST"), 
            port=int(os.getenv("API_PORT")))
    except KeyboardInterrupt:
        exit(0)