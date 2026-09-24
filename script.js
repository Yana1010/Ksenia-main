// ----------------------------
// 1. Falling Letters
// ----------------------------
const leftContainer = document.getElementById('letters-left');
const rightContainer = document.getElementById('letters-right');

function createLetters(container, count) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const step = 600 / count;
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = letters.charAt(Math.floor(Math.random() * letters.length));
        span.style.left = Math.random() * (container.offsetWidth - 30) + 'px';
        const startY = -Math.random() * step - i * step;
        span.style.setProperty('--startY', startY + 'px');
        const duration = 6 + Math.random() * 5;
        span.style.animationDuration = `${duration}s`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(span);
    }
}
createLetters(leftContainer, 50);
createLetters(rightContainer, 50);

// ----------------------------
// 2. Photo Collage Lightbox (ВИПРАВЛЕНО)
// ----------------------------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const collageItems = document.querySelectorAll('.collage-item');

collageItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImg.src = item.src;
        lightbox.classList.remove('hidden'); // Прибираємо display: none
        
        // Невелика затримка для коректного запуску анімації
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
        
        document.body.style.overflow = 'hidden'; // Блокуємо скрол
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active'); // Анімація зникнення
    
    setTimeout(() => {
        lightbox.classList.add('hidden'); // Повне приховування після анімації
        lightboxImg.src = ""; // Очищення для уникнення мерехтіння
    }, 300);
    
    document.body.style.overflow = ''; // Повертаємо скрол
}

// ----------------------------
// 3. Test Data
// ----------------------------
const englishQuestions = [
    { level: "Level A1 (Beginner)", q: "q1", text: "1. I ___ to the park every Sunday.", options: {a: "go", b: "goes", c: "went", d: "going"}, ans: "a" },
    { q: "q2", text: "2. I will meet you ___ the station at 5 pm.", options: {a: "at", b: "in", c: "on", d: "to"}, ans: "a" },
    { q: "q3", text: "3. My brother lives ___ London.", options: {a: "at", b: "in", c: "on", d: "to"}, ans: "b" },
    { q: "q4", text: "4. She bought ___ apple and ___ orange.", options: {a: "a / a", b: "an / an", c: "the / the", d: "a / the"}, ans: "b" },
    { q: "q5", text: "5. Choose the word that doesn't belong:", options: {a: "Monday", b: "July", c: "Friday", d: "Tuesday"}, ans: "b" },
    { q: "q6", text: "6. Choose the correct opposite: \"difficult\" →", options: {a: "easy", b: "hard", c: "complicated", d: "tough"}, ans: "a" },
    { q: "q7", text: "7. Choose the word closest in meaning to \"happy\":", options: {a: "sad", b: "joyful", c: "angry", d: "tired"}, ans: "b" },
    { q: "q8", text: "8. He ___ breakfast at 7 a.m. every day.", options: {a: "eat", b: "eats", c: "eaten", d: "eating"}, ans: "b" },
    { level: "Level A2 (Elementary)", q: "q9", text: "9. She ___ dinner when I arrived.", options: {a: "cooked", b: "was cooking", c: "is cooking", d: "cooks"}, ans: "b" },
    { q: "q10", text: "10. She ___ play the piano when she was five.", options: {a: "can", b: "could", c: "was able", d: "may"}, ans: "b" },
    { q: "q11", text: "11. I ___ call you later if that's OK.", options: {a: "may", b: "must", c: "should", d: "can"}, ans: "d" },
    { q: "q12", text: "12. He's very ___; he always helps people.", options: {a: "selfish", b: "generous", c: "rude", d: "lazy"}, ans: "b" },
    { q: "q13", text: "13. What is the correct word? \"She works in a ___.\"", options: {a: "hospital", b: "school", c: "shop", d: "park"}, ans: "b" },
    { q: "q14", text: "14. \"Give up\" means:", options: {a: "start", b: "stop doing something", c: "continue", d: "help"}, ans: "b" },
    { q: "q15", text: "15. \"Look after\" means:", options: {a: "take care of", b: "search for", c: "ignore", d: "examine"}, ans: "a" },
    { q: "q16", text: "16. I am not allowed to enter the room. → I ___ enter the room.", options: {a: "cannot", b: "can", c: "must", d: "may"}, ans: "a" },
    { level: "Level B1 (Intermediate)", q: "q17", text: "17. If I ___ more money, I would travel around the world.", options: {a: "have", b: "had", c: "will have", d: "has"}, ans: "b" },
    { q: "q18", text: "18. You ___ smoke in this room. It's forbidden.", options: {a: "mustn't", b: "don't have to", c: "can't", d: "should"}, ans: "a" },
    { q: "q19", text: "19. We haven't seen him ___ Monday.", options: {a: "for", b: "since", c: "from", d: "during"}, ans: "b" },
    { q: "q20", text: "20. I am interested ___ learning languages.", options: {a: "in", b: "on", c: "at", d: "for"}, ans: "a" },
    { q: "q21", text: "21. \"Turn down\" means:", options: {a: "accept an offer", b: "reject an offer", c: "increase volume", d: "improve"}, ans: "b" },
    { q: "q22", text: "22. \"Run out of\" means:", options: {a: "have too much", b: "finish a supply", c: "start running", d: "borrow"}, ans: "b" },
    { q: "q23", text: "23. \"Break down\" (a car) means:", options: {a: "to repair", b: "to stop working", c: "to drive fast", d: "to sell"}, ans: "b" },
    { q: "q24", text: "24. \"I am very tired, so I will stay home.\" → I will stay home ___ I am very tired.", options: {a: "although", b: "because", c: "but", d: "if"}, ans: "b" },
    { level: "Level B2 (Upper-Intermediate)", q: "q25", text: "25. By next year, I ___ my degree.", options: {a: "will complete", b: "will have completed", c: "completed", d: "complete"}, ans: "b" },
    { q: "q26", text: "26. She started learning English two years ago. → She ___ English for two years.", options: {a: "has learned", b: "has been learning", c: "learned", d: "learns"}, ans: "b" },
    { q: "q27", text: "27. It's unnecessary to bring food. → You ___ bring food.", options: {a: "needn't", b: "must", c: "should", d: "have to"}, ans: "a" },
    { q: "q28", text: "28. I didn't know him. → I ___ him.", options: {a: "used to know", b: "didn't use to know", c: "know", d: "had known"}, ans: "b" },
    { level: "Level C1 (Advanced)", q: "q29", text: "29. Scarcely ___ at the station when the train pulled away.", options: {a: "I had arrived", b: "had I arrived", c: "I arrived", d: "did I arrive"}, ans: "b" },
    { q: "q30", text: "30. Had I known about the traffic, I ___ earlier.", options: {a: "would leave", b: "left", c: "would have left", d: "had left"}, ans: "c" },
    { q: "q31", text: "31. The manager insisted that the report ___ submitted before 5 PM.", options: {a: "be", b: "is", c: "was", d: "will be"}, ans: "a" },
    { q: "q32", text: "32. It is high time we ___ home; it's getting very late.", options: {a: "go", b: "went", c: "have gone", d: "should go"}, ans: "b" },
    { q: "q33", text: "33. He acts as if he ___ everything, but in reality, he knows nothing.", options: {a: "knows", b: "knew", c: "has known", d: "is knowing"}, ans: "b" },
    { q: "q34", text: "34. The new company regulations are due to ___ effect next month.", options: {a: "take", b: "make", c: "have", d: "bring"}, ans: "a" },
    { q: "q35", text: "35. I would rather you ___ touch my personal belongings.", options: {a: "don't", b: "didn't", c: "won't", d: "not to"}, ans: "b" },
    { q: "q36", text: "36. Only after the meeting ended ___ the mistake.", options: {a: "he realized", b: "did he realize", c: "he had realized", d: "he did realize"}, ans: "b" }
];

const germanQuestions = [
    { level: "Teil 1: A1 – Anfänger", q: "q1", text: "1. Ich ___ Peter.", options: {a: "bist", b: "bin", c: "sind", d: "sei"}, ans: "b" },
    { q: "q2", text: "2. ___ heißt du?", options: {a: "Wie", b: "Was", c: "Wo", d: "Wann"}, ans: "a" },
    { q: "q3", text: "3. Wir ___ in Berlin.", options: {a: "wohnen", b: "wohnt", c: "wohne", d: "wohnst"}, ans: "a" },
    { q: "q4", text: "4. Das ist ___ Buch.", options: {a: "ein", b: "eine", c: "einen", d: "einer"}, ans: "a" },
    { q: "q5", text: "5. Ich habe ___ Auto.", options: {a: "das", b: "der", c: "ein", d: "einen"}, ans: "c" },
    { q: "q6", text: "6. ___ du aus Spanien?", options: {a: "Kommt", b: "Kommst", c: "Kommen", d: "Kammen"}, ans: "b" },
    { level: "Teil 2: A2 – Grundstufe", q: "q7", text: "7. Wir gehen ___ Kino.", options: {a: "in", b: "ins", c: "im", d: "auf"}, ans: "b" },
    { q: "q8", text: "8. Er ___ gestern lange gearbeitet.", options: {a: "hat", b: "hatte", c: "hatet", d: "hat gearbeitet"}, ans: "a" },
    { q: "q9", text: "9. Ich interessiere mich ___ Sport.", options: {a: "an", b: "über", c: "für", d: "mit"}, ans: "c" },
    { q: "q10", text: "10. Hast du ___ Brille?", options: {a: "eine", b: "ein", c: "einen", d: "den"}, ans: "a" },
    { q: "q11", text: "11. Ich kann nicht kommen, ___ ich krank bin.", options: {a: "weil", b: "dass", c: "aber", d: "obwohl"}, ans: "a" },
    { q: "q12", text: "12. Am Wochenende ___ wir nach Köln gefahren.", options: {a: "sind", b: "haben", c: "wurden", d: "hatten"}, ans: "a" },
    { level: "Teil 3: B1 – Mittelstufe", q: "q13", text: "13. Wenn ich Zeit habe, ___ ich Sport.", options: {a: "mache", b: "machte", c: "werde machen", d: "mache mir"}, ans: "a" },
    { q: "q14", text: "14. Der Film war interessant, ___ ein bisschen zu lang.", options: {a: "aber", b: "deshalb", c: "trotzdem", d: "weil"}, ans: "a" },
    { q: "q15", text: "15. Ich weiß nicht, ___ er kommt.", options: {a: "was", b: "ob", c: "dass", d: "warum nicht"}, ans: "b" },
    { q: "q16", text: "16. Ich freue mich darauf, dich wiederzusehen. – „darauf\" ist:", options: {a: "Artikel", b: "Präposition", c: "Adverb", d: "Pronomen"}, ans: "d" },
    { q: "q17", text: "17. Wir haben das Auto ___ Woche gekauft.", options: {a: "letzte", b: "letzten", c: "letzter", d: "letztem"}, ans: "b" },
    { q: "q18", text: "18. Sie war müde, ___ sie arbeitete weiter.", options: {a: "weil", b: "denn", c: "aber", d: "trotzdem"}, ans: "d" },
    { level: "Teil 4: B2 – Fortgeschrittene", q: "q19", text: "19. Er tut so, ___ er alles wüsste.", options: {a: "ob", b: "wie", c: "als ob", d: "obwohl"}, ans: "c" },
    { q: "q20", text: "20. Ich ___ dir helfen, wenn ich Zeit hätte.", options: {a: "würde", b: "hätte", c: "werde", d: "würde helfen"}, ans: "a" },
    { q: "q21", text: "21. Sie bestand darauf, dass er sofort ___.", options: {a: "kommt", b: "gekommen", c: "kam", d: "komme"}, ans: "d" },
    { q: "q22", text: "22. ___ meines Wissens ist das nicht korrekt.", options: {a: "Nach", b: "Zu", c: "Laut", d: "Meines"}, ans: "a" },
    { q: "q23", text: "23. Das Problem wurde bereits ___.", options: {a: "lösen", b: "gelöst", c: "lösbar", d: "gelösst"}, ans: "b" },
    { q: "q24", text: "24. Er war nicht nur müde, ___ auch krank.", options: {a: "sondern", b: "und", c: "doch", d: "sowie"}, ans: "a" },
    { level: "Teil 5: C1 – Kompetente Sprachverwendung", q: "q25", text: "25. Hätte ich das gewusst, ___ ich anders gehandelt.", options: {a: "wäre", b: "hätte", c: "würde", d: "hätte ich"}, ans: "c" },
    { q: "q26", text: "26. Kaum hatte sie die Tür geöffnet, ___ es zu regnen.", options: {a: "beginnt", b: "begann", c: "hatte begonnen", d: "angefangen"}, ans: "b" },
    { q: "q27", text: "27. Es wird erwartet, dass die Teilnehmer pünktlich ___.", options: {a: "erscheinen", b: "erscheinen werden", c: "erscheinen müssen", d: "erscheinen sollen"}, ans: "a" },
    { q: "q28", text: "28. Trotz seiner Bemühungen blieb das Projekt ___.", options: {a: "erfolg", b: "erfolgreich", c: "erfolglos", d: "Erfolg"}, ans: "c" },
    { q: "q29", text: "29. Die Entscheidung wurde vertagt, um weitere Informationen ___ zu können.", options: {a: "sammelnd", b: "sammeln", c: "gesammelt", d: "zu sammeln"}, ans: "d" },
    { q: "q30", text: "30. In dem Artikel wird behauptet, dass sich die Lage deutlich ___ habe.", options: {a: "verbessert", b: "verbessern", c: "verbessertet", d: "zu verbessern"}, ans: "a" }
];

// ----------------------------
// 4. Test Logic with LocalStorage & One-by-One
// ----------------------------
let currentLang = 'english';
let currentQuestionIndex = 0;
let userAnswers = {};
let isFinished = false;

const testWizard = document.getElementById('test-wizard');
const startTestBtn = document.getElementById('startTestBtn');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resultDiv = document.getElementById('result');
const resultContent = document.getElementById('result-content');
const retakeBtn = document.getElementById('retakeBtn');

function getStorageKey() {
    return `ksenia_test_${currentLang}`;
}

// --- НОВА ФУНКЦІЯ: Динамічне оновлення тексту кнопки ---
function updateStartButtonText() {
    const saved = localStorage.getItem(getStorageKey());
    if (saved) {
        const state = JSON.parse(saved);
        if (state.isFinished) {
            startTestBtn.textContent = currentLang === 'english' 
                ? 'View English Test Result' 
                : 'Deutsch Testergebnis anzeigen';
        } else {
            startTestBtn.textContent = currentLang === 'english' 
                ? 'Start English Test' 
                : 'Deutsch-Test starten';
        }
    } else {
        startTestBtn.textContent = currentLang === 'english' 
            ? 'Start English Test' 
            : 'Deutsch-Test starten';
    }
}

function loadState() {
    const saved = localStorage.getItem(getStorageKey());
    if (saved) {
        const state = JSON.parse(saved);
        currentQuestionIndex = state.currentQuestionIndex;
        userAnswers = state.userAnswers;
        isFinished = state.isFinished;
        
        if (isFinished) {
            showResult(state.result);
            return true;
        }
        return false;
    }
    return false;
}

function saveState() {
    const state = {
        currentQuestionIndex,
        userAnswers,
        isFinished,
        result: null
    };
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
}

function renderQuestion() {
    const questions = currentLang === 'english' ? englishQuestions : germanQuestions;
    const qData = questions[currentQuestionIndex];
    const total = questions.length;

    const progress = ((currentQuestionIndex + 1) / total) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;

    let html = '';
    if (qData.level && (currentQuestionIndex === 0 || questions[currentQuestionIndex - 1].level !== qData.level)) {
        html += `<h3 class="level-heading">${qData.level}</h3>`;
    }

    html += `<p class="question-text">${qData.text}</p><div class="question-options">`;
    for (const [key, value] of Object.entries(qData.options)) {
        const isChecked = userAnswers[qData.q] === key ? 'checked' : '';
        html += `
            <label>
                <input type="radio" name="${qData.q}" value="${key}" ${isChecked} />
                ${key}) ${value}
            </label>
        `;
    }
    html += `</div>`;
    questionContainer.innerHTML = html;

    questionContainer.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', (e) => {
            userAnswers[qData.q] = e.target.value;
            saveState();
        });
    });

    prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
    if (currentQuestionIndex === total - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function showResult(resultData) {
    testWizard.classList.add('hidden');
    startTestBtn.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    
    resultContent.innerHTML = `
        <p style="margin-bottom: 15px; font-size: 1.2rem;">You scored:</p>
        <p style="color:#916C49; font-size: 2.5rem; font-weight: 700; margin-bottom: 20px;">
            ${resultData.score} / ${resultData.total}
        </p>
        <p style="margin-bottom: 10px; font-size: 1.2rem;">Your estimated level:</p>
        <p style="color:#342010; font-size: 1.8rem; font-weight: 700;">
            ${resultData.level}
        </p>
        <p style="margin-top: 20px; color: #666; font-size: 0.95rem;">
            ${resultData.description}
        </p>
    `;
}

function calculateResult() {
    const questions = currentLang === 'english' ? englishQuestions : germanQuestions;
    let score = 0;
    
    questions.forEach(q => {
        if (userAnswers[q.q] === q.ans) {
            score++;
        }
    });

    const total = questions.length;
    let level = '';
    let description = '';

    if (currentLang === 'english') {
        if (score <= 8) { level = 'Level A1 (Beginner)'; description = 'Базові слова, прості граматичні структури (Present Simple), артикулі та прийменники.'; }
        else if (score <= 16) { level = 'Level A2 (Elementary)'; description = 'Розуміння базових модальних дієслів, Past Continuous, базових фразових дієслів та прикметників.'; }
        else if (score <= 24) { level = 'Level B1 (Intermediate)'; description = 'Впевнене володіння умовними реченнями (2nd Conditional), запереченнями/заборонами, фразовими дієсловами та сполучниками.'; }
        else if (score <= 28) { level = 'Level B2 (Upper-Intermediate)'; description = 'Складні часові форми (Future Perfect, Present Perfect Continuous), конструкція used to та відсутність потреби (needn\'t).'; }
        else { level = 'Level C1 (Advanced)'; description = 'Складна граматика (інверсія, соспрягальний спосіб / Subjunctive Mood, Third Conditional, звороти would rather / high time).'; }
    } else {
        if (score <= 7) { level = '🔹 A1 (Anfänger)'; description = 'Grundlegende Begrüßungen und einfache Sätze.'; }
        else if (score <= 16) { level = '🔸 A2 (Grundstufe)'; description = 'Erweiterte Grundlagen, einfache Vergangenheit.'; }
        else if (score <= 24) { level = '🟠 B1 (Mittelstufe)'; description = 'Selbständige Sprachverwendung, komplexe Sätze.'; }
        else { level = '🔵 B2/C1 (Fortgeschrittene)'; description = 'Kompetente Sprachverwendung, Konjunktiv und komplexe Strukturen.'; }
    }

    const resultData = { score, total, level, description };
    
    const state = {
        currentQuestionIndex: questions.length - 1,
        userAnswers,
        isFinished: true,
        result: resultData
    };
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
    
    showResult(resultData);
}

// Event Listeners
startTestBtn.addEventListener('click', () => {
    const alreadyFinished = loadState();
    startTestBtn.classList.add('hidden');
    testWizard.classList.remove('hidden');
    if (!alreadyFinished) {
        currentQuestionIndex = 0;
        userAnswers = {};
        isFinished = false;
        saveState();
        renderQuestion();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        saveState();
        renderQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    const questions = currentLang === 'english' ? englishQuestions : germanQuestions;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        saveState();
        renderQuestion();
    }
});

document.getElementById('testForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const questions = currentLang === 'english' ? englishQuestions : germanQuestions;
    const answeredCount = Object.keys(userAnswers).length;
    
    if (answeredCount < questions.length) {
        if (!confirm(`You have answered ${answeredCount} out of ${questions.length} questions. Check level anyway?`)) {
            return;
        }
    }
    calculateResult();
});

retakeBtn.addEventListener('click', () => {
    localStorage.removeItem(getStorageKey());
    currentQuestionIndex = 0;
    userAnswers = {};
    isFinished = false;
    resultDiv.classList.add('hidden');
    testWizard.classList.remove('hidden');
    renderQuestion();
});

// Language Switching
document.querySelectorAll('input[name="lang"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        currentLang = e.target.value;
        resultDiv.classList.add('hidden');
        testWizard.classList.add('hidden');
        startTestBtn.classList.remove('hidden');
        updateStartButtonText(); // ОНОВЛЮЄМО ТЕКСТ КНОПКИ
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    updateStartButtonText(); // ОНОВЛЮЄМО ТЕКСТ КНОПКИ ПРИ ЗАВАНТАЖЕННІ
});