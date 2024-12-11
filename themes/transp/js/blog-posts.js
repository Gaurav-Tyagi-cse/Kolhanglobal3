$(function () {
  "use strict";
  var t = $(".loading-featured-blog");
  $(".featured-post").on("click", ".btn-category", function (e) {
    e.preventDefault();
    var a = $(e.target);
    $(".featured-post").find(".btn-category").removeClass("active"),
      a.addClass("active"),
      $.ajax({
        url: $(this).data("url"),
        method: "GET",
        beforeSend: function () {
          t.show();
        },
        success: function (e) {
          $(".box-list-blogs").html(e.data), t.hide();
        },
        complete: function () {
          t.hide();
        },
      });
  });
});
