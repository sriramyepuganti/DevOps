FROM ubuntu

RUN mkdir /home/app

# sets the PWD in image
WORKDIR /home/app
# copy files from host to image

COPY . .

ADD . .

# both COPY and ADD work similar for local files
# if want to download assests from third party use ADD