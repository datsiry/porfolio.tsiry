window.onload= function () {
    var competences = document.getElementById('competences_link')
    competences.addEventListener('click',(e)=>{
        location.reload()
    })
    const circles = document.querySelectorAll('.circle')
    circles.forEach(e => {
        var dots = e.getAttribute('data-dots');
        var marked = e.getAttribute('data-percent')
        var percent = Math.floor(dots * marked / 100);
        var rotate = 360 / dots
        var points = ""
        for (i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
        }
        e.innerHTML = points
        const pointsMarked = e.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked')
        }
    })

}
// setInterval(anim, 4000)
