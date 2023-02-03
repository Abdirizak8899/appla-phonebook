const searchInput = document.querySelector('#search'),
contacts = document.querySelector('.real-contacts'),
rContact = contacts.querySelectorAll('.r-name')


searchInput.addEventListener('input', e =>{
    const vlaue = e.value.toLocaleLowerCase()
    rContact.forEach(contact =>{
        const isVisible = contact.textContent.toLocaleLowerCase().includes(value)
        contact.parentElement.parentElement.classList.toggle('hide' , !isVisible)
    })
    
})