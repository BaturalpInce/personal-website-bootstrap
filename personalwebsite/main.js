var myFunctions = {};

$(document).ready(function () {

myFunctions.clickedBlog1 = function(){
    $(".blogno1").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
            document.getElementById("blogpreview").innerHTML = " "; //clear old picture
            document.getElementById("blogpreview").style = "display:'block'" //clear old picture
            document.getElementById("blogpreview").innerHTML = "<div class='hover-3 hover-2 text-white'><img src='https://picsum.photos/1045/1000' class='img-fluid' id='picture5'><div class='hover-overlay'></div><div class='hover-2-content'><h3 class='hover-2-title text-uppercase font-weight-bold mb-0'> <span class='font-weight-light'>Image </span>Caption</h3><p class='hover-2-description text-uppercase' style='padding-bottom:20%; font-size:32px;'>Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p></div></div>";
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
        document.getElementById("blogpreview").innerHTML = "<div class='hover-3 hover-2 text-white'><img src='https://picsum.photos/1045/1000' class='img-fluid' id='picture5'><div class='hover-overlay'></div><div class='hover-2-content'><h3 class='hover-2-title text-uppercase font-weight-bold mb-0'> <span class='font-weight-light'>Image </span>Caption</h3><p class='hover-2-description text-uppercase' style='padding-bottom:20%; font-size:32px;'>Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p></div></div>";
        });
    });
}
myFunctions.clickedBlog2();

myFunctions.clickedBlog3 = function(){
    $(".blogno3").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
        document.getElementById("blogpreview").innerHTML = " "; //clear old picture
        document.getElementById("blogpreview").style = "display:'block'" //clear old picture
        document.getElementById("blogpreview").innerHTML = "<div class='hover-3 hover-2 text-white'><img src='https://picsum.photos/1045/1000' class='img-fluid' id='picture5'><div class='hover-overlay'></div><div class='hover-2-content'><h3 class='hover-2-title text-uppercase font-weight-bold mb-0'> <span class='font-weight-light'>Image </span>Caption</h3><p class='hover-2-description text-uppercase' style='padding-bottom:20%; font-size:32px;'>Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p></div></div>";
        });
    });
}
myFunctions.clickedBlog3();

myFunctions.clickedBlog4 = function(){
    $(".blogno4").click(function(){
        $("#blogpreview").fadeOut("fast", function(){
        document.getElementById("blogpreview").innerHTML = " "; //clear old picture
        document.getElementById("blogpreview").style = "display:'block'" //clear old picture
        document.getElementById("blogpreview").innerHTML = "<div class='hover-3 hover-2 text-white'><img src='https://picsum.photos/1045/1000' class='img-fluid' id='picture5'><div class='hover-overlay'></div><div class='hover-2-content'><h3 class='hover-2-title text-uppercase font-weight-bold mb-0'> <span class='font-weight-light'>Image </span>Caption</h3><p class='hover-2-description text-uppercase' style='padding-bottom:20%; font-size:32px;'>Lorem ipsum dolor sit amet, consectetur <br>adipisicing elit.</p></div></div>";
        });
    });
}
myFunctions.clickedBlog4();

myFunctions.hoveredBlog1 = function(){
    $(".blogno1").mouseover(function(){
        $(this).removeClass("border-dark")
        $(this).addClass("border-primary")
        });
    $(".blogno1").mouseout(function(){
        $(this).removeClass("border-primary")
        $(this).addClass("border-dark")
        });
}
myFunctions.hoveredBlog1();

myFunctions.hoveredBlog2 = function(){
    $(".blogno2").mouseover(function(){
        $(this).removeClass("border-dark")
        $(this).addClass("border-primary")
        });
    $(".blogno2").mouseout(function(){
        $(this).removeClass("border-primary")
        $(this).addClass("border-dark")
        });
}
myFunctions.hoveredBlog2();

myFunctions.hoveredBlog3 = function(){
    $(".blogno3").mouseover(function(){
        $(this).removeClass("border-dark")
        $(this).addClass("border-primary")
        });
    $(".blogno3").mouseout(function(){
        $(this).removeClass("border-primary")
        $(this).addClass("border-dark")
        });
}
myFunctions.hoveredBlog3();

myFunctions.hoveredBlog4 = function(){
    $(".blogno4").mouseover(function(){
        $(this).removeClass("border-dark")
        $(this).addClass("border-primary")
        });
    $(".blogno4").mouseout(function(){
        $(this).removeClass("border-primary")
        $(this).addClass("border-dark")
        });
}
myFunctions.hoveredBlog4();

myFunctions.hoveredBlog5 = function(){
    $("#blogpreview").mouseover(function(){
        $(this).removeClass("border-dark")
        $(this).addClass("border-primary")
        });
    $("#blogpreview").mouseout(function(){
        $(this).removeClass("border-primary")
        $(this).addClass("border-dark")
        });
}
myFunctions.hoveredBlog5();





})