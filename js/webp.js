Modernizr.on('webp', function (result) {
    if (result) {
        $('.img-webp').each(function () {
            this.src = $(this).data('webp');
        });
    } else {
        $('.img-webp').each(function () {
            this.src = $(this).data('original');
        });
    }
});