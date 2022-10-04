currfunc = ''
isFunc = false
title = ''
document.body.innerHTML += '<canvas id="edit"></canvas>'
document.getElementById('edit').style.width = '100%'
context = document.getElementById('edit').getContext('2d')
funcs = {
    'log':function(...str){ //Like Print in Python
        retstr = ''
        for(i of str){
            retstr += i + '\n'
        }        
        console.log(retstr)
    },
    'alert':function(...str){ //Like Print in Python
        retstr = ''
        for(i of str){
            retstr += i + '\n'
        }        
        alert(retstr)
    },
    'var':function(name,value){ //state name and use operator type
        variables[name] = value
    },
    'func':function(name){ //State function's name. Then, enter more commands and call 'endfunc' when finished
        isFunc = true;
        title=name
    },
    'runfunc':function(name){ //Run a function
        compile(funcs.def[name])
    },
    'if':function(cond,name){ //If something is true, run a function
        if(Boolean(cond) == true){
            compile(funcs.def[name])
        }
    },
    'loop':function(iter,name){ //Loop a function iter amount of times
        for(var i = 0;i < iter;i++){
            compile(funcs.def[name])
        }
    },
    'frect':function(x,y,w,h,fill){ //Draw a filled rectangle (use # but not #| for a hex color)
        context.fillStyle = fill
        context.fillRect(x,y,w,h)
    },
    'flrect':function(p,d,fill){ //Draw a filled rectangle, but the position and dimensions are a list
        context.fillStyle = fill
        context.fillRect(...p,...d)
    },
    'img':function(x,y,url,scale){ //Draw an image (note:don't include https:// in the url, it will break the code)
        var img = new Image()
        img.setAttribute('src','https://' + url)
        context.drawImage(img,x,y,img.width*scale,img.height*scale)
    },
    'limg':function(p,url,scale){ //Draw an image, but a list
        var img = new Image()
        img.setAttribute('src','https://' + url)
        context.drawImage(img,...p,img.width*scale,img.height*scale)
    },
    'keybind':function(key,name){
        document.onkeydown = function(e){
            if(e.key == key){
                compile(funcs.def[name])
            }
        }
    },
    'int':function(ms,name){
        setInterval(function(){
            compile(funcs.def[name])
        },ms)
    },
    def:{ 

    }

}
function compile(str){
    var line = str.split('\n')
    for(let i of line){
        if(isFunc == true){
            if(i == 'endfunc'){
                isFunc = false;
                funcs.def[title] = currfunc.slice(0,currfunc.length-1)
                currfunc = ''
            }else{
                currfunc += i
                currfunc += '\n'
            }
        }else{
            var cmd = i.split(':')
            var args = cmd[1].split(';')
            for(let j in args){
                if(args[j].indexOf('|') > -1){
                    var parts = args[j].split('|')
                    var stuff = parts[1].split(',')
                    for(let k in stuff){
                        if(stuff[k][0] == '{'){
                            stuff[k] = variables[stuff[k].slice(1,args[j].length)]
                        }
                    }
                    args[j] = types[parts[0]](...stuff)
                } else if(args[j][0] == '{'){
                    args[j] = variables[args[j].slice(1,args[j].length)]
                }
            }
            funcs[cmd[0].toLowerCase()](...args)
        }
    }
    
}
// 2 biggest problems
// Order of operations (insignificant)
//True-false
types = {
    '+':function(...nums){ //Add any amount of numbers
        sum = 0;
        for(var i of nums){
            sum += Number(i)
        }
        return sum
    },
    '-':function(...nums){ //Subtract any amount of numbers(first number) is the one that gets subtracted from
        var big_num = Number(nums[0])*2
        for(var i of nums){
            big_num -= Number(i)
        }
        return big_num
    },
    '*':function(...nums){ // Multiply any amount of numbers
        prod = 1;
        for(var i of nums){
            prod *= Number(i)
        }
        return prod
    },
    '/':function(...nums){ // Divide any amount of numbers (first number is the one that gets divided)
        var quot = Number(nums[0])**2
        for(i of nums){
            quot /= Number(i)
        }
        return quot
    },
    '%':function(a,b){ // Find the remainder of a/b
        return Number(a)%Number(b)
    },
    '//':function(...nums){ //Divide any amount, but the answer is rounded
        var quot = Number(nums[0])**2
        for(i of nums){
            quot = quot/Number(i)
        }
        return Math.round(quot)
    },
    '^':function(a,b){ //Put a number to the power of another
        return Math.pow(Number(a),Number(b))
    },
    '+[':function(a,...args){ //Add any amount of lists
        for(var i of args){
            a.push(...i)
        }
        return a
    },
    '`':function(str){ //Create a string
        return `${str}`
    },
    '#':function(a){ //Create a number
        return Number(a)
    },
    '!':function(a){
        if(a == 'true'){
            return true
        }else if(a == 'false'){
            return false
        }else{
            return undefined
        }
    },
    '#<':function(...list){ //Create a number list
        var retarr = []
        for(i of list){
            retarr.push(Number(i))
        }
        return retarr
    },
    '`<':function(...list){ //Create a string list
        return list
    },
    '!<':function(...bools){
        newarr = []
        for(var i of bools){
            newarr.push(this['!'](i))
        }
        return newarr
    },
    
    '`*':function(str,num){ //Dupilcate strings
        retstr = ''
        for(var i = 0;i<Number(num);i++){
            retstr += str
        }
        return retstr
    },
    '~':function(...str){ // Add any amount of strings
        var retstr = ''
        return retstr.concat(...str)
    },
    '?':function(quest){ //Prompt an input
        return prompt(quest)
    },
   
    '=':function(...items){ //Check if n values are equal
        for(i of items){
            if(items[0] != i){
                return false
            }
        }
        return true
    },
    'x':function(cond){ //Check if one value is not equal to the other
        return cond != true
    },
    '>':function(a,b){ //Check if a > b
        return a > b
    },
    '&':function(...cond){
        var state = true
        for(var i of cond){
            state = state && i
        }
        return state
    },
    'v':function(...cond){
        var state = cond[0]
        for(var i of cond){
            state = state || i
        }
        return state
    },
    '#?':function(l,h,s=1){ //Make a random number
        return Math.round((Number(l)+Math.random()*(Number(h)-Number(l)))/Number(s))*Number(s)
    },
    'E':function(list,index){ //Get an element from a list
        return list[index]
    },
    'L':function(list){ //Get the length of a list or string
        return list.length
    },
    '+<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['+'](...holdarr))
        }
        return newarr
    },
    '-<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['-'](...holdarr))
        }
        return newarr
    },
    '*<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['*'](...holdarr))
        }
        return newarr
    },
    '/<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['/'](...holdarr))
        }
        return newarr
    },
    '~<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['~'](...holdarr))
        }
        return newarr
    },
    '=<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['='](...holdarr))
        }
        return newarr
    },
    '&<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['&'](...holdarr))
        }
        return newarr
    },
    'v<':function(...arr){
        newarr = [];
        for(i in arr[0]){
            holdarr = []
            for(j in arr){
                holdarr.push(arr[j][i])
            }
            newarr.push(this['v'](...holdarr))
        }
        return newarr
    },
    '+(':function(arr){
        return this['+'](...arr)
    },
    '-(':function(arr){
        return this['-'](...arr)
    },
    '*(':function(arr){
        return this['*'](...arr)
    },
    '/(':function(arr){
        return this['/'](...arr)
    },
    '~(':function(arr){
        return this['~'](...arr)
    },
    '=(':function(arr){
        return this['='](...arr)
    },
    '&(':function(arr){
        return this['&'](...arr)
    },
    'v(':function(arr){
        return this['v'](...arr)
    }
}

variables = {

}
//----
compile('var:x;`<|a,b,c,d')
compile('var:y;`<|a,b,c,d')
compile('var:z;`<|x,k,c,d')
compile('var:a;#<|1,2,3,4')
compile('var:b;#<|1,2,3,4,5')
compile('var:mike;=|1,1,1')
compile('var:eagle;=|1,1,2,1')
compile('var:bob;=|1,1,1,1')
compile('var:amigood;!|true')
compile('log:=<|{x,{y')
compile('log:=<|{x,{y,{z')
compile('log:~(|{x')
compile('log:~<|{x,{y,{z')
compile('log:+<|{a,{b')
compile('log:&|{mike,{eagle,{bob')
compile('log:v|{mike,{eagle,{bob')
compile('var:isit;!<|true,true,false,false')
compile('var:lies;!<|false,false,false,false')
compile('var:honest;!<|true,true,true,true')
compile('log:=(|{isit;=(|{lies;=(|{honest;---;&(|{isit;&(|{lies;&(|{honest;---;v(|{isit;v(|{lies;v(|{honest')
compile('log:x|{amigood')
compile('log:&<|{isit,{honest;&<|{isit,{lies;&<|{lies,{honest')
compile('log:v<|{isit,{honest;v<|{isit,{lies;v<|{lies,{honest')
compile('log:~|abcd,efgh,ijkl')