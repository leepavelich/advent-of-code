import sys
import os

if len(sys.argv) != 2:
    print('Please enter a single year')
    sys.exit()

year = sys.argv[1]
days = range(1, 26)

if not os.path.isdir(year):
    os.mkdir(year)
for day in days:
    if not os.path.isdir('{year}/day{day}'.format(year=year, day=day)):
        os.mkdir('{year}/day{day}'.format(year=year, day=day))
        f = open(
            '{year}/day{day}/day{day}.js'.format(year=year, day=day), 'x')
        f.write("import { readFileSync } from \"fs\";\n")
        f.write("const lines = readFileSync('input', 'utf-8').split('\\n')")
        f.close()
