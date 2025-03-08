function sendMessage() {
    let input = document.getElementById("userInput").value;
    if (input.trim() === "") return;

    appendMessage("Anda: " + input);
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        appendMessage("Bot: " + getBotResponse(input));
    }, 500);
}

function appendMessage(message) {
    let chatBox = document.getElementById("chatBox");
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("halo") || input.includes("shalom")) {
        return "Shalom jemaat Tuhan yang terkasih, apakah ada yang bisa kami bantu?";
    } else if (input.includes("kapan")) {
        return "Ibadah Minggu Raya GBI Sion pukul 10:30 pagi, Sekolah Minggu pukul 07:00 pagi, Ibadah Pemuda Youth pukul 19:00, Ibadah Keluarga akan diumumkan di saat pengumuman Ibadah Raya.";
    } else if (input.includes("daftar") || input.includes("jemaat")) {
        return "Silahkan kunjungi website kami dan klik pendaftaran.";
    } else if (input.includes("dimana")) {
        return "GBI SION berada di Jalan Danau Toba, SP4, Gunung Mulya.";
    } else if (input.includes("terimakasih")) {
        return "Sama-sama, sampai jumpa di gereja. Jesus bless you...";
    } else {
        return "Maaf, kami hanya melayani seputar Kegerejaan GBI SION.";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
