// Seleciona o contêiner onde as notas musicais aparecerão
const notesContainer = document.getElementById('notes');

// Símbolos de notas musicais para animação
const notesSymbols = ['♪', '♫', '♬', '♩'];
const totalNotes = 15; // Número de notas que aparecerão ao mesmo tempo

// Função para criar notas musicais animadas
function createMusicalNotes() {
    for (let i = 0; i < totalNotes; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.style.left = Math.random() * 100 + '%'; // Posição aleatória na largura do cartaz
        note.style.animationDuration = (3 + Math.random() * 3) + 's'; // Tempo aleatório de animação
        note.style.animationDelay = Math.random() * 2 + 's'; // Delay para notas surgirem em momentos diferentes
        note.innerText = notesSymbols[Math.floor(Math.random() * notesSymbols.length)]; // Escolhe uma nota aleatória

        notesContainer.appendChild(note);

        // Remover a nota após a animação para evitar sobrecarga
        setTimeout(() => {
            note.remove();
        }, 6000);
    }
}

// Inicia a criação de notas musicais de forma contínua
setInterval(createMusicalNotes, 3000);
