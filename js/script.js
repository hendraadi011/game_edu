// toggle class active 

const navbarNav = document.querySelector('.navbar-nav');


// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle('active');
    console.log('halo')
}

//klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})


document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault(); // Menghentikan tindakan bawaan dari elemen <a>
   
    const element = document.documentElement;
    
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari, and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }

    // window.location.href = 'game.html'; 

   
  });