// get scripting

$(function(){ // DON'T TOUCH ME

    $("#start").on('click',function(){
        $("#taketest").hide(); 
        $(".jumbotron").fadeIn(); 
        $("#bar").fadeIn(); 
        $("#question").fadeIn();
        $("#industry").fadeIn();
        $(this).hide();
        $("#next").fadeIn();
        $("#bighead").hide();


    });

    $("#gopivot").on("click",function(){
        window.location.href = "main.html"; 
    });

    $(".jumbotron").hide(); 
    $("#bar").hide(); 
    $("#question").hide(); 
    $("#next").hide(); 
    $("#industry").hide();


   

    $("#skillset").hide();  
    $("#current").hide();  
    $("#expect").hide();  
    $("#wish").hide(); 
    $("#submit").hide(); 
    // your questions stored in five variables
    var q1 = "What industry are you currently in?";
    var q2 = "List your skills and grade them.";
    var q3 = "What do you like about your current job?";
    var q4 = "What do you expect for your next job?";
    var q5 = "What current skills you wish to use for next job?";
    var q6 = "industries that you have over 50% compatibility to pivot into:"
    
    // change progress bar to 30%
    $("#next").on('click',function(){
        
        // let's get the percentage for the progress bar
        var progress = $(".progress-bar")[0].style.width;
        
        // let's add to it based on how far along we are 
        
        // if we're at 20% ...
        if( progress === "20%"){ 
            
            // ... make these changes
            $(".progress-bar").css("width","40%"); 
            $(".sr-only").text('40% Complete');
            $("#industry").hide();
            $("#question").text(q2);
            $("#skillset").fadeIn();
            
        // if we're at 40%
        } else if (progress === "40%") {
            
            $(".progress-bar").css("width","60%");
            $(".sr-only").text('60% Complete');
            $("#skillset").hide();
            $("#question").text(q3);
            $("#current").fadeIn();
            
        // if we're at 60%
        } else if (progress === "60%") {
            
            $(".progress-bar").css("width","80%");
            $(".sr-only").text('80% Complete');
            $("#current").hide();
            $("#question").text(q4);
            $("#expect").fadeIn();
        
        // if we're at 80% 
        } else if (progress === "80%") {
            
            $(".progress-bar").css("width","100%");
            $(".sr-only").text('100% Complete');
            $("#expect").hide(); 
            $("#next").hide(); 
            $("#question").text(q5);
            $("#wish").fadeIn();
            $("#submit").fadeIn();
            
        } else {

            $("#question").text("Completed!");
            $("button").hide();

        }
        
    });

    $("#match").hide(); 
    $("#gopivot").hide();

    $(".dropdown-menu li a").click(function(){
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

    $("#submit").on('click',function(){
         $("#submit").hide();
         $(".progress").hide();
         $("#wish").hide();
         $("#question").text("Industries that you have over 50% compatibility to pivot into:");
         $("#match").fadeIn();
         $("#gopivot").fadeIn();
     });

}); // DONT' TOUCH ME






