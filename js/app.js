
let cres  = document.querySelector('.menu__logo img'),
    menu =  document.querySelector('.menu'),
    menuGroup  = document.querySelectorAll('.slider')

cres.addEventListener('click' , function(){
    console.log('salom');
    menu.style.transform= "translateX(-100%)";
})

for(let i = 0 ; i<menuGroup.length; i++){
    menuGroup[i].addEventListener('click' , function(){
        menu.style.transform = "translateX(0%)";
        // console.log('salom');
    })
}

// wow js start
new WOW().init();
// wow js end 

