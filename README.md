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
### If:*cond*,*name*
If *cond* is true, then the function "name" will run
### Loop:*iter*,*name*
Loops the function *name* *iter* amount of times
### Int:*ms*,*name*
Runs the function *name* at an interval of *ms* milliseconds
### Img:*x*,*y*,*url*,*scale*
Makes an image
### limg:*pos*,*url*,*scale*
Makes an image, but the position is a list
### keybind: *key*, *func*
Binds a key to a function
## Operators
### +|*a1*,*a2*...*an*
Adds all of the arguments together
### -|*a1*,*a2*...*an*
Subtracts the rest of the arguments from the fisrt argument
### *|*a1*,*a2*...*an*
Multiplies all of the arguments together
### /|*a1*,*a2*...*an*
Divides the rest of the arguments from the fisrt argument
### //|*a1*,*a2*...*an*
Divides the rest of the arguments from the fisrt argument,and rounds the final answer
### %|*a*,*b*
Finds the remainder of a/b
### ^|*a*,*b*
Returns *a*^*b*
### +[|*a1*,*a2*...*an*
Concatanates the lists
### `|*str*
Creates a string. **Note: You don't have to do this to make a string.**
### #<|*a1*,*a2*...*an*
Makes a list filled with numbers
### `<|*a1*,*a2*...*an*
Makes a list filled with strings
### #|*a*
Makes a string into a number
### `*|*str*,*num*
Duplicates *str* *num* times
### `+|*str1*,*str2*,...*strn*
Adds all of the strings
### ?|*question*
Returns a prompt with the question *question*
### L|*list*
Returns the length of the list or string *list*
### =|*a*,*b*
Checks if *a* is equal to *b*
### x|*a*,*b*
Checks if *a* is not equal to *b*
### >|*a*,*b*
Checks if *a* is greater than *b*
### #?|*l*,*h*,*s*
Returns a random number between *l* and *h* rounded to the nearest *s*
### E|*list*,*index*
Returns the elements at index *index* in the list *list*
