document.getElementById("body").addEventListener('mousemove',(e)=>{
    let eye = document.querySelectorAll(".eye");
    eye.forEach((eye)=>{
        let x = eye.getBoundingClientRect().left + (eye.clientWidth/2)
        let y = eye.getBoundingClientRect().top + (eye.clientHeight/2);
        let radian = Math.atan2(e.pageX-x,e.pageY-y);
        let rot = (radian * (180/Math.PI) * -1);
        eye.style.transform = `rotate(${rot}deg)`;
    })
})