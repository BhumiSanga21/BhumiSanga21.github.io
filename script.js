// ===== Typing Effect =====
const roles = ["Web Developer", "IT Student", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect(){
    let current = roles[roleIndex];

    if(!isDeleting){
        typingElement.innerHTML = current.substring(0, charIndex++);
        if(charIndex > current.length){
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.innerHTML = current.substring(0, charIndex--);
        if(charIndex === 0){
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();


// ===== Scroll Reveal Animation =====
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el=>{
    observer.observe(el);
});


// ===== Smooth Scroll =====
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});


// ===== Dynamic Year =====
document.getElementById("year").innerText =
"© " + new Date().getFullYear() + " Bhumika Sanga";


// ===== Cursor Glow Effect (Cool Feature 🔥) =====
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "15px";
glow.style.height = "15px";
glow.style.borderRadius = "50%";
glow.style.background = "#00c6ff";
glow.style.pointerEvents = "none";
glow.style.boxShadow = "0 0 20px #00c6ff";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
