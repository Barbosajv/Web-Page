const darkModeClass = 'dark-mode'
const lua = document.querySelector('#lua')
const sol = document.querySelector('#sol')
const body = document.querySelector('body'[0])


function changeMode(){
    changeClasses()
}


function changeClasses(){
    lua.classList.toggle(darkModeClass)
}

lua.addEventListener('click', changeMode)
sol.addEventListener("click", changeClasses);



