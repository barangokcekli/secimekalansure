setInterval(function() {
  const now = new Date();
  const electionDate = new Date('2023-05-28T08:00:00');
  const duration = electionDate - now;
  
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((duration / 1000 / 60) % 60);
  let seconds = Math.floor((duration / 1000) % 60);
  document.querySelector('.countdown .timer').innerHTML = '<span class="value">' + days + '</span><span class="txt">gün</span><span class="value">' + hours + '</span><span class="txt">saat</span><span class="value">' + minutes + '</span><span class="txt">dakika</span><span class="value">' + seconds + '</span><span class="txt">saniye</span>';

  if (duration <= 0) {
      const electionEnded = new Date('2023-05-28T17:00:00');
      var duration2 = electionEnded - now;
      let hours2 = Math.floor((duration2 / (1000 * 60 * 60)) % 24);
      let minutes2 = Math.floor((duration2 / 1000 / 60) % 60);
      let seconds2 = Math.floor((duration2 / 1000) % 60);
      document.querySelector('.countdown .title').innerHTML = 'OY KULLANMA İŞLEMİNİN BİTMESİNE'
      document.querySelector('.countdown .timer').innerHTML = '<span class="value">' + hours2 + '</span><span class="txt">saat</span><span class="value">' + minutes2 + '</span><span class="txt">dakika</span><span class="value">' + seconds2 + '</span><span class="txt">saniye</span>';
  } 
  if (duration2 <= 0) {
      document.querySelector('.countdown p').innerHTML = '';
      document.querySelector('.countdown .title').innerHTML = 'SEÇİM SONA ERDİ';
      document.querySelector('.countdown p').remove();
      document.querySelector('.countdown .endtitle').remove();
      document.querySelector('.countdown').classList.add('danger');
  }
}, 1000);

 
  

  
