function deslizaDevagar(seletor) {

    $(seletor).click(function (event) {
        event.preventDefault();
        var ancora = $(this).attr('href');
        $('html').animate (
            {
                scrollTop: $(ancora).offset().top
            }, 2000);

    });
      
    }

    deslizaDevagar("a[href*=painel-sobre]");
    deslizaDevagar("a[href*=painel-palestrantes]");
    deslizaDevagar("a[href*=painel-inscricao]");
