# jPlus
## Syntax
### *Func*: *operator*|*a1*,***{var***,*a3*...*an*;*operator*|*a1*,*a2*; ... *operator*|*a1*,*a2*
No putting operators inside operators
No running operators outside of a function
Only put the needed arguments 
At The end of you code, make sure that there is no line brakes
Not case-sensitive
## How to make a .jpl file
Clone the repo, and open *make.py*. Run this file, and enter in the filename (**DO NOT INCLUDE THE FILE EXTENSTION**)

## How to run the file
Open the HTML, and run it.

# Commands
## Functions
### Frect:*x*;*y*;*w*;*h*
Makes a rectangle
### Flrect:*posarr*;*dimarr*
Makes a rectangle, but uses lists
### Log:*a1*;*a2*;...*an*
Logs arguments
### Alert:*a1*;*a2*;...*an*
Alerts arguments
### Var:*name*; *value*
Creates/sets the variable *name* with *value*
### Func:*name*
Creates/sets the function *name*. NOTE: everything between the function definition and "endfunc" is going to be in the function
### endfunc
Ends a function
### runfunc:*name*
Runs the function *name"
### If:*cond*;*name*
If *cond* is true, then the function "name" will run
### Loop:*iter*;*name*
Loops the function *name* *iter* amount of times
### Int:*ms*;*name*
Runs the function *name* at an interval of *ms* milliseconds
### Img:*x*;*y*;*url*;*scale*
Makes an image
### limg:*pos*;*url*;*scale*
Makes an image, but the position is a list
### keybind: *key*; *func*
Binds a key to a function
## Operators
## Number operations

### +|*num 1*,*num 2*...*num n*
Adds all of the arguments together
### -|*num 1*,*num 2*...*num n*
Subtracts the rest of the arguments from the fisrt argument
### \*|*num 1*,*num 2*...*num n*
Multiplies all of the arguments together
### /|*num 1*,*num 2*...*num n*
Divides the rest of the arguments from the fisrt argument
### //|*num 1*,*num 2*...*num n*
Divides the rest of the arguments from the fisrt argument,and rounds the final answer
### %|*num a*,*num b*
Finds the remainder of a/b
### ^|*num a*,*num b*
Returns *a*^*b*

## Type definition operators
### `|*str*
Creates a string/makes a string from a number/boolean. **Note: You don't have to do this to make a string.**
### #|*str*
Creates a number/makes a string/boolean into a number
### !|*str*
Makes a string into a boolean

## String operators
### `\*|*str*,*num*
Duplicates *str* *num* times
### ~|*str 1*,*str 2*,...*str n*
Adds all of the strings

## Boolean operators
### =|*a1*,*a2*...*an*
Checks if everything mentioned is equal to each other
### x|*bool*
Turns *bool* into the opposite boolean
### >|*a*,*b*
Checks if *a* is greater than *b*

## Miscellaneous Operators 
### ?|*question*
Returns a prompt with the question *question*
### #?|*l*,*h*,*s*
Returns a random number between *l* and *h* rounded to the nearest *s*

## List definition operators
### #<|*num 1*,*num 2*...*num n*
Makes a list filled with numbers
### `<|*str 1*,*str 2*...*str n*
Makes a list filled with strings
### !<|*bool 1*,*bool 2*...*bool n*
Makes a list filled with booleans

## List operators
### +[|*list 1*,*list 2*...*list n*
Concatanates the lists
### E|*list*,*index*
Returns the elements at index *index* in the list *list*
### L|*list*
Returns the length of the list or string *list*
#### ** For +, *, -, /, ~, =, &, and v, put a < to make a list that does the operation to multiple lists, like the table portays below or a ) to do that operation to every element in the array. ** 

| Lists | El 1 | El 2 | El 3 | ... | El 90 |
| ----- | ---- | ---- | ---- | --- | ---- |
| List 1 | 1    | 2    | 3    | ... | 90   |
| List 2 | 1    | 2    | 3    | ... | 90   |
| List 3 | 1    | 2    | 3    | ... | 90   |
| List 4 | 1    | 2    | 3    | ... | 90   |
|  ...  | ...  |  ... |  ... | ... | ...  |
| List 10 | 1    | 2    | 3    | ... | 90   |
|Return | 10   | 20   | 30   | ... | 900  |

Command: +<|{list 1,{list 2,{list 3, ... {list 10
