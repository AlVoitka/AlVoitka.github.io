
const closeMenu = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay');

      hamburger.addEventListener('click', ()=> {
          menu.classList.add('active');
      });

      closeMenu.addEventListener('click', ()=> {
        menu.classList.remove('active');
    });


    overlay.addEventListener('click', (e)=> {
      if(e.target === overlay) {
        menu.classList.remove('active');
      }
    })



//// Рейтинг в процентах

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

      counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
      }); 
      
      
/////// Scroll

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();
      menu.classList.remove('active');

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0; 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;


      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});


///// Modal

  const modalOverlay = document.querySelector('.overlay'),
        modal = document.querySelector('.madal'),
        modalClose = document.querySelector('[data-close]'),
        form = document.querySelector('.contacts__form');


        function fadeIn(el) {
          let opacity = 0.01;
          document.querySelector(el).style.display = "block";
          let timer = setInterval(function() {
            if(opacity >= 1) {
              clearInterval(timer);
            }
            document.querySelector(el).style.opacity = opacity;
            opacity += opacity * 0.1;
          }, 5);
        }
  
  
        function fadeOut(el) {
            let opacity = 1;
            let timer = setInterval(function() {
                if(opacity <= 0.1) {
                clearInterval(timer);
                document.querySelector(el).style.display = "none";
                }
                document.querySelector(el).style.opacity = opacity;
                opacity -= opacity * 0.1;
            }, 20);
        }
      

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
        fadeIn('.overlay');
      })

      modalClose.addEventListener('click', ()=> {
        fadeOut('.overlay');
      })

      modalOverlay.addEventListener('click', (e)=> {
        if(e.target === modalOverlay) {
          fadeOut('.overlay');
        }
      })





      
    
      