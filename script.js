const menu = document.getElementById('menu')
const header = document.getElementById('header')
const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const icn1 = document.getElementById('icn1')
const icn2 = document.getElementById('icn2')
const form = document.getElementById('form')


menu.addEventListener('click', () => {
    if (header.style.display === 'block') {
        header.style.display = 'none'
    } else {
        header.style.display = 'block'
    }
})

inp1.addEventListener('change', ()=>{
    // e.preventDefault()
    if(!inp1.value){
        icn1.style.color = 'red'
        inp1.style.border = '2px solid red'
    }else{
        icn1.style.color = 'green'
        inp1.style.border = '2px solid green'
    }

})

inp2.addEventListener('change', ()=>{
    // e.preventDefault()
    if(!inp2.value){
        icn2.style.color = 'red'
        inp2.style.border = '2px solid red'
    }else{
        icn2.style.color = 'green'
        inp2.style.border = '2px solid green'
    }

})


form.addEventListener('submit', ()=>{

    if(!inp1.value && !inp2.value){
        icn1.style.color = 'red'
        inp1.style.border = '2px solid red'
        icn2.style.color = 'red'
        inp2.style.border = '2px solid red'
    }else{
        icn1.style.color = 'green'
        inp1.style.border = '2px solid green'
        icn2.style.color = 'green'
        inp2.style.border = '2px solid green'
    }

})
