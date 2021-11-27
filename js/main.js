let aboutOffset = $('.for-nav').offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffset - 200) {
        $('nav').css('background', '#39395f');
        $('nav').css('padding', '0');
        $('nav').css('box-shadow', '0px 4px 20px 4px #39395f')
    } else {
        $('nav').css('background', 'transparent')
        $('nav').css('padding', '10px 0');
        $('nav').css('box-shadow', 'none')
    }

    if (wScroll > aboutOffset - 50) {
        $('#btnUp').fadeIn(200);
    } else {
        $('#btnUp').fadeOut(100)
    }
})

let counterOffset = $('#counter').offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > counterOffset - 400) {
        $('#counter li span').each(function () {
            const This = $(this)
            $({ count: This.text() }).animate(
                { count: This.parent().attr('data-count') },
                {
                    duration: 1000,
                    easing: 'linear',
                    step: function () {
                        This.text(Math.floor(this.count))
                    },
                    complete: function () {
                        This.text(this.count).css({ color: '#0048ad' })
                    }
                }
            )
        })
    }
})
////////////////// COUNT DOWN ///////////////////////////////

let countDown = document.getElementById('count-down')

let test = setInterval(function () {
    let wantedDate = new Date('december 30, 2021 12:00:00').getTime();
    let now = new Date().getTime()
    let distance = wantedDate - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
    let secs = Math.floor(distance % (1000 * 60) / (1000))

    if(days < 10){
        days = "0" + days
    }
    if(hours < 10){
        hours = "0" + hours
    }
    if(mins < 10){
        mins = "0" + mins
    }
    if(secs < 10){
        secs = "0" + secs
    }

    countDown.innerHTML = `
    <div class="count days">
    <p>${days}</p>
    <h5>Days</h5>
    </div>
    <div class="count hours">
        <p>${hours}</p>
        <h5>Hours</h5>
    </div>
    <div class="count mins">
        <p>${mins}</p>
        <h5>Mins</h5>
    </div>
    <div class="count sec">
        <p>${secs}</p>
        <h5>sec</h5>
    </div>
    `
})

console.log((new Date('jan 30, 2022 12:00:00').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 60));