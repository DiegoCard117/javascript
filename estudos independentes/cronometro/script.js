    let hour = 0
    let minute = 0
    let second = 0
    let mili = 0

    let cron
    
    const crono = document.querySelector('#crono') // paragrafo do cronometro

   function inicio() {
        pause() //pausar para parar de contar
        crono.classList = ''
        cron = setInterval(() => {timer() }, 10)  //rodar timer a cada 10 milisegundos
   }

    function pause(){
        clearInterval(cron)  //deixar o intervalo em 0 segundos
        crono.classList = 'pause'
    }

    function zero() {
        pause()
        crono.classList = ''
        hour = 0
        minute = 0
        second = 0
        mili = 0
        crono.textContent= '00:00:00:00'
    }

    const timer = () => {
        if ((mili += 10) == 1000) { //mili recebe mili + 10, quando mili chegar a 1000 ele zera e segundos recebe +1
            mili = 0
            second++
        }
        if (second == 60) {
            second = 0
            minute++
        }
        if (minute == 60) {
            minute = 0
            hour++
        }
        crono.textContent = `${hour}:${minute}:${second}:${mili}`
    }

    
