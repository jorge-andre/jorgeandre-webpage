$("li > a").click(function(){
    // If this isn't already active
    if (!$(this).parent().hasClass("active")) {
      // Remove the class from anything that is active
      $("li.active").removeClass("active");
      // And make this active
      $(this).parent().addClass("active");
    }
  });