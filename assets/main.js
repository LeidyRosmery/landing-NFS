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
	$('.collapse').on('show.bs.collapse', function() {
		console.log("abierto");
	
		$(this).siblings('div').find('i').removeClass('glyphicon glyphicon-plus');
		$(this).siblings('div').find('i').addClass('glyphicon glyphicon-minus');
	})
	$('.collapse').on('hide.bs.collapse', function() {
		$(this).siblings('div').find('i').removeClass('glyphicon glyphicon-minus');
		$(this).siblings('div').find('i').addClass('glyphicon glyphicon-plus');
	})
  });
