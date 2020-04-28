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

    $(".maincontent").html(
        `<p class="maincontent__name">Aleksander Wojas</p>
        <div class="maincontent__logo">
            <div class="maincontent__letter--a">
                <img src="./images/A.png" alt="A">
            </div>
            <div class="maincontent__letter--w">
                <img src="./images/W.png" alt="W">
            </div>
        </div>`
    )
    $(".maincontent__letter--a img").css('margin-right', '0px').delay(1200).animate({'margin-right': '-33px'}, 1000)
    
    // RENDERING THE PROPER CONTENT DEPEND ON CLICKED LINK
    $(".sidedrawer__nav ul li a, .navbar__nav ul li a,.nav-blocks__block").click(()=>{
        event.preventDefault();
        const link = event.target.getAttribute('href').slice(1)
        let content;

        $(".nav-blocks__block").removeClass('nav-blocks__block--active').animate({backgroundColor: '#fff'}, 1000);

        switch(link){
            case 'home':
                content = `
                    <p class="maincontent__name">Aleksander Wojas</p>
                    <div class="maincontent__logo">
                        <div class="maincontent__letter--a">
                            <img src="./images/A.png" alt="A">
                        </div>
                        <div class="maincontent__letter--w">
                            <img src="./images/W.png" alt="W">
                        </div>
                    </div>`
                break;
            case 'about':
                content = `<p class="maincontent__about">My name is Olek, im 31 years old.
                Until now I've used to work as a sysadmin, but I didn't feel it challenging me anymore so I decided to discover the world of writing code. It appears to be pretty tough, very challenging and it looks like never ending journey. So I've decided to get on this train ;) </p>
                <p class="maincontent__about">Until now i've created a couple of simple webpages for practising HTML5, CSS and JS basics . Next step was trying to write some simple web applications, so i followed the online courses about pure JS and ReactJS on Udemy and YT (i dont mention them in my portfolio because its meaningless to share somebodies else code wrote by me), and then ive started a comercial project (called Transport Reporting Tool), i wrote the Frontend code in React, and  my friend handled the backend. Now im working on my own private project, where im using React for frontend and Express for backend, the project will be a simple app for smallbussiness invoices handling</p>
                <p class="maincontent__about">Privately, im very reliable, organized, punctual and logically oriented person. I need to learn and read new things because im hungry for the knowledge and selfimprovement. Im very active person who runs, swims, cycle, play football and takes cold bath in the lake once a week. My biggest achievement is saving a single person life by donating the stem cells four years ago.</p>
                `
                break;
            case 'tools':
                content = `
                <div class="utility">
                    <div class="utility__block"><img src="./images/loga/html5.png"></div>
                    <div class="utility__block"><img src="./images/loga/css3.png"></div>
                    <div class="utility__block"><img src="./images/loga/js.png"></div>
                    <div class="utility__block"><img src="./images/loga/react.png"></div>
                    <div class="utility__block"><img src="./images/loga/redux.png"></div>
                    <div class="utility__block"><img src="./images/loga/graphql.png"></div>
                    <div class="utility__block"><img src="./images/loga/jquery.png"></div>
                    <div class="utility__block"><img src=".//images/loga/git.png"></div>
                    <div class="utility__block"><img src="./images/loga/Npm.png"></div>
                    <div class="utility__block"><img src="./images/loga/node.png"></div>
                    <div class="utility__block"><img src="./images/loga/Bootstrap.png"></div>
                    <div class="utility__block"><img src="./images/loga/mongo.png"></div>
                    <div class="utility__block"><img src="./images/loga/xd.png"></div>
                    <div class="utility__block"><img src="./images/loga/gimp.png"></div>
                    <div class="utility__block"><img src="./images/loga/ps.png"></div>
                </div>`
            break;
            case 'contact':
                content = `
                    <div class="contact">
                        <form class="contact_form">
                            <div class="form__leftside">
                                <label for="name">name</label>
                                <input class="contact_input" name="name" id="name"/>
                                <label for="email">email</label>
                                <input class="contact_input" name="email" id="email"/>
                                <label for="nr">contact nr</label>
                                <input class="contact_input" name="nr" id="nr"/>
                            </div>
                            <div class="form__rightside">
                                <div>
                                    <label for="message">message</label>
                                    <textarea class="contact_textarea" rows="5" name="message" id="message"></textarea>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                                    <button class="contact_btn contact_btn--reset">CLEAR</button>
                                    <button class="contact_btn contact_btn--send">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>`
                break;
            case 'projects':
                content = `
                    <div class="arrow" id="arrow-up">
                        <img src="./images/up.png">
                    </div>
                    <div class="projects">
                        <div class="project">
                            <div class="project_box">
                                <img class="project_img"src="./images/projects/invoicecreator.png"/>
                                <div class="project_hoverbox">
                                    <a href="http://www.onet.pl" target="_blank">
                                        <span>LIVE</span>
                                    </a>
                                    <a href="http://www.onet.pl" target="_blank">
                                        <span>CODE</span>
                                    </a>,
                                </div>
                            </div>
                            <p class="project_text">Private project, still under construction.</p>
                            <p class="project_text">Stack: HTML5, CSS3, JS, ReactJS, Redux, MongoDB, Express.JS</p>
                        </div>
                        <div class="project">
                            <div class="project_box">
                                <img class="project_img"src="./images/projects/trt.png"/>
                                <div class="project_hoverbox">
                                    <a href="http://www.onet.pl" target="_blank">
                                        <span>LIVE</span>
                                    </a>
                                    <a href="http://www.onet.pl" target="_blank">
                                        <span>CODE</span>
                                    </a>
                                </div>
                            </div>
                            <p class="project_text">Commercial project, still under construction.</p>
                            <p class="project_text">Stack: HTML5, CSS3, JS, ReactJS, Redux</p>
                        </div>
                        <div class="project">
                            <div class="project_box">
                                <img class="project_img"src="./images/projects/project1.png"/>
                                <div class="project_hoverbox">
                                    <a href="http://www.onet.pl" target="_blank">
                                        <span>LIVE</span>
                                    </a>
                                    <a href="http://www.onet.pl" target="_blank">
                                        <span>CODE</span>
                                    </a>
                                </div>
                            </div>
                            <p class="project_text">Commercial webpage.</p>
                            <p class="project_text">Stack: HTML5, CSS3, JS, JQUERY</p>
                        </div>
                        <div class="project">
                            <div class="project_box">
                                <img class="project_img"src="./images/projects/hoteljan.png"/>
                                <div class="project_hoverbox">
                                    <a href="http://hoteljan.com.pl/pl/" target="_blank">
                                        <span>LIVE</span>
                                    </a>
                                    <a style="cursor: not-allowed">
                                        <span>CODE</span>
                                    </a>
                                </div>
                            </div>
                            <p class="project_text">Commercial webpage.</p>
                            <p class="project_text">Stack: HTML5, CSS3, JS, JQUERY</p>
                        </div>
                        <div class="project">
                            <div class="project_box">
                                <img class="project_img"src="./images/projects/project2.png"/>
                                <div class="project_hoverbox">
                                    <a href="https://olopk.github.io/project3/" target="_blank">
                                        <span>LIVE</span>
                                    </a>
                                    <a href="https://github.com/olopk/project3/" target="_blank">
                                        <span>CODE</span>
                                    </a>
                                </div>
                            </div>
                            <p class="project_text">Second learning project.</p>
                            <p class="project_text">Stack: HTML5, CSS3, JS</p>
                        </div>
                        <div class="project">
                            <div class="project_box">
                                <img class="project_img"src="./images/projects/project1.png"/>
                                <div class="project_hoverbox">
                                    <a href="https://olopk.github.io/project2/" target="_blank">
                                        <span>LIVE</span>
                                    </a>
                                    <a href="https://github.com/olopk/project2" target="_blank">
                                        <span>CODE</span>
                                    </a>
                                </div>
                            </div>
                            <p class="project_text">First learning project.</p>
                            <p class="project_text">Stack: HTML5, CSS3, JS</p>
                        </div>
                    </div>
                    <div class="arrow" id="arrow-down">
                        <img src="./images/down.png">
                    </div>
                    `
                    break;
        }
        $("#"+link).addClass('nav-blocks__block--active').animate({backgroundColor: '#0096B3'}, 1000);        
        $(".maincontent").html(content).css("display", "none").fadeIn(1500);
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
    if($(e.target).parent().is('.project_box')){
        $('.project_hoverbox').fadeOut('slow')
        $('.project_text').slideUp('slow')
        $(e.target).siblings('.project_hoverbox').css('display', 'flex').hide().fadeIn('slow')
        $(e.target).parent().siblings($('.project_text')).slideDown('slow')
        return
    }
    if($('.maincontent').has('.projects').length){
        $('.project_hoverbox').fadeOut('slow')
        $('.project_text').slideUp('slow')
        return;
    }

    // CONTACT FORM SECTION
        // SENDING MSG
        if($(e.target).is(".contact_btn--send")){
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
                    $(resp).insertBefore(".contact");
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
            return;
        }
        // CLEARING FORM
        if($(e.target).is(".contact_btn--reset")){
            event.preventDefault();
            $(".contact_input, .contact_textarea").val("");
            return;
        }
    })
})
