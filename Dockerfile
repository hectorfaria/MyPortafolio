FROM node:10.12.0
WORKDIR /var/www
RUN npm install --quiet -g node-gyp gatsby-cli
COPY package.json /var/www/
RUN yarn install && yarn cache clean
COPY . /var/www/
CMD ["npm", "run", "start"]
EXPOSE 8000