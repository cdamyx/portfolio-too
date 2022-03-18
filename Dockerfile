# build stage - note, successfully built on 14.16.1, had weird sass issue, try 14.16.0 tonight
FROM node:14.16.0-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build     

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# previously used in build stage
#FROM ubuntu
#COPY package*.json ./
#RUN apk --no-cache add --virtual native-deps \
#  g++ gcc libgcc libstdc++ linux-headers make python2 && \
#  npm install --quiet node-gyp -g &&\
#  npm install --quiet && \
#  apk del native-deps
###RUN apk add --no-cache --virtual .gyp python3 make g++
#RUN apt install nodejs
###RUN rmdir --ignore-fail-on-non-empty /app/node_modules/node-sass
#RUN rmdir --ignore-fail-on-non-empty /app/node_modules/react-scripts
#RUN npm rebuild node-sass
# apk add --update nodejs && apk add --update npm && 
#COPY . .
