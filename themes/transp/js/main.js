(() => {
  !(function (e) {
    e(window).on("load", function () {
      e("#preloader-active").fadeOut("slow");
    });
    var s = e(".sticky-bar");
    (t = e(window)).on("scroll", function () {
      t.scrollTop() < 200
        ? (s.removeClass("stick"),
          e(".header-style-2 .categories-dropdown-active-large").removeClass(
            "open"
          ),
          e(".header-style-2 .categories-button-active").removeClass("open"))
        : s.addClass("stick");
    });
    var t,
      i,
      o,
      n,
      l = e(".sidebar-left");
    ((t = e(window)).on("scroll", function () {
      t.scrollTop() < 760 ? l.removeClass("stick") : l.addClass("stick");
    }),
    e.scrollUp({
      scrollText:
        '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path></svg>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    }),
    new WOW().init(),
    e(".sticky-sidebar").length && e(".sticky-sidebar").theiaStickySidebar(),
    e(".categories-button-active").length) &&
      e(".categories-button-active").on("click", function (s) {
        s.preventDefault(),
          e(this).hasClass("open")
            ? (e(this).removeClass("open"),
              e(this)
                .siblings(".categories-dropdown-active-large")
                .removeClass("open"))
            : (e(this).addClass("open"),
              e(this)
                .siblings(".categories-dropdown-active-large")
                .addClass("open"));
      });
    e(".select-active").length && e(".select-active").select2(),
      e(".count").length && e(".count").counterUp({ delay: 10, time: 600 }),
      e(".grid").length &&
        e(".grid").imagesLoaded(function () {
          e(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: !0,
            layoutMode: "masonry",
            masonry: { columnWidth: ".grid-item" },
          });
        }),
      (i = e(".search-active")),
      (o = e(".search-close")),
      (n = e(".main-search-active")),
      i.on("click", function (e) {
        e.preventDefault(), n.addClass("search-visible");
      }),
      o.on("click", function () {
        n.removeClass("search-visible");
      }),
      (function () {
        var s = e(".burger-icon"),
          t = e(".mobile-menu-close"),
          i = e(".mobile-header-active"),
          o = e("body");
        o.prepend('<div class="body-overlay-1"></div>'),
          s.on("click", function (e) {
            s.toggleClass("burger-close"),
              e.preventDefault(),
              i.toggleClass("sidebar-visible"),
              o.toggleClass("mobile-menu-active"),
              window.scrollTo(0, 0);
          }),
          t.on("click", function () {
            i.removeClass("sidebar-visible"),
              o.removeClass("mobile-menu-active");
          }),
          e(".body-overlay-1").on("click", function () {
            i.removeClass("sidebar-visible"),
              o.removeClass("mobile-menu-active"),
              s.removeClass("burger-close");
          });
      })();
    var a = e(".mobile-menu"),
      r = a.find(".sub-menu");
    r
      .parent()
      .prepend(
        '<span class="menu-expand"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>'
      ),
      r.slideUp(),
      a.on("click", "li a, li .menu-expand", function (s) {
        var t = e(this);
        t
          .parent()
          .attr("class")
          .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
          ("#" === t.attr("href") || t.hasClass("menu-expand")) &&
          (s.preventDefault(),
          t.siblings("ul:visible").length
            ? (t.parent("li").removeClass("active"), t.siblings("ul").slideUp())
            : (t.parent("li").addClass("active"),
              t
                .closest("li")
                .siblings("li")
                .removeClass("active")
                .find("li")
                .removeClass("active"),
              t.closest("li").siblings("li").find("ul:visible").slideUp(),
              t.siblings("ul").slideDown()));
      }),
      e(".mobile-language-active").on("click", function (s) {
        s.preventDefault(), e(".lang-dropdown-active").slideToggle(900);
      }),
      e(".categories-button-active-2").on("click", function (s) {
        s.preventDefault(),
          e(".categori-dropdown-active-small").slideToggle(900);
      });
    var c = e(".tm-demo-options-wrapper");
    e(".view-demo-btn-active").on("click", function (e) {
      e.preventDefault(), c.toggleClass("demo-open");
    }),
      e(".more_slide_open").slideUp(),
      e(".more_categories").on("click", function () {
        e(this).toggleClass("show"), e(".more_slide_open").slideToggle();
      }),
      e(".swiper-group-6").each(function () {
        new Swiper(this, {
          spaceBetween: 30,
          slidesPerView: 6,
          slidesPerGroup: 1,
          loop: !0,
          pagination: { el: ".swiper-pagination-group-6", clickable: !0 },
          autoplay: { delay: 1e4 },
          breakpoints: {
            1199: { slidesPerView: 6 },
            800: { slidesPerView: 5 },
            600: { slidesPerView: 4 },
            400: { slidesPerView: 3 },
            350: { slidesPerView: 2 },
            150: { slidesPerView: 2 },
          },
        });
      }),
      e(".swiper-group-4").each(function () {
        new Swiper(this, {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          loop: !0,
          navigation: {
            nextEl: ".swiper-button-next-group-4",
            prevEl: ".swiper-button-prev-group-4",
          },
          pagination: { el: ".swiper-pagination-group-4", clickable: !0 },
          autoplay: { delay: 1e4 },
          breakpoints: {
            1399: { slidesPerView: 4 },
            1100: { slidesPerView: 3 },
            780: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
            400: { slidesPerView: 1 },
            350: { slidesPerView: 1 },
            150: { slidesPerView: 1 },
          },
        });
      }),
      e(".swiper-group-3-slider").each(function () {
        new Swiper(this, {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: !0,
          navigation: {
            nextEl: ".swiper-button-next-style-2",
            prevEl: ".swiper-button-prev-style-2",
          },
          pagination: { el: ".swiper-pagination-style-2", clickable: !0 },
          autoplay: { delay: 1e4 },
          on: {
            beforeInit: function () {
              var s = 0,
                t = e(".title-padding-left");
              t.length > 0 && (s = t.offset().left),
                e(".box-slide-customers").length > 0 &&
                  e(".box-slide-customers").css(
                    "padding-inline-start",
                    s + "px"
                  );
            },
          },
          breakpoints: {
            1199: { slidesPerView: 3 },
            800: { slidesPerView: 2 },
            600: { slidesPerView: 1 },
            400: { slidesPerView: 1 },
            250: { slidesPerView: 1 },
          },
        });
      }),
      e(".swiper-group-3-customers-2").each(function () {
        new Swiper(this, {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: !0,
          navigation: {
            nextEl: ".swiper-button-next-customers",
            prevEl: ".swiper-button-prev-customers",
          },
          pagination: { el: ".swiper-pagination-customers", clickable: !0 },
          autoplay: { delay: 1e4 },
          on: {
            beforeInit: function () {
              var s = 0,
                t = e(".title-padding-left");
              t.length > 0 && (s = t.offset().left),
                e(".box-slide-customers").length > 0 &&
                  e(".box-slide-customers").css(
                    "padding-inline-start",
                    s + "px"
                  );
            },
          },
          breakpoints: {
            1199: { slidesPerView: 3 },
            800: { slidesPerView: 2 },
            600: { slidesPerView: 1 },
            400: { slidesPerView: 1 },
            250: { slidesPerView: 1 },
          },
        });
      }),
      e(".swiper-group-1").each(function () {
        new Swiper(this, {
          slidesPerView: 1,
          loop: !0,
          navigation: {
            nextEl: ".swiper-button-next-group-1",
            prevEl: ".swiper-button-prev-group-1",
          },
          pagination: { el: ".swiper-pagination", clickable: !0 },
          autoplay: { delay: 1e4 },
        });
      }),
      e(".dropdown-menu > li a").on("click", function (s) {
        s.preventDefault(),
          e(this)
            .parents(".dropdown")
            .find(".btn span")
            .html(e(this).html() + ""),
          e(this).parents(".dropdown").find(".btn").val(e(this).data("value"));
      }),
      e(".popup-youtube").length &&
        e(".popup-youtube").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        }),
      e("[data-countdown]").each(function () {
        var s = e(this),
          t = e(this).data("countdown");
        s.countdown(t, function (s) {
          e(this).html(
            s.strftime(
              '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%D</span><span class="countdown-period lh-14 font-xs"> days </span></span><span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%H</span><span class="countdown-period font-xs lh-14"> hours </span></span><span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%M</span><span class="countdown-period font-xs lh-14"> mins </span></span><span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%S</span><span class="countdown-period font-xs lh-14"> secs </span></span>'
            )
          );
        });
      }),
      e(window).width() < 992 &&
        (e(".menu-texts li.has-children > a").removeAttr("href"),
        e(".menu-texts li.has-children > a").on("click", function (s) {
          e(this).parent().toggleClass("submenu-open"),
            e(this).parent().siblings().removeClass("submenu-open");
        })),
      e(".btn-close").on("click", function () {
        e(".box-notify").hide(function () {
          e(".sidebar-left").css("top", "");
        });
      });
    e(document).on("click", function (s) {
      var t = e(".box-dropdown-cart"),
        i = e(".box-search-top");
      i === s.target ||
        i.has(s.target).length ||
        e(".form-search-top").slideUp(),
        t === s.target ||
          t.has(s.target).length ||
          (e(".dropdown-account").removeClass("dropdown-open"),
          e(".dropdown-cart").removeClass("dropdown-open"));
    }),
      e(".icon-account").on("click", function () {
        e(".dropdown-account").toggleClass("dropdown-open");
      }),
      e(".icon-cart").on("click", function () {
        e(".dropdown-cart").toggleClass("dropdown-open");
      }),
      e(".search-post").on("click", function () {
        "none" == e(".form-search-top").css("display")
          ? e(".form-search-top").slideDown()
          : e(".form-search-top").slideUp();
      }),
      e(".change-price-plan li a").on("click", function (s) {
        s.preventDefault(),
          e(".change-price-plan li a").removeClass("active"),
          e(this).addClass("active"),
          "monthly" == e(this).attr("data-type")
            ? (e(".text-price-standard").html("$29"),
              e(".text-type-standard").html("- user / month"),
              e(".text-price-business").html("$99"),
              e(".text-type-business").html("- user / month"),
              e(".text-price-enterprise").html("$299"),
              e(".text-type-enterprise").html("- user / month"))
            : (e(".text-price-standard").html("$348"),
              e(".text-type-standard").html("- user / year"),
              e(".text-price-business").html("$1,188"),
              e(".text-type-business").html("- user / year"),
              e(".text-price-enterprise").html("$3,588"),
              e(".text-type-enterprise").html("- user / year"));
      }),
      e(".change-media li a").on("click", function (s) {
        s.preventDefault(),
          e(".change-media li a").removeClass("active"),
          e(this).addClass("active");
        var t = e(this).attr("data-type");
        e(".social-media").hide(), e("." + t).show();
      }),
      e(".enterprise").hide(),
      e(".button-click").on("click", function (s) {
        s.preventDefault(),
          e(".button-click").removeClass("active"),
          e(this).addClass("active");
        var t = e(this).attr("data-type");
        "all" == t
          ? e(".item-article").show()
          : (e(".item-article").hide(), e("." + t).show());
      }),
      e(".product-image-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !1,
        asNavFor: ".slider-nav-thumbnails",
      }),
      e(".slider-nav-thumbnails").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".product-image-slider",
        dots: !1,
        focusOnSelect: !0,
        vertical: !1,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 4 } },
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 700, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
        prevArrow:
          '<button type="button" class="slick-prev"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>',
        nextArrow:
          '<button type="button" class="slick-next"><svg class="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></button>',
      }),
      e(".list-terms li a").on("click", function (s) {
        s.preventDefault();
        var t = e(this).attr("href"),
          i = e(t).offset().top - 90;
        e("html,body").animate({ scrollTop: i }, 500);
      });
  })(jQuery),
    $(document).on("change", "#cb_billed_type", function () {
      !(function () {
        for (
          var e = $("#cb_billed_type"),
            s = $(".for-month"),
            t = $(".for-year"),
            i = $(".text-billed-month"),
            o = $(".text-billed-year"),
            n = 0;
          n < s.length;
          n++
        )
          e.is(":checked")
            ? (t.eq(n).addClass("display-year"),
              o.addClass("active"),
              i.removeClass("active"),
              s.eq(n).removeClass("display-month"))
            : (t.eq(n).removeClass("display-year"),
              i.addClass("active"),
              o.removeClass("active"),
              s.eq(n).addClass("display-month"));
      })();
    });
  var e,
    s = null;
  function t() {
    new Swiper(".swiper-group-3-customers", {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: !0,
      navigation: {
        nextEl: ".swiper-button-next-customers",
        prevEl: ".swiper-button-prev-customers",
      },
      pagination: { el: ".swiper-pagination-customers", clickable: !0 },
      autoplay: { delay: 1e4 },
      on: {
        beforeInit: function () {
          var e = 0,
            s = $(".title-padding-left");
          s.length > 0 && (e = s.offset().left),
            $(".box-slide-customers").length > 0 &&
              $(".box-slide-customers").css("padding-inline-start", e + "px");
        },
      },
      breakpoints: {
        1199: { slidesPerView: 3 },
        800: { slidesPerView: 2 },
        600: { slidesPerView: 1 },
        400: { slidesPerView: 1 },
        250: { slidesPerView: 1 },
      },
    });
  }
  function i() {
    s && s.destroy(),
      (s = new Swiper(".swiper-group-4-customers", {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: !0,
        navigation: {
          nextEl: ".swiper-button-next-customers",
          prevEl: ".swiper-button-prev-customers",
        },
        pagination: { el: ".swiper-pagination-customers", clickable: !0 },
        autoplay: { delay: 1e4 },
        on: {
          beforeInit: function () {
            var e = $(".title-padding-left");
            "rtl" === $("body").attr("dir")
              ? $(".box-slide-customers").length > 0 &&
                $(".box-slide-customers").css(
                  "padding-inline-start",
                  $(window).width() - e.innerWidth() - e.offset().left + "px"
                )
              : $(".box-slide-customers").length > 0 &&
                $(".box-slide-customers").css(
                  "padding-inline-start",
                  e.offset().left + "px"
                );
          },
        },
        breakpoints: {
          1199: { slidesPerView: 4 },
          800: { slidesPerView: 2 },
          600: { slidesPerView: 1 },
          400: { slidesPerView: 1 },
          250: { slidesPerView: 1 },
        },
      }));
  }
  if (
    (window.addEventListener("resize", function () {
      e && clearTimeout(e),
        $(".swiper-group-3-customers").length > 0 && (e = setTimeout(t, 400)),
        $(".swiper-group-4-customers").length > 0 && (e = setTimeout(i, 400));
    }),
    $(".swiper-group-3-customers").length > 0 && t(),
    $(".swiper-group-4-customers").length > 0 && i(),
    $(".mobile-header-wrapper-inner").length)
  )
    new PerfectScrollbar(".mobile-header-wrapper-inner");
})();
