#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'fizzBuzz' function below.
#
# The function accepts INTEGER n as parameter.
#

def fizzBuzz(n):
    # Write your code here
 
    for number in range(n):
        if number%3==0 and not number==0%5:
            print("Fizz")
        elif number%5==0 and not number%3==0:
            print("Buzz")
        elif number%3==0 and number%5==0:
            print("FizzBuzz")
        elif not number%3==0 and number%5==0:
            print(number)

if __name__ == '__main__':
 

    fizzBuzz(15)