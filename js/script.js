setInterval(function() {

  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  let today = new Date();
  let hr = today.getHours(); /*Atribuindo a hora exata a variável hr*/
  let min = today.getMinutes(); /*Atribuindo o minuto exato a variável min*/
  let sec = today.getSeconds(); /*Atribuindo o segundo exato a variável seg*/
  let salt = document.getElementById('salutation');

  if(hr < 10){
    hr = "0" + hr;
  }
  if(min < 10){
    min = "0" + min;
  }
  if(sec < 10){
    sec = "0" + sec;
  }

  if (hr < 12) {
    salt = "Bom dia";
  } else if (hr < 18) {
    salt = "Boa tarde";
  } else {
    salt = "Boa noite";
  }

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
  salutation.textContent = salt;

})

setInterval(function calendario() {

    dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado");
    monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");
    
    let today = new Date();
    let we = dayName[today.getDay()];
    let da = today.getDate();
    let mo = monName[today.getMonth()];
    let ye = today.getFullYear();
    
    week.textContent = we;
    day.textContent = da;
    month.textContent = mo;
    year.textContent = ye;
    
})