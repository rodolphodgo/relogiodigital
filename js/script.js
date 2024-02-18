const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours(); /*Atribuindo a hora exata a variável hr*/
    let min = dateToday.getMinutes(); /*Atribuindo o minuto exato a variável min*/
    let seg = dateToday.getSeconds(); /*Atribuindo o segundo exato a variável seg*/
    let saud = document.getElementById('saudacao');

    if (hr <10) hr = '0' + hr;
    if (min <10) min = '0' + min;
    if (seg <10) seg = '0' + seg;
  
    if (hr < 12) {
        saud = "Bom dia";
      } else if (hr < 18) {
        saud = "Boa tarde";
      } else {
        saud = "Boa noite";
      }
  
    horas.textContent = hr; /*textContent altera o que está escrito no span pra mostrar o que está dentro da variável hr*/
    minutos.textContent = min;
    segundos.textContent = seg;
    saudacao.textContent = saud;

})

const calendario = setInterval(function calendario() {
    dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado");
    monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
    let calendarToday = new Date();
    let sem = dayName[calendarToday.getDay()];
    let di = calendarToday.getDate();
    let me = monName[calendarToday.getMonth()];
    let an = calendarToday.getFullYear();
    
    semana.textContent = sem;
    dia.textContent = di;
    mes.textContent = me;
    ano.textContent = an;

})