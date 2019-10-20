FROM node:8.12
WORKDIR /app
COPY package.json /app/package.json
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . /app
CMD ["npm", "run", "serve"]
