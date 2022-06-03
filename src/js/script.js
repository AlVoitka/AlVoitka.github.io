
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
      

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
        modalOverlay.style.display="block";         
        modal.style.display="block"; 
        
     })

      modalClose.addEventListener('click', ()=> {
        modalOverlay.style.display="none";          
        modal.style.display="none";
      })

      modalOverlay.addEventListener('click', (e)=> {
        if(e.target === modalOverlay) {
          modalOverlay.style.display="none"; 
        }
      })




// new WOW().init();      
      
      
    
      