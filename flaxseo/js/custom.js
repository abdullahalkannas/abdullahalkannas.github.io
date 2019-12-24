/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

    /* ==============================================
    Fixed menu
    =============================================== */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header_style_01').addClass('fixed-menu');
		} else {
			$('.header_style_01').removeClass('fixed-menu');
		}
    });
    jQuery('.mu-menu').on('click', 'li a', function() {
        $('.mu-navbar .in').collapse('hide');
      });

    /* ==============================================
    BACK TOP
    =============================================== */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({
                bottom: "75px"
            });
        } else {
            jQuery('.dmtop').css({
                bottom: "-100px"
            });
        }
    });

    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
      });
	
	/* ==============================================
		Scroll to top  
	============================================== */
		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}
function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction5() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction6() {
    var dots = document.getElementById("dots6");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction7() {
    var dots = document.getElementById("dots7");
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myBtn7");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction8() {
    var dots = document.getElementById("dots8");
    var moreText = document.getElementById("more8");
    var btnText = document.getElementById("myBtn8");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction9() {
    var dots = document.getElementById("dots9");
    var moreText = document.getElementById("more9");
    var btnText = document.getElementById("myBtn9");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction10() {
    var dots = document.getElementById("dots10");
    var moreText = document.getElementById("more10");
    var btnText = document.getElementById("myBtn10");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction11() {
    var dots = document.getElementById("dots11");
    var moreText = document.getElementById("more11");
    var btnText = document.getElementById("myBtn11");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

function myFunction12() {
    var dots = document.getElementById("dots12");
    var moreText = document.getElementById("more12");
    var btnText = document.getElementById("myBtn12");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "اقرأ المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "";
        moreText.style.display = "inline";
    }
}

