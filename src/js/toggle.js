export let darkMode = true
export const buttonToggle = document.getElementById('switch')

export function toggleMode(){
    buttonToggle.addEventListener('click', (event) => {
        document.documentElement.classList.toggle('light')
        const mode = darkMode ? 'light' : 'dark'
        darkMode = !darkMode
    })
}


