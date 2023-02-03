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
        if (x.style.display === 'flex'){
            x.style.display = 'none'
          }
          else{
            x.style.display = 'flex'
          }      
        
    });
});