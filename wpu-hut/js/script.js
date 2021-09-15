function tampilSemuaMenu() {
    $.getJSON("data/pizza.json",
        function (data) {
            let menu = data.menu;
            $('#daftar-menu').empty();
            $.each(menu, function (i, data) {
                $('#daftar-menu').append(`<div class="col-md-4">
            <div class="card mb-3">
                <img src="img/menu/` + data.gambar + `" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">
                    ` + data.nama + `
                    </h5>
                    <p class="card-text">
                    ` + data.deskripsi + `
                    </p>
                    <h5 class="card-title">
                        Rp. ` + data.harga + `
                    </h5>
                    <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                </div>
            </div>
        </div>`)
            });
        }
    );
}

tampilSemuaMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilSemuaMenu();
        return;
    }

    $.getJSON("data/pizza.json", function (data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class = "card-text" >' + data.deskripsi + ' </p><h5 class = "card-title">' + data.harga + '</h5><a href = "#"class = "btn btn-primary" > Pesan Sekarang </a> </div></div></div>'
            } else {
                $('#daftar-menu').html("Error")
            }
        });
        $('#daftar-menu').html(content)
    });
});