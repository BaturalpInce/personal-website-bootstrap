var myFunctions = {};

$(document).ready(function () {

myFunctions.clickedBlog1 = function(){
    $(".blogno1").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
            document.getElementById("blogpreview").innerHTML = " "; //clear old picture
            document.getElementById("blogpreview").style = "display:'block'" //clear old picture
            document.getElementById("blogpreview").innerHTML = "<img src='https://picsum.photos/970/800' class='img-fluid' id='picture5'>"; //target photo

        });
        //document.getElementById("blogpreview").innerHTML = " "; //clear old picture
        //document.getElementById("blogpreview").innerHTML = "<img src='https://picsum.photos/970/800' class='img-fluid' id='picture5'>"; //target photo


        
    });
}
myFunctions.clickedBlog1();

myFunctions.clickedBlog2 = function(){
    $(".blogno2").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
        document.getElementById("blogpreview").innerHTML = " "; //clear old picture
        document.getElementById("blogpreview").style = "display:'block'" //clear old picture
        document.getElementById("blogpreview").innerHTML = "<img src='https://picsum.photos/950/800' class='img-fluid' id='picture5'>"; //target photo
        });
    });
}
myFunctions.clickedBlog2();

myFunctions.clickedBlog3 = function(){
    $(".blogno3").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
        document.getElementById("blogpreview").innerHTML = " "; //clear old picture
        document.getElementById("blogpreview").style = "display:'block'" //clear old picture
        document.getElementById("blogpreview").innerHTML = "<img src='https://picsum.photos/930/800' class='img-fluid' id='picture5'>"; //target photo
        });
    });
}
myFunctions.clickedBlog3();

myFunctions.clickedBlog4 = function(){
    $(".blogno4").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
        document.getElementById("blogpreview").innerHTML = " "; //clear old picture
        document.getElementById("blogpreview").style = "display:'block'" //clear old picture
        document.getElementById("blogpreview").innerHTML = "<img src='https://picsum.photos/910/800' class='img-fluid' id='picture5'>"; //target photo
        });
    });
}
myFunctions.clickedBlog4();




})