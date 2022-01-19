FROM debian:11

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssh-server \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN adduser --disabled-password --gecos "" player \
    && /bin/bash -c 'echo "player:password123" | chpasswd'

COPY motd /etc/motd
COPY note.txt /home/player/

RUN mkdir -m0755 /var/run/sshd \
    && chmod a-x /etc/update-motd.d/*

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]