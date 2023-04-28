const express = require('express');
const app = express();
const moment = require('moment');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const electionDate = moment('14/05/2023 08:00', 'DD/MM/YYYY HH:mm');
  const now = moment();
  const duration = moment.duration(electionDate.diff(now));
  let days = Math.floor(duration.asDays());
  let hours = Math.floor(duration.asHours() % 24);
  let minutes = Math.floor(duration.asMinutes() % 60);
  let seconds = Math.floor(duration.asSeconds() % 60);

  const countdownDiv = `
    <div class="countdown">
      <h1>Seçimlere kalan süre:</h1>
      <p>${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye kaldı.</p>
    </div>
  `;

  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script>
          // Geri sayımın otomatik olarak güncellenmesi için JavaScript kullanıyoruz.
          // setInterval, belirli bir aralıkta bir işlevi yineler.
          setInterval(function() {
            // Şu anki zamanı al
            const now = new Date();
            // Seçim tarihini ayarla
            const electionDate = new Date('2023-05-14T08:00:00');
            // Aradaki farkı hesapla
            const duration = electionDate - now;
            // Saniyeleri, dakikaları, saatleri ve günleri hesapla
            days = Math.floor(duration / (1000 * 60 * 60 * 24));
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((duration / 1000 / 60) % 60);
            seconds = Math.floor((duration / 1000) % 60);
            // HTML içeriğini güncelle
            document.querySelector('.countdown p').innerHTML = days + ' gün, ' + hours + ' saat, ' + minutes + ' dakika, ' + seconds + ' saniye kaldı.';
          }, 1000);
        </script>
      </head>
      <body>
        ${countdownDiv}
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Web sitesi http://localhost:${port} adresinde yayında`);
});
