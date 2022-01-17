#!/usr/bin/env python3
from pwn import xor
from os import popen


if __name__ == "__main__":
    print("Hello world !")
    print(xor(b"abc", b"aaaaaaaaaaaa"))

    print(popen("id").read())
    
    name = input("What's your name ? ")
    print(f"Bye {name} !")
