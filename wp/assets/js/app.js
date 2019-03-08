(function ($) {
    function response_prc(e) {
        if (e.reqstatus == "success") {
            if (e.ev_action != "pager") {
                jQuery("#stroy-wrap").html(e.html);
                jQuery(".rppagers").html(e.pager_new);
            } else {
                jQuery("#stroy-wrap").html(e.html);
                jQuery(".rppagers").html(e.pager_new);
            }
            var d, a;
            a = $(window).width();
            d = jQuery("#stroy-wrap").offset().top;
            jQuery("html, body").animate({
                scrollTop: d
            }, 300);
            jQuery(document).trigger("page-loaded");
        } else {
            alert("Error occured !")
        }
    }

    function req_story(o, l) {
        var req_data = {};
        req_data.ev_action = o;
        //    console.log(req_data.filtform);
        var n = jQuery(".rppagers a.active").attr("data-glosarry");
        if ((jQuery(".rppagers a").length > 0)) {
            if ((o != "pager")) {
                req_data.pos = 0
            } else {
                req_data.pos = l
            }
        } else {
            req_data.pos = "1"
        }
        var p = jQuery.param(req_data, true);
        if (history.pushState) {
            history.pushState(null, "q", "?q=filt&" + p)
        }
        req_data.action = "story_filt";
        var k = window.AjaxUrl + "?" + p;
        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: window.AjaxUrl,
            data: req_data,
            cache: true,
            beforeSend: function () {
                // if ((window.localCache) && (localCache.exist(k))) {
                //c(localCache.get(k));
                //  return false
                //   }
                jQuery("body").addClass("ajstart");
                return true
            },
            complete: function (r, q) {
                jQuery("body").removeClass("ajstart");
            },
            success: function (q) {
                response_prc(q);
                // if ((window.localCache)) {
                // localCache.set(k, q)
                // }
            },
            error: function () {
                alert("! Error Occured !")
            }
        })
    }

    /*pagination*/
    jQuery(".rppagers").on("click", "a", function (k) {
        k.preventDefault();
        if (jQuery(this).hasClass("current")) {
            return false
        }
        jQuery(".rppagers a").removeClass("current");
        jQuery(this).addClass("current");
        req_story("pager", parseInt(jQuery(this).attr("data-page")));
    });

    //    social
    function soc_wind(url, title) {
        window.open(url, title, 'screenX=100,screenY=100,height=340,width=730');
    }
    $('body').on('click', '.pinj', function (e) {
        var url = $(this).attr('href');
        soc_wind(url, 'pinterest');
        e.preventDefault();
        e.stopPropagation();
    });
    $('body').on('click', '.twitj', function (e) {
        var url = $(this).attr('href');
        soc_wind(url, 'twitter');
        e.preventDefault();
        e.stopPropagation();
    });
    $('body').on('click', '.fbj', function (e) {
        var url = $(this).attr('href');
        soc_wind(url, 'facebook');
        e.preventDefault();
        e.stopPropagation();
    });
    $('body').on('click', '.googlej', function (e) {
        var url = $(this).attr('href');
        soc_wind(url, 'Google');
        e.preventDefault();
        e.stopPropagation();
    });
    $('body').on('click', '.linkj', function (e) {
        var url = $(this).attr('href');
        soc_wind(url, 'Linkedin');
        e.preventDefault();
        e.stopPropagation();
    });

    function InitAnimate() {
        var selfTriggeredElems = {
            el2: {
                selector: '[data-stagger]',
                triggerHook: 0.7,
                class: 'is-animated'
            }
        };
        initGlobalAnimations('header', selfTriggeredElems);
    }
    $(document).on('page-loaded', function () {
        InitAnimate();
    });

    $(document).on('gform_post_render', function () {
        if($('.contact').length){
            $('#gform_submit_button_2').addClass('is-animated');
        }
        selection();
    });

})(jQuery);