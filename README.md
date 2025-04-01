# catazkaraoke
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Noite de Karaokê</title>
  <style>
    /* Configuração geral */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    /* Cartaz */
    .poster {
      position: relative;
      width: 600px;
      height: 900px;
      background: url('microfone.jpg') no-repeat center;
      background-size: cover;
      border-radius: 10px;
      overflow: hidden;
      border: 5px solid white;
    }
    /* Sobreposição escura para contraste */
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    /* Notas Musicais */
    .notes {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .note {
      position: absolute;
      font-size: 30px;
      color: #ffd700;
      animation: float 5s linear infinite;
    }
    @keyframes float {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      50% {
        transform: translateY(-50%);
        opacity: 1;
      }
      100% {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
    /* Texto do evento */
    .event-info {
      position: absolute;
      bottom: 20px;
      width: 100%;
      text-align: center;
      color: white;
      opacity: 0;
      z-index: 3;
      animation: fadeIn 2s forwards 3s; /* Aparece após 3 segundos */
    }
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .details {
      font-size: 24px;
      line-height: 1.4;
    }
  </style>
</head>
<body>
  <div class="poster">
    <div class="overlay"></div>
    <div class="notes" id="notes"></div>
    <div class="event-info">
      <div class="title">Noite de Karaokê</div>
      <div class="details">
        Venha cantar com a gente! 🎤<br>
        📅 Data: 24 de Abril | 🕕 18h<br>
        📍 Local: Centro Cultural Carro de Boi do Dário
      </div>
    </div>
  </div>

  <script>
    // Criando notas musicais animadas
    const notesContainer = document.getElementById('notes');
    const notesSymbols = ['♪', '♫', '♬', '♩'];
    const totalNotes = 15;

    for (let i = 0; i < totalNotes; i++) {
      const note = document.createElement('div');
      note.className = 'note';
      note.style.left = Math.random() * 100 + '%';
      note.style.animationDuration = (3 + Math.random() * 3) + 's';
      note.style.animationDelay = Math.random() * 2 + 's';
      note.innerText = notesSymbols[Math.floor(Math.random() * notesSymbols.length)];
      notesContainer.appendChild(note);
    }
  </script>
</body>
</html>

