const nContacts = document.querySelector('.contacts-number'),
number = nContacts.querySelector('.number'),
rContact = document.querySelector('.real-contacts'),
eContact = rContact.querySelectorAll('.c-sec'),
mBtns = document.querySelectorAll("#menue")
number.innerHTML = eContact.length

mBtns.forEach(btn =>{
    btn.addEventListener('click' ,() =>{
        const sec = btn.parentElement
        const x = sec.querySelector('.back') 

      

        // kan wuu shaqeenaa toggle ahaan uu u samenaa 
        if (x.style.display === 'flex'){
            x.style.display = 'none'
          }
          else{
            x.style.display = 'flex'
          }      
      
      // lkn kan ma shaqenayo classkana waa mid jiro csska mana shaqenaayo

      x.classList.toggle('hide')    

      
    });
});


const searchInput = document.getElementById('search')

searchInput.addEventListener('keyup' , e =>{
  value = e.target.value.toLowerCase();
  console.log(value)
  const names = document.querySelectorAll('.r-name')
  names.forEach(name =>{
    const isVisible = name.textContent.toLocaleLowerCase().includes(value);
    if (!isVisible){
      name.parentElement.parentElement.parentElement.style.display = 'none'
    }
    else{
      name.parentElement.parentElement.parentElement.style.display = 'flex'

    }
  })

})