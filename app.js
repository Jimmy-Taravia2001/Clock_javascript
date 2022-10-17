setInterval(setclock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')

function setclock(){
    const currentdate = new Date()
    const secondratio = currentdate.getSeconds() / 60
    const minuteratio = (secondratio + currentdate.getMinutes()) / 60 
    const hourratio = (minuteratio + currentdate.getHours()) / 12

    setRotation(hourhand ,hourratio)
    setRotation(minutehand ,minuteratio)
    setRotation(secondhand ,secondratio)

}

function setRotation(element, rotationratio){
    element.style.setProperty('--rotation', rotationratio * 360)
}

setclock()