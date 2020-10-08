const startGameDiv = document.getElementById('startGame');
const divToHide = document.getElementById('divToHide');
const paragraph = document.getElementById('paraWord');
const spanWord = document.createElement('span');
const gameOver = document.getElementById('gameOver');
let wordInput = document.getElementById('wordInput');
let scoreValue = document.getElementById('score');
const totalScoreValue = document.getElementById('totalScoreValue');
const smiley = document.getElementById('smiley');
const smileyImg = document.getElementById('smileyImg');
let timerValue = document.getElementById('timerValue');
let smileyFace = document.getElementById('smileyFace');
let counter = 0,
    score = 0,
    timer = 5;
const word = ['india', 'usa', 'australia', 'china'];
const smileyImgSrc = ['https://media.istockphoto.com/photos/thumb-down-emoji-isolated-on-white-background-picture-id962578498?k=6&m=962578498&s=612x612&w=0&h=PplDNplc2INngGN9IddR04DNM4RpyXHgMawX5VvVKfk=', 'https://media.istockphoto.com/photos/thumb-up-emoji-isolated-on-white-background-emoticon-giving-likes-3d-picture-id868647244?k=6&m=868647244&s=612x612&w=0&h=tLjCHL82sDR4SBRJRmtm8eI7v_e80sKVirvB0232f1Y=', 'https://media.istockphoto.com/photos/blushing-emoji-picture-id921029172?k=6&m=921029172&s=612x612&w=0&h=CrBDAu9wQVWfznuHc5_1Vg_5imY3ivXBYVITPqIQ7CM='];

function startGame() {
    divToHide.style.display = 'none';
    startGameDiv.style.display = 'block';
    level(counter);
}

function level(counter) {
    if (counter < word.length) {
        spanWord.innerHTML = word[counter].toLowerCase();
        paragraph.appendChild(spanWord);

        let interval = setInterval(() => {
            counter++;
            if (counter <= 4 && wordInput.value === word[counter - 1] && wordInput.value !== '') {
                score++;
                scoreValue.innerHTML = score;
                level(counter);
                wordInput.value = '';
            } else if (counter <= 4 && wordInput.value !== word[counter - 1] && wordInput.value !== '') {
                level(counter);
                wordInput.value = '';
            } else if (counter <= 4 && wordInput.value === '') {
                level(counter);
                wordInput.value = '';
            } else {
                startGameDiv.style.display = "none";
                gameOver.style.display = 'block';
            }
        }, 5000);

        timerValue.innerHTML = timer;

        if (interval === 1) {
            setInterval(() => {
                timer -= 1;
                timerValue.innerHTML = timer;
                if (timer === 1) {
                    timer = 6;
                }
            }, 1000);
        }

    } else {

        startGameDiv.style.display = "none";
        document.getElementById('smileyFaceDiv').style.display = "block";
        smileyFace.style.display = "block";
        if (score > 2) {
            document.getElementById('smileyFaceDiv').style.border = '5px solid #45c48b';
            smileyFace.setAttribute('src', smileyImgSrc[1]);
        } else if (score === 2) {
            document.getElementById('smileyFaceDiv').style.border = ' 5px solid chocolate';
            smileyFace.setAttribute('src', smileyImgSrc[2]);
        } else {
            document.getElementById('smileyFaceDiv').style.border = '5px solid red';
            smileyFace.setAttribute('src', smileyImgSrc[0]);
        }
        totalScoreValue.innerHTML = score;
        totalScore.style.display = 'block';
        gameOver.style.display = 'block';
        document.getElementById('resultDiv').style.display = "block";
    }

}