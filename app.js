const selectButton = document.querySelector('.dropdown-select')

const dropdownList = document.querySelector('.dropdown-list')

const dropdownOptionsList = document.querySelectorAll('.dropdown-option')
const dropdownNextButton = document.querySelector('.dropdown-next')

function toggleDropdown(){
    dropdownList.classList.toggle('is-active')
}
selectButton.addEventListener('click',toggleDropdown)

dropdownOptionsList.forEach((item)=>{
    item.addEventListener('click',()=>{
        selectButton.innerHTML=item.innerHTML
        dropdownNextButton.removeAttribute('disabled')
        dropdownNextButton.classList.add('is-active')
        dropdownList.classList.remove('is-active')
    })
})

window.addEventListener('load',()=>{
    selectButton.innerHTML='지점을 선택해 주세요'
})

dropdownNextButton.addEventListener('click',()=>{
    alert(`${selectButton.innerHTML}을 고르셨습니다.`)
}
)
