$(document).ready(function(){
    // SIDEDRAWER LOGIC

    $(".nav-burger").click(()=>{
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

    // $(".maincontent").html(
    //     `<p class="maincontent__name">Aleksander Wojas</p>
    //     <div class="maincontent__logo">
    //         <div class="maincontent__letter--a">
    //             <img src="/images/A.png" alt="A">
    //         </div>
    //         <div class="maincontent__letter--w">
    //             <img src="/images/W.png" alt="W">
    //         </div>
    //     </div>`
    // )
    $(".maincontent__letter--a img").delay(1200).animate({'margin-right': '-33px'}, 1000)
    
    // RENDERING THE PROPER CONTENT DEPEND ON CLICKED LINK
    $(".sidedrawer__nav ul li a").click(()=>{
        event.preventDefault();
        const link = event.target.getAttribute('href').slice(1)
        let content;

        $(".nav-blocks__block").removeClass('nav-blocks__block--active').animate({backgroundColor: '#fff'}, 300);

        switch(link){
            case 'home':
                content = `
                    <p class="maincontent__name">Aleksander Wojas</p>
                    <div class="maincontent__logo">
                        <div class="maincontent__letter--a">
                            <img src="/images/A.png" alt="A">
                        </div>
                        <div class="maincontent__letter--w">
                            <img src="/images/W.png" alt="W">
                        </div>
                    </div>`
                break;
            case 'about':
                content = `<p class="maincontent__name">My name is Olek, im 31 years old.
                Until now I've used to work as a sysadmin, but I didn't feel it challenging me anymore so I decided to discover the world of writing code. It appears to be pretty tough, very challenging and it looks like never ending journey. So I've decided to get on this train ;) </p>`
                break;
            case 'tools':
                content = `
                <div class="utility">
                    <div class="utility__block"><img src="/images/loga/html5.png"></div>
                    <div class="utility__block"><img src="/images/loga/css3.png"></div>
                    <div class="utility__block"><img src="/images/loga/js.png"></div>
                    <div class="utility__block"><img src="/images/loga/react.png"></div>
                    <div class="utility__block"><img src="/images/loga/jquery.png"></div>
                    <div class="utility__block"><img src="/images/loga/git.png"></div>
                    <div class="utility__block"><img src="/images/loga/node.png"></div>
                    <div class="utility__block"><img src="/images/loga/Npm.png"></div>
                    <div class="utility__block"><img src="/images/loga/mongo.png"></div>
                    <div class="utility__block"><img src="/images/loga/xd.png"></div>
                    <div class="utility__block"><img src="/images/loga/ps.png"></div>
                    <div class="utility__block"><img src="/images/loga/Bootstrap.png"></div>
                </div>`
            break;
            case 'contact':
                content = `
                    <div class="contact">
                        <form class="contact_form">
                            <label for="name">name</label>
                            <input class="contact_input" name="name" id="name"/>
                            <label>email</label>
                            <input class="contact_input" name="email" id="email"/>
                            <label>contact nr</label>
                            <input class="contact_input" name="nr" id="nr"/>
                            <label>message</label>
                            <textarea class="contact_textarea" rows="5" name="message" id="message"></textarea>
                            <div style="display: flex; justify-content: space-between;">
                                <button class="contact_btn contact_btn--reset">CLEAR</button>
                                <button class="contact_btn contact_btn--send">SEND</button>
                            </div>
                        </form>
                    </div>`
                break;
        }
        $("#"+link).addClass('nav-blocks__block--active').animate({backgroundColor: '#0096B3'}, 1000);        
        $(".maincontent").html(content).css("display", "none").fadeIn(1500);
    })
    // CONTACT FORM LOGIC
    // SENDING MSG
    $(".contact_btn--send").click(() => {
        event.preventDefault();
        const content = $(".maincontent").html();
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#nr").val();
        const msg = $("#message").val();

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
            if(message == 'OK'){
                const resp = `<div class="contact_response"><p>Message sent successfully!</p></div></div>`
                $(".maincontent").html(content)
                $(resp).insertBefore(".maincontent");
            }else{
                const resp = `<div class="contact_response contact_response--fail"><p>Something went wrong!</p><p>error code: ${message}</p></div></div>`
                $(resp).insertBefore(".maincontent");
                $(".maincontent").html(content)
                $("#name").val(name);
                $("#email").val(email);
                $("#nr").val(phone);
                $("#message").val(msg);                
            }
        }).catch(err => {
            $(".maincontent").html(`<div class="contact_response"><p>Something went wrong, try later or send me the error beneath to olekwojas@gmail.com, thank you!.</p><p>${err}</p></div>`)
        })
    })
    // CLEAR FORM
    $(".contact_btn--reset").click(() => {
        event.preventDefault();
        $(".contact_input, .contact_textarea").val("");
    })
    // PROJECTS SCROLLING

    $("#arrow-down").click(()=>{
        const scrollValue = window.innerHeight * 0.63;
        const currentScroll = $(".projects").scrollTop();
        $(".projects").animate({scrollTop: currentScroll+scrollValue}, 800)
    })
    $("#arrow-up").click(()=>{
        const scrollValue = window.innerHeight * 0.63;
        const currentScroll = $(".projects").scrollTop();
        $(".projects").animate({scrollTop: currentScroll-scrollValue}, 800)
    })

    // PROJECT HOVER ACTION
    $('.project').hover(()=>{
        //hover in
        console.log('hover in')
        $('.project').children('.project_box').children('.project_hoverbox').css('visibility', 'visible')
    }, ()=>{
        //hover out
        console.log('hover out')
        $('.project').children('.project_box').children('.project_hoverbox').css('visibility', 'hidden')
    });
})
