FROM node:7.5

# 设置个时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

ADD package.json /app/
RUN npm install

ADD . /app

EXPOSE 3000

#CMD []
ENTRYPOINT ["npm", "start"]