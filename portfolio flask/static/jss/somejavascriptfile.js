const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')

        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))



const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
