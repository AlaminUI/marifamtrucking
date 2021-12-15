document.addEventListener("scroll", function () {


    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $('header').removeClass('no-bg')
    } else {
    
    $('header').addClass('no-bg')
    
    }
    })
  