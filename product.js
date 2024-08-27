const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const product = document.getElementById("product")
const viewimg = document.querySelector(".main-img img:first-child").clientWidth
const iimg = document.querySelector(".main-img img:nth-child(4)").clientWidth
const clickimg = document.querySelectorAll(".show-img")
const imageframe = document.querySelector(".main-img")

let imgid 
clickimg.forEach((img)=>{
    img.addEventListener("click",()=>{
        imgid = img.dataset.id
        img.classList.add("border")
        moveimg()

        clickimg.forEach((img)=>{
            img.classList.remove("border")
        })
        img.classList.add("border")
    })
    
    
})

function moveimg(){
     const formula = (imgid-1)*viewimg
     imageframe.style.transform=`translateX(${-formula}px)`
}




let num = 1
minus.addEventListener("click",()=>{
    if(num>=1){
        num = num - 1
        product.value = num
    }   
})
plus.addEventListener("click",()=>{
    if(num>=0 && num<5){
        num = num + 1
        product.value = num
    }
    
})
