setInterval(function() {
    const now = new Date();
    const electionDate = new Date('2023-05-14T08:00:00');
    const duration = electionDate - now;
    
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((duration / 1000 / 60) % 60);
    let seconds = Math.floor((duration / 1000) % 60);
    document.querySelector('.countdown p').innerHTML = days + ' gün, ' + hours + ' saat, ' + minutes + ' dakika, ' + seconds + ' saniye';
  }, 1000);
  

 
  

  
