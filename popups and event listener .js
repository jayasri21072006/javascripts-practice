---evenlistener


<button class="btn"> click me

</button>
<script>
    var button=document.querySelector(".btn")
    button.addEventListener("click", function() {
        alert("Button clicked!");

    })
    button.addEventListener("mouseover",function(){
        alert("why hover just try:")
    })
</script>



---pop[up practice


<style>
    .overlay{
        background-color: black;
        
        width: 100%;
        height: 100%;
        position: absolute;
        top:0px;
        left:0px;
        opacity: 0.8;
        display:none

    }
    .popupbox{
        width: 40%;
        left:30%;
        height: 100px;
        background-color:white;
        position:absolute;
        border-radius: 10px;
        padding: 10px;
        z-index: index 3;
        
        display:none;
    }
</style>

<button onclick="show()">show</button>
<div class="overlay"></div>
<div class="popupbox"> 
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sunt dicta iure nulla non, ex libero magni nihil itaque ducimus vitae eligendi dolore veritatis aut inventore, totam quisquam similique deserunt!</p>
<button onclick="closeppopup()">close</button>
</div>

  
<script>
    overlaypop=document.querySelector('.overlay')
    popupboxover=document.querySelector('.popupbox')
    function show(){
        overlaypop.style.display='block'
        popupboxover.style.display='block'
    }
function closeppopup(){
    overlaypop.style.display='none'
    popupboxover.style.display='none'
}



</script>
