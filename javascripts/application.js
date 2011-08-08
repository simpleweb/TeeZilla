jQuery(document).ready(function() {

	$(".large_thumb").click(function(){
	     window.location=$(this).find("a").attr("href");
	     return false;
	});
	
	$(".large_thumb").hover(
	  function () {
	    $(this).addClass("large_tee_hover");
	  },
	  function () {
	    $(this).removeClass("large_tee_hover");
	  }
	);
	
	$(".large_thumb").hover(
	  function () {
	    $(this).addClass("large_tee_hover");
	  },
	  function () {
	    $(this).removeClass("large_tee_hover");
	  }
	);
	
	$('ul#comments_list li:odd').addClass ('odd');
	
	
	// Fancy Box Code
	
    

	$(".simple_login").fancybox({
		'scrolling'		: 'no',
		'titleShow'		: false,
		'onClosed'		: function() {
		    $(".error").hide();
		}
	});

});

