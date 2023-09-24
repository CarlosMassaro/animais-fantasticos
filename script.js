 const tabMenu = document.querySelectorAll('.js-tabmenu li');
 const tabContent = document.querySelectorAll('.js-tabcontent section');

function activeTab(index) {
  tabContent.forEach((section)=>{
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});



const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  console.log(section);
  
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', scrollToSection);
});