// SCHEDULE AND DASHBOARD
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.dsh-fixed').classList.remove('d-none-lapi')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.querySelector('.dsh-fixed').classList.add('d-none-lapi')
})

let isLoading = true
let isError = false
let data
let URL1 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients'
let URL2 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'
let patientsData = document.querySelector('.dsh-grd-sect4')
let activitiesPar = document.querySelector('.activ-par')

fetch(URL1)
  .then((resp) => {
    if (resp.status >= 200 && resp.status <= 299) {
      return resp.json()
    } else {
      isLoading = false
      isError = true
      throw new Error(resp.statusText)
    }
  })
  .then((data) => {
    const { totalPatients, waitinfRoom, appointments } = data
    const appointmentss = (arr) => {
      return arr.map((appointee) => {
        const { name, createdAt } = appointee
        let d = new Date(createdAt)
        let hour, mainHour, minute, timeFrame
        if (d.getHours() > 11) {
          hour = d.getHours() - 12
          timeFrame = 'pm'
          if (hour <= 9) {
            mainHour = '0' + hour
          } else {
            mainHour = hour
          }
        } else {
          hour = d.getHours()
          timeFrame = 'am'
          if (hour <= 9) {
            mainHour = '0' + hour
          } else {
            mainHour = hour
          }
        }
        if (d.getMinutes() <= 9) {
          minute = '0' + d.getMinutes()
        } else {
          minute = d.getMinutes()
        }

        time = `${mainHour}:${minute}${timeFrame}`
        console.log(time)
        patientsData.innerHTML += `<div class="dsh-grd-time width10">
                  <p class="p7-dash mn">${time}</p>
                </div>
                <div class="dsh-grd-info width11 mb2">
                  <div class="between-row">
                    <div class="flex">
                      <div class="dsh-grd-info-siz mr2">
                        <img src="../images/dsh-grd-info-pers.svg" alt="" class="appointeeImage"/>
                      </div>
                      <p class="h6-dsh-t appointeeName">${name}</p>
                    </div>
                    <div>
                      <img src="../images/three-dots.svg" alt="" />
                    </div>
                  </div>
                </div>`
      })
    }
    console.log(appointmentss(appointments))
    document.querySelector('.noOfAppointent').innerHTML = appointments.length
    document.querySelector('.appointments').innerHTML = appointments.length
    document.querySelector('.noOfPatients').innerHTML = totalPatients
    document.querySelector('.patients').innerHTML = totalPatients
    document.querySelector('.noOfWaitings').innerHTML = waitinfRoom
  })
  .then((error) => console.log(error))

function getData() {
  if (isLoading) {
    return `<h1>Loading...</h1>`
  } else if (isError) {
    return `<h1>Error...</h1>`
  } else {
    return `<h1>${totalPatients}</h1>`
  }
}

getData()

fetch(URL2)
  .then((resp) => {
    if (resp.status >= 200 && resp.status <= 299) {
      return resp.json()
    } else {
      isLoading = false
      isError = true
      throw new Error(resp.statusText)
    }
  })
  .then((data) => {
    console.log(data)
    const { activities } = data
    console.log(activities)
    activities.map((activity) => {
      if (activity.type === 'report') {
        activitiesPar.innerHTML += `
         <div class="flex mt7 activ-child1">
                  <div class="dsh-activ-siz mr2 center-row">
                    <div class="dsh-activ-siz2">
                      <img
                        src="../images/dsh-activ-card.svg"
                        alt=""
                        class="img"
                      />
                    </div>
                  </div>
                  <p class="p4-dsh-mn width11">
                    ${activity.title}
                  </p>
                </div>
        `
      } else {
        activitiesPar.innerHTML += `
       <div class="flex mt7 activ-child2">
                  <div class="dsh-activ-siz mr2 center-row">
                    <div class="dsh-activ-siz2">
                      <img
                        src="../images/dsh-activ-cir.svg"
                        alt=""
                        class="img"
                      />
                    </div>
                  </div>
                  <p class="p4-dsh-mn width11">
                    There are 3 new ready reports for Tosin Odubela
                  </p>
                </div>
       `
      }
    })
    console.log(appointmentss(appointments))
    document.querySelector('.noOfAppointent').innerHTML = appointments.length
    document.querySelector('.appointments').innerHTML = appointments.length
    document.querySelector('.noOfPatients').innerHTML = totalPatients
    document.querySelector('.patients').innerHTML = totalPatients
    document.querySelector('.noOfWaitings').innerHTML = waitinfRoom
  })
  .then((error) => console.log(error))
