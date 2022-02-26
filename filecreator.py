import os
if os.path.isfile('index.html'):
    print("index.html already exists")
    file=open("index.html","a")
    file.write("\nthere was an attempt to create a new index in this folder")
else:
    file=open("index.html","x")
    text='''<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <script src="script.js"></script>
</body>
</html>

'''
    file.write(text)

if os.path.isfile("script.js"):
    print("script.js already exists")
    scriptJS=open("script.js","a")
    scriptJS.write("\nthere was an attempt to create a new script.js in this directory")
else:
    scriptJS=open("script.js","x")
    
if os.path.isfile("style.css"):
    print("style.css already exists")
    styleCss=open("style.css","a")
    styleCss.write("\nthere was an attempt to create a new style.css in this directory")
else:
    styleCSS=open("style.css","x")

    print(path)



