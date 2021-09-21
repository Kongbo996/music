FROM node 14.16.1
COPY . /src
WORKDIR /src
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]