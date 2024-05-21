let pause = document.getElementById('pause')
let play = document.getElementById('play')
let progress = document.getElementById('progressBar')
let bgm = document.getElementById('bgm')

function pauseSong(){
    pause.style.display = "none"
    play.style.display = "flex"
    bgm.pause()
    bgm.currentTime = 0
}

function playSong(){
    pause.style.display = "flex"
    play.style.display = "none"
    bgm.play()
    bgm.volume = 0.1
}

bgm.addEventListener('timeupdate', ()=>{
    let percentage = Math.floor((bgm.currentTime/bgm.duration)*100)
    progress.style.width = percentage+'%'
})

setInterval(()=>{
    if(progress.style.width===100+'%'){
        pause.style.display = "flex"
        play.style.display = "none"    
    }
}, 1000)





