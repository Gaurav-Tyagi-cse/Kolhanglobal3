$(function () {
  var e = function (e) {
      $(".contact-error-message").html(e).show();
    },
    t = function (t) {
      var s = "";
      $.each(t, function (e, t) {
        "" !== s && (s += "<br />"), (s += t);
      }),
        e(s);
    };
  $(document).on("submit", ".contact-form", function (s) {
    s.preventDefault(), s.stopPropagation();
    var o = $(this),
      n = o.find("button[type=submit]");
    $(".contact-success-message").html("").hide(),
      $(".contact-error-message").html("").hide(),
      $.ajax({
        type: "POST",
        cache: !1,
        url: o.prop("action"),
        data: new FormData(o[0]),
        contentType: !1,
        processData: !1,
        beforeSend: function () {
          return n.addClass("button-loading");
        },
        success: function (t) {
          var s = t.error,
            n = t.message;
          s
            ? e(n)
            : (o[0].reset(),
              (function (e) {
                $(".contact-success-message").html(e).show();
              })(n)),
            "undefined" != typeof refreshRecaptcha && refreshRecaptcha(),
            document.dispatchEvent(new CustomEvent("contact-form.submitted"));
        },
        error: function (s) {
          var o;
          "undefined" != typeof refreshRecaptcha && refreshRecaptcha(),
            void 0 !== (o = s).errors && o.errors.length
              ? t(o.errors)
              : void 0 !== o.responseJSON
              ? void 0 !== o.responseJSON.errors
                ? 422 === o.status && t(o.responseJSON.errors)
                : void 0 !== o.responseJSON.message
                ? e(o.responseJSON.message)
                : $.each(o.responseJSON, function (t, s) {
                    $.each(s, function (t, s) {
                      e(s);
                    });
                  })
              : e(o.statusText);
        },
        complete: function () {
          return n.removeClass("button-loading");
        },
      });
  });
});
