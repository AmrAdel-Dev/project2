let addBtn = document.querySelector('.addBtn')
let showBtn = document.querySelector('.showBtn')
let names = []
let ages = []
let skills = []

addBtn.onclick = function(name, age, skillsOP){
    name = document.getElementById('name')
    age = document.getElementById('age')
    skillsOP = document.getElementById('skills').value

    let nameError1 = document.querySelector('#nameError1')
    let nameError2 = document.querySelector('#nameError2')
    let ageError1 = document.querySelector('#ageError1')
    let ageError2 = document.querySelector('#ageError2')
    let skillsError = document.querySelector('#skillsError')



    if (name.value === '') {
        nameError1.style.display = 'block'
    } else {
        nameError1.style.display = 'none'
    }

    if (names.includes(name.value)) {
        nameError2.style.display = 'block'
    } else {
        nameError2.style.display = 'none'
    }



    if (isNaN(parseInt(age.value))) {
        ageError1.style.display = 'block'
    } else {
        ageError1.style.display = 'none'
    }

    if (age.value === '') {
        ageError2.style.display = 'block'
    } else {
        ageError2.style.display = 'none'
    }



    if (skillsOP === '') {
        skillsOP = 'Not Have Any Skills'
    }

    if (!skillsOP.includes(',') && skillsOP !== '') {
        skillsError.style.display = 'block'
    } else {
        skillsError.style.display = 'none'
    }



    if (name.value !== '' && !isNaN(parseInt(age.value)) && age.value !== '' && !names.includes(name.value)) {
        names.push(name.value)
        ages.push(parseInt(age.value))
        if (skillsOP !== '') {
            skills.push(skillsOP.split(',').map(e => e.trim()))
        }
        console.log(names);
        console.log(ages);
        console.log(skills);
        nameError1.style.display = 'none'
        nameError2.style.display = 'none'
        ageError1.style.display = 'none'
        ageError2.style.display = 'none'
        skillsError.style.display = 'none'
    }
}

showBtn.onclick = function(){
    if (names.join('') !== '' && ages.join('') !== '') {
        let newWindow = window.open('', '_blank')
        for (let i = 0; i < names.length; i++) {
            let Info = document.createElement('h3')
            let InfoText = document.createTextNode(`${i + 1}- ${names[i]}: The Age Is ${ages[i]}`)
            Info.id = `${i+1}`
            Info.className = 'Info'
            Info.appendChild(InfoText)
            let PSs = document.createElement('p')
            PSs.id = `PSs${i+1}`
            PSs.className = 'PSs'
            let PSsText = document.createTextNode(`Skills: ${skills[i].join(' | ')}`)
            PSs.appendChild(PSsText)
            PSs.style.cssText = 'color: rgb(185, 185, 185); display: none; line-height: 2;'
            newWindow.document.body.appendChild(Info)
            newWindow.document.body.appendChild(PSs)
            Info.onclick = function (e){
                let hidd = newWindow.document.getElementById(`PSs${e.target.id}`)
                newWindow.console.log(hidd);
                if (hidd.style.display === 'block') {
                    hidd.style.display = 'none'
                } else if (hidd.style.display === 'none') {
                    hidd.style.display = 'block'
                }
            }
        }
    }
}