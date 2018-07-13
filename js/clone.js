$(document).ready(function(){
$("#frite").click(function(){
$("#newfrite").toggle(1000)
$("#newfrite").css("display","block")})
$("#cheese").click(function()
{   $("#newcheese").toggle(1000)
	$("#newcheese").css("display","block")})
$("#burger").click(function()
{   $("#newburger").toggle(1000)
	$("#newburger").css("display","block")})



 $("#marketing").hover(function(){
        $("#marketing").css("transform","translate(100px,0)");
        $("#marketing").css("opacity", 1);

    });
     $("#development").hover(function(){
        $("#development").css("transform","translate(100px,0)");
        $("#development").css("opacity", 1);

    });
         $("#design").hover(function(){
        $("#design").css("transform","translate(100px,0)");
        $("#design").css("opacity", 1);

    });

            $("#galleryimg1").click(function(){
         	var src=document.getElementById("galleryimg1").src
         	document.getElementById("new").src=src
         	document.getElementById("affich").style.display="block"
         	         	document.getElementById("hidden").style.display="none"

         	$("#para1").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. Aliquam mattis pharetra sollicitudin. Nunc lectus turpis, sagittis quis justo porta, auctor fringilla elit. Fusce lobortis dictum sapien, a blandit arcu fringilla ornare.")
             $("#para2").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium.")
         	 $("#para3").html("Lorem ipsum dolor")
         	})
            $("#galleryimg2").click(function(){
         	var src=document.getElementById("galleryimg2").src
         	document.getElementById("new").src=src
         	document.getElementById("affich").style.display="block"
         	         	document.getElementById("hidden").style.display="none"

         		$("#para1").html("Aliquam mattis pharetra sollicitudin. Nunc lectus turpis, sagittis quis justo porta, auctor fringilla elit. Fusce lobortis dictum sapien, a blandit arcu fringilla ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. ")
             $("#para2").html("consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. Lorem ipsum dolor sit amet, ")
         	 $("#para3").html("dolor Lorem ipsum ")
         	})
            $("#galleryimg3").click(function(){
         	var src=document.getElementById("galleryimg3").src
         	document.getElementById("new").src=src
         	document.getElementById("affich").style.display="block"
         	         	document.getElementById("hidden").style.display="none"

         	$("#para1").html(" Pellentesque mattis ultrices odio at pretium. Lorem ipsum dolor sit amet justo porta, auctor fringilla elit. Fusce lobortis dictum sapien, a blandit arcu fringilla ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. ")
             $("#para2").html("que mattis ultrices odio at pretium. Loremis ultrices odio at pretium. Lorem ipsum dolor sit amet, ")
         	 $("#para3").html("dolor Lorem ipsum ")
         	})
            $("#galleryimg4").click(function(){
         	var src=document.getElementById("galleryimg4").src
         	document.getElementById("new").src=src
         	document.getElementById("affich").style.display="block"
         	         	document.getElementById("hidden").style.display="none"

         	$("#para1").html("Aliquam mattis pharetra sollicitudin. Nonsectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. Lorem ipsum dolor sit amet,. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. ")
             $("#para2").html("consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. Lorem ipsum dolor sit amet, ")
         	 $("#para3").html("tetur adipiscing elit. Pellentesque mattis ultr ")
         	})
            $("#galleryimg5").click(function(){
         	var src=document.getElementById("galleryimg5").src
         	document.getElementById("new").src=src
         	document.getElementById("affich").style.display="block"
         	         	document.getElementById("hidden").style.display="none"

         	$("#para1").html("Aliquam mattis pharetra sollicitudin. Nunc lectus turpis, sagittis quis justo porta, auctor fringilla elit. Fusce lobortis dictum sapien, a blandit arcu fringilla ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. ")
             $("#para2").html("consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. Lorem ipsum dolor sit amet, ")
         	 $("#para3").html("dolor Lorem ipsum ")
         	})
         	$("#galleryimg6").click(function(){
         	var src=document.getElementById("galleryimg6").src
         	document.getElementById("new").src=src
         	document.getElementById("affich").style.display="block"
         	document.getElementById("hidden").style.display="none"

         	$("#para1").html("consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. Lorem ipsum dolor sit amet,. Fusce lobortis dictum sapien, a blandit arcu fringilla ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis ultrices odio at pretium. ")
             $("#para2").html("Fusce lobortis dictum sapien, a blandit arcu fringilla ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
         	 $("#para3").html("consectetur adipiscing elit ")
         	})
         	$("#map").click(function(){
         		
         	         	document.getElementById("affich").style.display="none"
         	         	document.getElementById("hidden").style.display="block"


         	})
})