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

	if($('p.days-remaining').length) {
	  var days = $('p.days-remaining').attr('data-days'),
	      $hundreds = $('p.days-remaining span.hundreds'),
	      $units = $('p.days-remaining span.units'),
	      $tens = $('p.days-remaining span.tens');
	
  	var matches = days.match(/(\d)/g);
	
  	if(matches.length == 3) {
  	  $hundreds.html(matches[0]);
  	  $tens.html(matches[1]);
  	  $units.html(matches[2]);
  	} else if(matches.length == 2) {
  	  $tens.html(matches[0]);
  	  $units.html(matches[1]);
  	} else if(matches.length == 1) {
  	  $units.html(matches[0]);
  	}
	}
	
	
	// Fancy Box Code
	$(".simple_login").fancybox({
		'scrolling'		: 'no',
		'titleShow'		: false,
		'onClosed'		: function() {
		    $(".error").hide();
		}
	});

  // Twitter sharing
  $(".lnkShareTwitter").click(function() {
    window.open($(this).attr('href'), 'twitter', 'width=550,height=450');
    return false;
  });


  // The load more link
  var $more = $('a.lnkViewMore');

  // handle showing more entries, this needs to ajax in some of the
  // entries on load.
  function page(done) {
    window.offset = (window.page*window.pagesize)-window.pagesize;

    $("div#entries").find("div.large_thumb").slice(window.offset,window.offset+window.pagesize).show();

    $.get('/', {page: ++window.page}, function(data) {
      console.log("Data: ");
      console.log(data);
      $(".large_thumb", data).hide().appendTo("div#entries");
      showHideMore($("div#entries"));
      done && done();
    });
  }

  function showHideMore(container) {
    if($(container).find("div.large_thumb:hidden").length==0) {
      $more.hide();
    } else {
      $more.show();
    }
  }

  window.page = 1;
  window.pagesize = 12;
  page();

  $more.click(function() {
    var self = this;
    var oldText = $(this).text();
    $(this).text("Loading...");

    page(function() {
      $(self).text(oldText);
    });

    return false;
  });


});

