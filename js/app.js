const menue = document.querySelector('#menue')

menue.addEventListener('click' , check)

const check = () =>{
    let x = document.querySelector('.back')
    if (x.style.display === 'flex'){
        x.style.display = 'none'
    }else{
        x.style.display = 'flex'
    }
}