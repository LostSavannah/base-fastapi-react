FROM node AS frontend
WORKDIR /app
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN echo VITE_API_BASE_URL=${API_BASE_URL} > .env
RUN echo VITE_BASENAME=${API_BASE_URL} >> .env
RUN npm i
COPY ./frontend .
ARG API_BASE_URL=http://localhost:8080
ARG BASENAME=/
RUN npm run build

FROM python:latest AS main
WORKDIR /app
COPY ./api/requirements.txt ./api/
RUN pip install -r ./api/requirements.txt
COPY --from=frontend /app/dist ./frontend
COPY ./api ./api

ENV API_HOST=0.0.0.0
ENV API_PORT=8080
ENV API_STATIC=/app/frontend

EXPOSE 8080

CMD ["python", "/app/api/index.py"]