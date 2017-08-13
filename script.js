$("i.fa.fa-search").on('click', function () {
    $(".search-form").animate({
        width: 'toggle'
    });
});


$(".search-form").keypress(function (e) {
    if (e.keyCode === 13) {
        $(".content").empty();
        var searchInput = $(".search-form").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";
        $.ajax({
            url: url,
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data, status, jqXHR) {
                for (var i = 0; i < 10; i++) {
                    $(".content").prepend("<a href=" + data[3][i] + " target='_blank'><div class='row'><strong><h2>" + data[1][i] + "</h2></strong><h4>" + data[2][i] + "</h4></div></a>");
                }
            }

        });
    }
});
