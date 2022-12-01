import os
import requests

with open('../../session', 'r') as file:
    cookies = {'session': file.read().strip()}

cwd = os.getcwd().split('/')

day = cwd[-1].lstrip('day')
year = cwd[-2]

r = requests.get(
    'https://adventofcode.com/{year}/day/{day}/input'
    .format(year=year, day=day), cookies=cookies
)

open('input'
     .format(year=year, day=day), 'wb').write(r.content)

t = open('input-test'.format(year=year, day=day), 'x')
t.close()
