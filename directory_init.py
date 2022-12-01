import os
import requests

years = range(2015,2022)
days  = range(1,26)

with open('session', 'r') as file:
  cookies = {'session': file.read().strip()}

for year in years:
  year = str(year)
  if not os.path.isdir(year):
    os.mkdir(year)
  for day in days:
    if not os.path.isdir('{year}/day{day}'.format(year=year, day=day)):
      os.mkdir('{year}/day{day}'.format(year=year, day=day))
      f = open('{year}/day{day}/day{day}.js'.format(year=year, day=day), 'x')
      f.write("import { readFileSync } from \"fs\";\n")
      f.write("const lines = fs.readFileSync('input', 'utf-8').split('\\n')")
      f.close()
      r = requests.get('https://adventofcode.com/{year}/day/{day}/input'.format(year=year, day=day), cookies=cookies)
      open('{year}/day{day}/input'.format(year=year, day=day), 'wb').write(r.content)
      t = open('{year}/day{day}/input-test'.format(year=year, day=day), 'x')
      t.close()
  