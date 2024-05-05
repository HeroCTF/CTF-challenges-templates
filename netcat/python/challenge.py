#!/usr/bin/env python3
from os import popen


if __name__ == "__main__":
    print(popen("id").read())
    
    name = input("What's your name ? ")
    print(f"Bye {name} !")
