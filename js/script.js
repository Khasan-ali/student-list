let elTbody = document.getElementById('userData')
let elCount = document.querySelector('.main__count-span')
let elMark = document.querySelector('.main__mark')
let elRightMarks = document.querySelector('.main__mark')

function renderTable(date, element) {

    date.map(dates => {

        let rows = `
        <tr class="main__table-body-tr">
        <td class="main__table-td">${dates.id}</td>
        <td class="main__table-td">${dates.name}</td>
        <td class="main__table-td">${dates.markedDate}</td>
        <td class="main__table-td">${dates.mark}</td>
        <td class=${dates.mark >= 100 ? 'main__table-marc' : 'main__table-markss'}>${dates.mark >= 100 ? 'Pass' : 'Fail'}</td>
        <td class="main__table-td">
        <img src="./img/pencil.png" alt="deletejon" width="34" height="34" onclick=edit(${dates.id})>
        </td>
        <td class="main__table-td">
        <img class="main__img" src="./img/delete.png" alt="deletejon" width="34" height="34" onclick=deleteElement(${dates.id})>
        </td>
        </tr>
        `

        element.innerHTML += rows
    })
    let a = date.filter(row => row.mark >= 100)

    elRightMarks.textContent = `${((a.length / date.length) * 100).toFixed(2)}%`

    elCount.textContent = date.length
}


renderTable(students, elTbody)

const elHeaderBtn = document.querySelector('.header__btn')
const elModalSec = document.querySelector('.main__modal-sec')
const elModalBlur = document.querySelector('.main__modal-blur')
const elModalClose = document.querySelector('.main__modal-close-btn')

elHeaderBtn.addEventListener('click', () => {
    elModalSec.classList.add('open-modal')
    elModalBlur.classList.add('blur-hidden')
})

elModalClose.addEventListener('click', () => {
    elModalSec.classList.remove('open-modal')
    elModalBlur.classList.remove('blur-hidden')

})

elModalBlur.addEventListener('click', () => {
    elModalSec.classList.remove('open-modal')
    elModalBlur.classList.remove('blur-hidden')
})


const elModalForm = document.querySelector('.main__modal')
const elModalName = document.querySelector('.main__modal-name')
const elModalLastname = document.querySelector('.main__modal-lastname')
const elModalMark = document.querySelector('.main__modal-mark')

elModalForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    let rows = {
        id: students.length + 1,
        name: elModalName.value,
        lastName: elModalLastname.value,
        mark: elModalMark.value,
        markedDate: new Date().toISOString(),
    }

    elModalName.value = null
    elModalLastname.value = null
    elModalMark.value = null

    students.push(rows)
    elTbody.innerHTML = null
    renderTable(students, elTbody)

    elModalSec.classList.remove('open-modal')
    elModalBlur.classList.remove('blur-hidden')
})

const changeSection = document.querySelector('.main__change-section')
const elModalChangeBlur = document.querySelector('.main__change-blur')
const changeForm = document.querySelector('.main__change')
const changeName = document.querySelector('.main__change-name')
const changeMark = document.querySelector('.main__change-mark')

function edit(id) {
    students.forEach(row => {
        changeForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            if (row.id === id) {
                row.name = changeName.value
                row.mark = changeMark.value
            }
            elTbody.innerHTML = null
            renderTable(students, elTbody)

            
            changeSection.classList.remove('open-modal')
            elModalChangeBlur.classList.remove('blur-hidden')
            
            
        })
    })
    changeName.innerHTML = null

    elModalChangeBlur.addEventListener('click', () => {
        changeSection.classList.remove('open-modal')
        elModalChangeBlur.classList.remove('blur-hidden')
    })


    changeSection.classList.add('open-modal')
    elModalChangeBlur.classList.add('blur-hidden')
}

function deleteElement(id) {
    students = students.filter(deta => deta.id !== id)
    elTbody.innerHTML = null
    renderTable(students, elTbody)
}

let elSearchForm = document.querySelector('.main__left-form')
let searchInput = document.querySelector('.main__left-search')
let searchMarkSmall = document.querySelector('.main__small')
let searchMarkBig = document.querySelector('.main__big')
let searchSelect = document.querySelector('.main__left-select')

elSearchForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let newSearchArr = []
    
    let selectValue = searchSelect.value
    let inputValue = searchInput.value.toLowerCase()

    let markone = searchMarkSmall.value - 0
    let marktwo = searchMarkBig.value - 0
    students.forEach(row => {
        if((row.name.toLowerCase().includes(inputValue))  && selectValue === 'names') {
            return newSearchArr.push(row)
        }else if((markone <= row.mark) && (row.mark <= marktwo) && selectValue === 'mark') {
            return newSearchArr.push(row)
        }
    })

    elTbody.innerHTML = null
    renderTable(newSearchArr, elTbody)

})