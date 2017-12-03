$(document).ready(function() {
  $.ajax({
    url: "assets/data.csv",
  }).done(function(res) {
    var rows = res.split("\n");
    $.each(rows, function(key, val) {
      var cols = val.split(",");

      var html = '<div class="row">';

      $.each(cols, function(key, val) {
        if (key > 0) html += '<div class="col">' + val + '</div>';
      });

      html += '<div class="clear"></div></div>';

      $("#win .lista.l" + cols[0]).append(html);


    });


  })
  $("#win .select .tab").click(function() {
    if (!$(this).hasClass("ac")) {
      $("#win .select .tab").removeClass("ac");
      $(this).addClass("ac");

      var ind = $("#win .select .tab").index($(this));
      $("#win .lista").hide();
      $("#win .lista").eq(ind).show();
    }
  })
	$(window).scroll(function() {
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                var topWindow = $(window).scrollTop();
                if(topWindow>=$('.ventaIntro').position().top && topWindow<$('.ventaDespacho').position().top-150){
                    $('.groupMenu ul li').removeClass('active');
                    $('.groupMenu ul li').eq(0).addClass('active');
                }else if(topWindow>=$('.ventaDespacho').position().top-150 && topWindow<$('.ventaPreguntas').position().top-150){
                    $('.groupMenu ul li').removeClass('active');
                    $('.groupMenu ul li').eq(1).addClass('active');
                }else if(topWindow>=$('.ventaPreguntas').position().top-150){
                    $('.groupMenu ul li').removeClass('active');
                    $('.groupMenu ul li').eq(2).addClass('active');
                }
            },50));
        });
});
