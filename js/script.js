let elTbody = document.getElementById('userData')
let elCount = document.querySelector('.main__count-span')
let elMark = document.querySelector('.main__mark')

// let elTemplate = document.getElementById('#template')
function renderTable(date, element) {

    let num;

    let arrLength = students.length
    console.log(arrLength);



    // const studentFragment = document.createDocumentFragment()

    date.map(dates => {
        
        let rows = `
        <tr class="main__table-body-tr">
        <td class="main__table-td">${dates.id}</td>
        <td class="main__table-td">${dates.name}</td>
        <td class="main__table-td">${dates.markedDate}</td>
        <td class="main__table-td">${dates.mark}</td>
        <td class=${dates.mark >= 100 ? 'main__table-marc' : 'main__table-markss'}>${dates.mark >= 100 ? 'Pass' : 'Fail'}</td>
        <td class="main__table-td">
        <img src="./img/pencil.png" alt="deletejon" width="34" height="34">
        </td>
        <td class="main__table-td">
        <img class="main__img" src="./img/delete.png" alt="deletejon" width="34" height="34">
        </td>
        </tr>
        `

        element.innerHTML += rows
    })
    // console.log(studentFragment)
    // element.innerHTML = studentFragment
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

elModalBlur.addEventListener('click', ()=> {
    elModalSec.classList.remove('open-modal')
    elModalBlur.classList.remove('blur-hidden')
})


const elModalForm = document.querySelector('.main__modal')
const elModalName = document.querySelector('.main__modal-name')
const elModalLastname = document.querySelector('.main__modal-lastname')
const elModalMark = document.querySelector('.main__modal-mark')

elModalForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    let rows = `
    <tr class="main__table-body-tr">
    <td class="main__table-td">${++students.id}</td>
    <td class="main__table-td">${elModalName.value}</td>
    <td class="main__table-td">${elModalLastname.value}</td>
    <td class="main__table-td">${elModalMark.value}</td>
    <td class=${elModalMark.value >= 100 ? 'main__table-marc' : 'main__table-markss'}>${elModalMark.value >= 100 ? 'Pass' : 'Fail'}</td>
    <td class="main__table-td">
    <img src="./img/pencil.png" alt="deletejon" width="34" height="34">
    </td>
    <td class="main__table-td"> 
    <img src="./img/delete.png" alt="deletejon" width="34" height="34">
    </td>
    </tr>
    `
    // elTbody.innerHTML = null

    elTbody.innerHTML += rows
    elCount.textContent = ++students.length
    elModalSec.classList.remove('open-modal')
    elModalBlur.classList.remove('blur-hidden')
})