export const headerBtn = document.getElementById('header')


export function navFunc(){
    headerBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    if (window.scrollY > 400) {
        window.scroll(0, 0)
    }
})
}


