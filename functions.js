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

    }

    function mudaImg() {
        if (indexAtual > total) {
            indexAtual = 0
        }
        if (indexAtual == 0) {
            $('.slider img').eq(indexAtual).stop().fadeIn(2000)
            $('.slider img').eq(indexAtual).stop().fadeOut(2000)
        } else {
            $('.slider img').eq(indexAtual).stop().fadeOut(2000)
        }

        indexAtual++
        $('.slider img').eq(indexAtual).stop().fadeIn(2000)
    }



})