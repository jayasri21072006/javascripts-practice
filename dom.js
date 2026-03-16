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
