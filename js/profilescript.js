$(function(){ // DON'T TOUCH ME
		 $(".abstracts1").fadeIn(); 
		 $(".abstracts2").hide(); 
		 $(".abstracts3").hide(); 
		 $(".abstracts4").hide(); 
		 $("#journalism").addClass("uppercase");
		 $("#match").hide();
		 $("#takeandadd").hide();
		 $("#industry").hide();
		 $("#gopivot").hide();

    $("#advertising").on('click',function(){
    	 $(".abstracts1").hide(); 
    	 $(".abstracts2").fadeIn(); 
		 $(".abstracts3").hide(); 
		 $(".abstracts4").hide(); 
		 $(".nav>div").removeClass("uppercase");
		 $("#advertising").addClass("uppercase");
  });

  $("#publishing").on('click',function(){
    	 $(".abstracts1").hide(); 
    	 $(".abstracts2").hide(); 
		 $(".abstracts3").fadeIn(); 
		 $(".abstracts4").hide(); 
		 $(".nav>div").removeClass("uppercase");
		 $("#publishing").addClass("uppercase");
  });


  $("#productdev").on('click',function(){
    	 $(".abstracts1").hide(); 
    	 $(".abstracts2").hide(); 
		 $(".abstracts3").hide(); 
		 $(".abstracts4").fadeIn(); 
		 $(".nav>div").removeClass("uppercase");
		 $("#productdev").addClass("uppercase");
  });


  $("#journalism").on('click',function(){
		$(".abstracts1").fadeIn(); 
    	$(".abstracts2").hide(); 
		$(".abstracts3").hide(); 
		$(".abstracts4").hide(); 
		$(".nav>div").removeClass("uppercase");
		$("#journalism").addClass("uppercase");
  });


  $("#edit").on('click',function(){
		$(".abstracts1").hide(); 
    	$(".abstracts2").hide(); 
		$(".abstracts3").hide(); 
		$(".abstracts4").hide(); 
		$(".row").hide();
		$("#match").fadeIn(); 
		$("#takeandadd").fadeIn(); 

  });

    $("#take").on("click",function(){
        window.location.href = "test.html"; 
    });

  	
   $("#add").on("click",function(){
       $("#industry").fadeIn(); 
       $("#gopivot").fadeIn(); 

    });


   $('.dropdown-menu a').click(function(){
       $('#selected').text($(this).text());

  });


    $("#gopivot").on("click",function(){
        window.location.href = "homepage.html"; 
    });


  $("#profilepage").on('click',function(){
		$(".abstracts1").fadeIn(); 
		$(".abstracts2").hide(); 
		$(".abstracts3").hide(); 
		$(".abstracts4").hide(); 
		$("#journalism").addClass("uppercase");
		$("#match").hide();
		$("#industry").hide();
		$("#gopivot").hide();
		$(".row").fadeIn();
		$("#takeandadd").hide();

  });


    $("#homepage").on("click",function(){
        window.location.href = "homepage.html"; 
    });

    $("#pivottoday").on("click",function(){
        window.location.href = "pivottoday.html"; 
    });

    $("#search").on("click",function(){
        window.location.href = "search.html"; 
    });




}); // DONT' TOUCH ME