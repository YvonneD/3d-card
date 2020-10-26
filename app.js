const card=document.querySelector('.card')
const container=document.querySelector('.container')
const title=document.querySelector('.title')
const phone=document.querySelector('.phone img')
const purchase=document.querySelector('.purchase button')
const description=document.querySelector('.info h3')
const colors=document.querySelector('.colors')

container.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/25
    let yAxis=(window.innerHeight/2-e.pageY)/25
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container.addEventListener('mouseenter',e=>{
    card.style.transition='none'
    title.style.transform='translateZ(150px)'
    phone.style.transform='translateZ(150px) rotateZ(-35deg)'
   purchase.style.transform='translateZ(120px)'
   description.style.transform='translateZ(150px)'
   colors.style.transform='translateZ(150px)'
})

container.addEventListener('mouseleave',e=>{
    card.style.transition='all 0.5s ease-out'
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    title.style.transform='translateZ(0)'
    phone.style.transform='translateZ(0) rotateZ(0)'
   purchase.style.transform='translateZ(0)'
   description.style.transform='translateZ(0)'
})