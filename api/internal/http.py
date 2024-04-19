from fastapi import Request, Response
from fastapi.datastructures import Headers
from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException

def cors(
    origin: str = "*",
    methods: str =  "GET, POST, OPTIONS, PUT, DELETE, PATCH",
    headers: str = "*"
):
    async def inner(request:Request, call_next):
        response:Response = Response() if request.method == "OPTIONS" else await call_next(request)
        response.headers["Access-Control-Allow-Origin"] = origin
        response.headers["Access-Control-Allow-Methods"] = methods
        response.headers["Access-Control-Allow-Headers"] = headers
        return response
    return inner

def spa(directory:str, html:bool = True):
    return SPAStaticFiles(directory=directory, html=html)

class SPAStaticFiles(StaticFiles):
    
    async def get_response(self, path: str, scope) -> Response:
        try:
            response = await super().get_response(path, scope)
            if response.status_code == 404:
                raise Exception('UM SIRI')
            return response
        except HTTPException as e:
            if e.status_code == 404:
                return await super().get_response('index.html', scope)
            else:
                raise e