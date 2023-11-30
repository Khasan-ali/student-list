let elTbody = document.getElementById('userData')

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
        <img src="./img/pencil.png" alt="deletejon" width="34" height="34">
        </td>
        <td class="main__table-td">
        <img src="./img/delete.png" alt="deletejon" width="34" height="34">
        </td>
        </tr>
        `

        element.innerHTML += rows
    })
}


renderTable(students, elTbody)

const elModalBtn = document.querySelector('.header__btn')
const elBody = document.querySelector('body')

elModalBtn.addEventListener('click', () => {

    let newModalSection = document.createElement('div')
    let newModalHeroSection = document.createElement('div')
    let newModalHeading = document.createElement('h2')
    let newModalImg   = document.createElement('img')

    newModalHeading.textContent = 'Add student';
    

    elBody.appendChild(newModalSection)
    newModalSection.appendChild(newModalHeroSection)
    newModalHeroSection.appendChild(newModalHeading)
    newModalHeroSection.appendChild(newModalImg)

    
    // let rows = `
    // <tr class="main__table-body-tr">
    // <td class="main__table-td">${dates.id}</td>
    // <td class="main__table-td">${dates.name}</td>
    // <td class="main__table-td">${dates.markedDate}</td>
    // <td class="main__table-td">${dates.mark}</td>
    // <td class=${dates.mark >= 100 ? 'main__table-marc' : 'main__table-markss'}>${dates.mark >= 100 ? 'Pass' : 'Fail'}</td>
    // <td class="main__table-td">
    // <img src="./img/pencil.png" alt="deletejon" width="34" height="34">
    // </td>
    // <td class="main__table-td">
    // <img src="./img/delete.png" alt="deletejon" width="34" height="34">
    // </td>
    // </tr>
    // `

    // element.innerHTML += rows
})
