# Ruby-methods-VS-Js-functions
Ruby methods VSJs functio

<div class="wrapper">
  <div class="ruby">
   ```ruby
def myMethod1(a,b) = a * b
```</p>
</div>

<div class="js">
```node
function myFunction1(a,b) {
 return a * b
}
```</p>
</div>

#JS
```node
function myFunction1(a,b) {
 return a * b
}

console.log(myFunction1(3,5))   // 15
```
#Ruby
```ruby
def myMethod1 a,b
  a * b
end

p myMythods1 3,5             # 15
```

#JS
```node
function myFunction2(a,b) {return a / b}

console.log(8,4)                  // 2
```

#Ruby
```ruby
def myMethod2(a,b) = a / b

p myMethod1 8,4                 # 2
```
____
#JS
```node
function myFunction3(a,b) {return a + b}
console.log(myFunction3())                 // NaN !!!
```
#Ruby
```ruby
def myMethod3(a,b) = a + b
p myMethod3                                # wrong number of arguments(given 0 , exended 2)
def myMethod3(a = nil,b = a) = (return a + b if (a && b); 0 / 0.0)
p myMethod3                 # NaN         imitation js function   !!!
```
____
#JS
```node
let x = function(a,b){return a - b}
let y = x(15,5)
console.log(y)                    // 10
```
#Ruby
```ruby

def myMethod5(a = nil,b = a) = proc{ |a,b| a - b if (a && b)}   # imitation js function
x = myMethod5                 # Proc
z = x[15,5]
p z                           # 10


z = x                         # Proc
p z[]                         # nil
p z[23,16]                    # 7
```


