import os
import requests

with open('../../session', 'r') as file:
    cookies = {'session': file.read().strip()}

cwd = os.getcwd().split('/')

day = cwd[-1].lstrip('day')
year = cwd[-2]

r = requests.get(
    f'https://adventofcode.com/{year}/day/{day}/input', cookies=cookies
)

open('input', 'wb').write(r.content)

t = open('input-test', 'x')
t.close()
