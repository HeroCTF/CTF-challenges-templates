# Netcat Python

## Installation

```bash
$ docker build . -t netcat-python
$ docker run -it --rm -p 8000:8000 netcat-python
$ nc localhost 8000
Hello world !
b'\x00\x03\x02\x00\x03\x02\x00\x03\x02\x00\x03\x02'
uid=1000(player) gid=1000(player) groups=1000(player)

What's your name ? xanhacks
Bye xanhacks !
```