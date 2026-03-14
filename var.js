var a=10
var b=20
console.log(a+b)


30

var can be declared in 3 ways:

--var--global scope/function scope
--let-- local scope--block scope
-const--constatnt value.


{let a=5}
console.log(a)

ERROR!
/tmp/7Jb4ZP7IFm/main.js:2
console.log(a)
            ^

ReferenceError: a is not defined
    at Object.<anonymous> (/tmp/7Jb4ZP7IFm/main.js:2:13)
    at Module._compile (node:internal/modules/cjs/loader:1706:14)
    at Object..js (node:internal/modules/cjs/loader:1839:10)
    at Module.load (node:internal/modules/cjs/loader:1441:32)
    at Function._load (node:internal/modules/cjs/loader:1263:12)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.21.1


{let a=5 
console.log(a)}


5




const week=7
week=5
console.log(week)

ERROR!
/tmp/HjBzFrheQj/main.js:2
week=5
    ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/tmp/HjBzFrheQj/main.js:2:5)
    at Module._compile (node:internal/modules/cjs/loader:1706:14)
    at Object..js (node:internal/modules/cjs/loader:1839:10)
    at Module.load (node:internal/modules/cjs/loader:1441:32)
    at Function._load (node:internal/modules/cjs/loader:1263:12)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.21.1




var price=200
var product="yamaha"
var tax=900
console.log(product)
console.log(price+tax)


var fruitname="banana"
var count=12
var price=100
var total=count*price
console.log(fruitname)
console.log(total)

banana
1200




