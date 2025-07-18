document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animalImage');
    const scrambledWordDisplay = document.getElementById('scrambledWord');
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.getElementById('submitButton');
    const newGameButton = document.getElementById('newGameButton');
    const messageDisplay = document.getElementById('message');

    // Daftar kata hewan dan nama file gambar yang sesuai
    // PENTING: PASTIKAN NAMA FILE DI FOLDER 'images/' SESUAI DENGAN NAMA DI SINI
    const animals = [
        { word: "GAJAH", image: "gajah.jpg" },
        { word: "KUCING", image: "kucing.jpg" },
        { word: "ANJING", image: "anjing.jpg" },
        { word: "SINGA", image: "singa.jpg" },
        { word: "HARIMAU", image: "harimau.jpg" },
        { word: "BERUANG", image: "beruang.jpg" },
        { word: "BURUNG", image: "burung.jpg" },
        { word: "KURA-KURA", image: "kura-kura.jpg" },
        { word: "KELINCI", image: "kelinci.jpg" }, // Contoh tambahan
        { word: "ULAR", image: "ular.jpg" }       // Contoh tambahan
    ];

    let currentAnimal = {};

    // Fungsi untuk mengacak kata
    function shuffleWord(word) {
        const chars = word.split('');
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]]; // Swap elements
        }
        return chars.join('');
    }

    // Fungsi untuk memulai game baru
    function startNewGame() {
        const randomIndex = Math.floor(Math.random() * animals.length);
        currentAnimal = animals[randomIndex];

        // Tampilkan gambar
        animalImage.src = `images/${currentAnimal.image}`;
        animalImage.alt = `Gambar ${currentAnimal.word}`;

        // Acak dan tampilkan kata
        scrambledWordDisplay.textContent = shuffleWord(currentAnimal.word);

        // Reset input dan pesan
        guessInput.value = '';
        messageDisplay.textContent = 'Tebak nama hewan ini!';
        submitButton.disabled = false;
        newGameButton.disabled = true;
        guessInput.focus(); // Fokuskan kursor ke input
    }

    // Fungsi untuk memeriksa jawaban
    function checkGuess() {
        const userGuess = guessInput.value.trim().toUpperCase();
        if (userGuess === currentAnimal.word) {
            messageDisplay.textContent = 'Selamat! Jawaban Anda benar!';
            submitButton.disabled = true;
            newGameButton.disabled = false;
        } else {
            messageDisplay.textContent = 'Maaf, jawaban salah. Coba lagi!';
        }
    }

    // Event Listener untuk tombol Kirim
    submitButton.addEventListener('click', checkGuess);

    // Event Listener untuk tombol Main Baru
    newGameButton.addEventListener('click', startNewGame);

    // Event Listener untuk tombol Enter di input field
    guessInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !submitButton.disabled) {
            checkGuess();
        }
    });

    // Mulai game pertama saat halaman dimuat
    startNewGame();
});
