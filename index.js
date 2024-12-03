console.log('Hello World');
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('.navbar_ul a');
console.log(navLinks);
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