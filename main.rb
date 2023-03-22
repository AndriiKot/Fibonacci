def myMethod1 a,b
  a * b
end
p myMethod1(3,5)               # 15



def myMethod2(a,b) = a * b
p myMethod2(8,4)               # 2

def myMethod3(a,b) = a + b
#p myMethod3()                 wrong number of arguments(given 0 , exended 2)

def myMethod4(a = nil,b = a) = (return a + b if (a && b); 0 / 0.0)
p myMethod4                    # NaN     imitation js function   !!!

def myMethod5(a = nil,b = a) = proc{ |a,b| a - b if (a && b)}   # imitation js function
x = myMethod5                 # Proc
z = x[15,5]
p z                           # 10


z = x                         # Proc
p z[]                         # nil
p z[23,16]                    # 7
                   

