document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari form
    let name = document.getElementById('name').value;
    let question = document.getElementById('question').value;

    // Tambahkan pertanyaan ke daftar pertanyaan
    let questionList = document.getElementById('questionsList');
    let newQuestion = document.createElement('div');
    newQuestion.className = 'question';
    newQuestion.innerHTML = `
        <strong>${name}:</strong> <p>${question}</p>
        <form class="answerForm">
            <label for="answer">Jawaban:</label><br>
            <textarea name="answer" rows="3" required></textarea><br><br>
            <button type="submit">Kirim Jawaban</button>
        </form>
        <div class="answer"></div>
    `;
    
    questionList.appendChild(newQuestion);

    // Tambahkan event listener untuk form jawaban
    newQuestion.querySelector('.answerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let answer = this.querySelector('textarea').value;
        let answerDiv = this.nextElementSibling;
        answerDiv.innerHTML = `<strong>Jawaban Admin:</strong> <p>${answer}</p>`;
        this.style.display = 'none'; // Sembunyikan form setelah jawaban diberikan
    });

    // Reset form pertanyaan
    document.getElementById('questionForm').reset();
});