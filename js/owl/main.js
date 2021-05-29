$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function assistir() {
    window.open('https://www.youtube.com/watch?v=sL3kLxsy-Lg')
}

function info() {
    window.open('https://pt.wikipedia.org/wiki/Minions')
}