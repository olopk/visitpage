$(document).ready(function(){
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
    $(".maincontent").html(
        `<p class="maincontent__name">Aleksander Wojas</p>
        <div class="maincontent__logo">
            <div class="maincontent__letter--a">
                <img src="/images/A.png" alt="A">
            </div>
            <div class="maincontent__letter--w">
                <img src="/images/W.png" alt="W">
            </div>
        </div>`
    )
    $(".maincontent__letter--a img").delay(1200).animate({'margin-right': '-33px'}, 1000)
    
    $(".sidedrawer__nav ul li a").click(()=>{
        event.preventDefault();
        const link = event.target.getAttribute('href').slice(1)
        let content;

        $(".nav-blocks__block").removeClass('nav-blocks__block--active').animate({backgroundColor: '#fff'}, 300);

        switch(link){
            case 'home':
                content = `<p class="maincontent__name">Aleksander Wojas</p>
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
        }
        $("#"+link).addClass('nav-blocks__block--active').animate({backgroundColor: '#0096B3'}, 1000);        
        $(".maincontent").html(content).css("display", "none").fadeIn(1500);
    })

})
