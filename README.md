# Ruby-methods-VS-Js-functions
Ruby methods VSJs functio

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
