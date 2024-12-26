<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ruby vs JS</title>
    <style>
        .wrapper {
            display: flex;
            flex-direction: row;
        }
        .ruby {
            padding: 10px;
            border: 1px solid red;
        }
        .js {
            padding: 10px;
            border: 1px solid blue;
        }
    </style>
</head>
<body>

<div class="wrapper">
  <div class="ruby">Ruby</div>
  <div class="js">JS</div>
</div>

<pre>
# JS
function myFunction1(a,b) {
 return a * b
}
console.log(myFunction1(3,5))   // 15
# Ruby
def myMethod1 a,b
  a * b
end
p myMethod1 3,5             # 15
</pre>

<!-- Добавьте остальные блоки кода аналогично -->

</body>
</html>
