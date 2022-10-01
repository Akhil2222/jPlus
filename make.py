import os
server = open('server.js','w')

file_name = input('Filename:') + '.jpl'
with open(file_name,'x') as a:
    print('Your file is created')
print(file_name)
server.write(f'fetch("{file_name}").then(response => response.text()).then(data => compile(data))')
