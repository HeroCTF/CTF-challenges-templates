FROM python:3.10-bullseye

WORKDIR /challenge

COPY ./challenge.py .
COPY ./entrypoint.sh .
COPY ./requirements.txt .

RUN apt-get update \
    && apt-get -y --no-install-recommends install socat git libssl-dev libffi-dev build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && python3 -m pip install --no-cache-dir -r requirements.txt

RUN groupadd player \
    && useradd -m -d /challenge -g player player \
    && chown -R player:player /challenge/ \
    && chmod -R 755 /challenge/

ENV LISTEN_PORT 8000

EXPOSE 8000
ENTRYPOINT ["./entrypoint.sh"]
