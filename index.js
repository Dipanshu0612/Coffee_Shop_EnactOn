// console.log('Hello World');
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('.navbar_ul a');
// console.log(navLinks);
window.onscroll = () =>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('.navbar_ul a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    let navbar=document.querySelector('.navbar_ul');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.main_menu h1,.main_contact h1', {origin: 'top',delay:300});
ScrollReveal().reveal('.about_1 button,.about_tagline,.main_contact button', {origin: 'bottom',delay:300});
ScrollReveal().reveal('.main_content h1, .main_content p,.main_content button,.about_1 h2, .about_1 p,.menu_cat_items', {origin: 'left',interval: 100});
ScrollReveal().reveal('.main_img,.about_2,.inp2', {origin: 'right'});
ScrollReveal().reveal('.menu_cat_title,.inp1', {origin: 'left'});
ScrollReveal().reveal('.card1, .card2, .card3, .card4', {origin: 'bottom',delay:500,interval: 150});
ScrollReveal().reveal('.cat1, .cat2, .cat3', {origin: 'left',delay:500,interval: 250});
ScrollReveal().reveal('.top_prod_title', {delay:300});


function sendMail(){
    let param={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('feedback').value,
    };

    if(param.name!="" && param.email!="" && param.message!=""){
    let serviceID="service_jexbcgd";
    let templateID="template_mlahfgo";

    emailjs.send(serviceID,templateID,param).then(res=>{
        Toastify({
            text: "Your Message was sent succesfully!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#daa520"
            },
            onClick: function(){} 
          }).showToast();
        document.getElementById('name').value=''
        document.getElementById('email').value=''
        document.getElementById('message').value=''
        res.preventDefault()
    }).catch((err)=> console.log(err));
}
    else{
        Toastify({
            text: "Please complete the form before submitting!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#ff6666"
            },
            onClick: function(){} 
          }).showToast();
    }
}