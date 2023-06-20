    let hour = 0
    let minute = 0
    let second = 0
    let mili = 0

    let cron
    
    const crono = document.querySelector('#crono')

   function inicio() {
        pause()
        cron = setInterval(() => {timer() }, 10)
   }

    function pause(){
        clearInterval(cron)
        //limpar o setinterval
    }

    function zero() {
        hour = 0
        minute = 0
        second = 0
        mili = 0
        crono.textContent= '00:00:00:00'
    }

    const timer = () => {
        if ((mili += 10) == 1000) {
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

    
