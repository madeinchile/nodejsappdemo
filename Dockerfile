FROM node:current-slim
EXPOSE 3000
RUN mkdir /app
WORKDIR /app
RUN adduser --disabled-password app
COPY . /app
RUN chown -R app:app /app
RUN npm install
CMD [ "node", "app.js" ]
