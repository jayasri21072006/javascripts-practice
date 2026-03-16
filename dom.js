<h1 id="one">
hello world
</h1>
<button onclick="change()"> change</button>-----event handler onclick usedd to change the text of the h1

<script>
   var para=document.getElementById("one")
   console.log(para.textContent)
   function change(){
    para.textContent="bye"
   }
   
</script>


<input id="a" value="20">
<input id="b" value="30">
<button onclick="result()"> change</button>
<p id="r">result</p>

<script>
   var bo1=document.getElementById("a")
   var bo2=document.getElementById("b")
   var res=document.getElementById("r")

   function result(){
    bo1.textContent=bo1.value
      bo2.textContent=bo2.value
      res.textContent=Number(bo1.value)+Number(bo2.value)
      return res.textContent
   }
   
</script>





----random functions 



var a=Math.random()
console.log(a)


var a=Math.random()

console.log(Math.floor(a*17))
