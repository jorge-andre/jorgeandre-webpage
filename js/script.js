$(".navbar-nav .nav-link").click(function(){
    if(!$(this).hasClass("active")){
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    }
})