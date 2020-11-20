$(function() {
    indexAtual = 0
    total = $('.slider img').length
    delay = 5000


    start()
    buttons()

    function start() {
        $('.slider img').eq(0).stop().fadeIn()
        setInterval(function() {
            mudaImg()
        }, 5000)

    }

    function buttons() {
        for (var i = 0; i < total; i++) {
            if (i == 0) {
                $('.container-slider-buttons').append('<span style="background-color:black"></span>')
            } else {
                $('.container-slider-buttons').append('<span></span>')
            }
        }
        $('.container-slider-buttons span').click(function() {
            $('.container-slider-buttons span').css('background', '#ccc')
            $(this).css('background', 'black')
            $('.slider img').eq(indexAtual).stop().fadeOut(2000)
            indexAtual = $(this).index()
            $('.slider img').eq(indexAtual).stop().fadeIn(2000)

        })
    }

    function mudaImg() {



        if (indexAtual > total) {
            indexAtual = 0
        }



        if (indexAtual == 0) {

            $('.slider img').eq(indexAtual).stop().fadeIn(2000)
        } else {
            $('.slider img').eq(indexAtual).stop().fadeOut(2000)
        }

        indexAtual++
        $('.slider img').eq(indexAtual).stop().fadeIn(2000)

        $('.container-slider-buttons span').css('background', '#ccc')

        $('.container-slider-buttons span').eq(indexAtual).css('background', 'black')

    }



})