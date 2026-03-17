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











<center><h1>guess number</h1>
<input id="one" type=""><br>

<button onclick="check()">check</button>
<p id="result"></p>
<p id="score"> score:10</p>
</center>
<script>
var guess_no=document.getElementById("one")
var result=document.getElementById("result")
var randomnumber=Math.floor(Math.floor(Math.random()*10)+1)
var score=10
function check(){
    if (randomnumber==guess_no.value ){
        console.log("right")
        result.textContent="right"

    }
    else{
        score=score-1
        console.log("wrong")
        document.getElementById("score").textContent=" score:" + score
        result.textContent="wrong"
    }
}
</script>
   guess no game



var a=Math.random()
console.log(a)


var a=Math.random()

console.log(Math.floor(a*17))


<style>div{
    width: 200px;
    height: 200px;
    background-color: black;
    transition: 2s;
}
.widthmax{
    width: 100%;
}

</style>

<div id="box" ></div>
<center>
<button id="click" onclick="change()"></button
    </center>
<script>
    var box=document.getElementById("box")
    function change(){
        box.setAttribute("class","widthmax")

    }
</script>



css with dom 



task based:


<input id="enter" onkeyup="change()">
<h2 id="result"></h2>
<script>
    var inp=document.getElementById("enter")
    var esult=document.getElementById("result")
    function change(){
        result.textContent=inp.value

        
    }

</script>
