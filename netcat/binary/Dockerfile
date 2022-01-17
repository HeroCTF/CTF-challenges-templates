FROM alpine:3.14

WORKDIR /challenge

COPY ./challenge .
COPY ./entrypoint.sh .

RUN apk add --no-cache socat

RUN addgroup -S player \
    && adduser -g '' -h '/challenge' -s '/bin/ash' -HDSG player player \
    && chown -R player:player /challenge/ \
    && chmod -R 755 /challenge/

ENV LISTEN_PORT 8000

EXPOSE 8000
ENTRYPOINT ["./entrypoint.sh"]
