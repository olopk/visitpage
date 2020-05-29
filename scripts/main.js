$(document).ready(function(){

    // SIDEDRAWER LOGIC
    $(".navbar__burger").click(()=>{
        $(".main-container").addClass("main-container--blur");
        $(".sidedrawer").addClass("sidedrawer--visible");
    })
    $(".sidedrawer").click(() => {
        if($(".sidedrawer").hasClass("sidedrawer--visible")){
            $(".sidedrawer").removeClass("sidedrawer--visible");
            $(".main-container").removeClass("main-container--blur");
        }
    })
    // DEFAULT MAINCONTENT SET
    $(".home__letter--a img").css('margin-right', '0px').delay(1200).animate({'margin-right': '-33px'}, 1000)
    
    // RENDERING THE PROPER CONTENT DEPEND ON CLICKED LINK
    $(".sidedrawer__nav ul li a, .navbar__nav ul li a,.nav-blocks__block").click(()=>{
        event.preventDefault();
        const link = event.target.getAttribute('href').slice(1)
        let content;

        switch(link){
            case 'home':
                content = 'home'
                break;
            case 'about':
                content = 'about'
                break;
            case 'tools':
                content = 'tools'
            break;
            case 'contact':
                content = 'contact'                    
                break;
            case 'projects':
                content = 'projects'
                break;
        }
        $(".nav-blocks__block--active").removeClass('nav-blocks__block--active').animate({backgroundColor: '#fff'}, 800);
        $("#"+link).addClass('nav-blocks__block--active').animate({backgroundColor: '#0096B3'}, 800);
        $(".maincontent").children().css("display", "none");      
        $(".maincontent__"+content).css("display", "none").fadeIn(1200);
    })        

// MAINCONTENT ONCLICK ACTIONS
    $('.maincontent').click((e)=>{

    //PROJECTS SECTION
        // PROJECTS SCROLLING
        if($(e.target).is("#arrow-down img, #arrow-down")){
            const scrollValue = window.innerHeight * 0.63;
            const currentScroll = $(".projects").scrollTop();
            $(".projects").animate({scrollTop: currentScroll+scrollValue}, 800)
        }
        if($(e.target).is("#arrow-up img, #arrow-up")){
            const scrollValue = window.innerHeight * 0.63;
            const currentScroll = $(".projects").scrollTop();
            $(".projects").animate({scrollTop: currentScroll-scrollValue}, 800)
        }
        //SHOWING AND HIDING PROJECTS INFO
        if($(e.target).parent().is('.project__box')){
            $('.project__hoverbox').fadeOut('slow')
            $('.project__text').slideUp('slow')
            $(e.target).siblings('.project__hoverbox').css('display', 'flex').hide().fadeIn('slow')
            $(e.target).parent().siblings($('.project__text')).slideDown('slow')
            return
        }
        if($('.maincontent').has('.projects').length){
            $('.project__hoverbox').fadeOut('slow')
            $('.project__text').slideUp('slow')
            return;
        }
    // UTILS SECTION
    // if($(e.target).parent().is('.tools__block')){
    //     console.log(this)
    // }    
})
    // CONTACT FORM SECTION
        // SENDING MSG
        $(".contact__btn--send").click(()=>{
            event.preventDefault();

            const content = $(".maincontent").html();
            const name = $("#name").val();
            const email = $("#email").val();
            const phone = $("#nr").val();
            const msg = $("#message").val();
            $(".contact__response").empty()
        
            if(name === ''|| email === ''|| phone === '' || msg === ''){
                $(".contact__response").append('<p>All form fields are required</p>');
                return
            }
            if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
                $('.contact__response').append('<p>Please insert a valid email number</p>');
                return
            }

            if(!/^([\+\d]\d{1,2}|\([\+\d]\d{1,2}\))\d{4,9}$/.test(phone)){
                $('.contact__response').append('<p>Please insert a valid phone number</p>');
                return
            }

            $(".maincontent").html(`
                <div class="loader">Loading...</div>
            `)
            Email.send({
                SecureToken: "7e3f3b6e-0b50-4b5c-b759-4541f5848fc4",
                To : 'olekwojas@gmail.com',
                From : "a.wojas@o-it.pl",
                Subject : "Formularz kontaktowy z CV-page",
                Body : `name: ${name}, email: ${email}, nr: ${phone}, message: ${msg}`
            }).then(message => {
                $(".maincontent").html(content)
                $(".contact__response").empty()
                if(message == 'OK'){
                    $('.contact__response').append('<p>Message sent successfully!</p>')
                }else{
                    $('.contact__response').append('<p>Something went wrong!</p><p>error code: ${message}</p>');
                    $("#name").val(name);
                    $("#email").val(email);
                    $("#nr").val(phone);
                    $("#message").val(msg);                
                }
            }).catch(err => {
                $('.contact__response').append(`<p>Something went wrong, try later or send me the error beneath to olekwojas@gmail.com, thank you!.</p><p>${err}</p>`)
            })
            return;
        })
        // CLEARING FORM
           $(".contact__btn--reset").click(()=>{
                event.preventDefault();
                $(".contact__input, .contact__textarea").val("");
                return;
            })
})
