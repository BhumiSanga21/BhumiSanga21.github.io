document.getElementById("year").innerText = "© " + new Date().getFullYear() + " Bhumika Sanga";
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#0f172a;
    color:white;
}

/* Navbar */
header{
    display:flex;
    justify-content:space-between;
    padding:20px 40px;
    background:#020617;
    position:sticky;
    top:0;
}

nav a{
    margin-left:20px;
    color:white;
    text-decoration:none;
}

nav a:hover{
    color:#38bdf8;
}

/* Hero */
.hero{
    text-align:center;
    padding:100px 20px;
    background:linear-gradient(135deg,#6366f1,#06b6d4);
}

/* Sections */
section{
    padding:60px 40px;
}

/* Skills */
.skills span{
    background:#1e293b;
    padding:10px 15px;
    margin:10px;
    display:inline-block;
    border-radius:20px;
}

/* Cards */
.card{
    background:#1e293b;
    padding:20px;
    margin:15px 0;
    border-radius:10px;
    transition:0.3s;
}

.card:hover{
    transform:translateY(-5px);
}

/* Contact */
form{
    display:flex;
    flex-direction:column;
    max-width:400px;
}

input,textarea{
    margin:10px 0;
    padding:10px;
    border-radius:5px;
    border:none;
}

button{
    padding:10px;
    background:#6366f1;
    color:white;
    border:none;
    cursor:pointer;
}

button:hover{
    background:#4f46e5;
}

/* Social */
.social a{
    margin-right:15px;
    color:#38bdf8;
}

/* Footer */
footer{
    text-align:center;
    padding:20px;
    background:#020617;
}
// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});
