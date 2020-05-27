FROM node:current-slim
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN adduser --disabled-password app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app
RUN chown -R app:app /usr/src/app
EXPOSE 3000
CMD [ "node", "app.js" ]
