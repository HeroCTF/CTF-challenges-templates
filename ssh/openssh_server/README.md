# OpenSSH Server

## Installation

```bash
$ docker build . -t openssh-server
$ docker run -it --rm -p 2222:22 openssh-server
$ ssh player@localhost -p 2222
player@localhost's password: password123

Welcome on my SSH server !

player@1c8f2b4cec52:~$ id
uid=1000(player) gid=1000(player) groups=1000(player)
player@1c8f2b4cec52:~$ cat note.txt
Hello player !
```