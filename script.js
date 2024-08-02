function atualizarRelogio() {
    const agora = new Date ()
    const hora = String(agora.getHours()).padStart(2, '0')
    const minutos = String(agora.getMinutes()).padStart(2,'0')
    const segundos = String(agora.getSeconds()).padStart(2, '0')

    document.getElementById('horas').textContent = hora
    document.getElementById('minutos').textContent = minutos
    document.getElementById('segundos').textContent = segundos
    
}

atualizarRelogio()
setInterval(atualizarRelogio, 1000)