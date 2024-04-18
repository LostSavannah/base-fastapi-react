import os

host = os.environ.get("API_HOST")
port = int(os.environ.get("API_PORT"))

os.system(f"uvicorn index:app --host={host} --port={port} --reload")