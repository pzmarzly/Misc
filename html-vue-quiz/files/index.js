if (window.prompt("PWD", "") !== "123") throw new Error("Something went badly wrong!");

// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function random_1_4() {
    var a = [0, 1, 2, 3];
    shuffle(a);
    return a;
}

var random = [];
for (var i = 0; i < CATEGORIES; i++) random.push(Math.floor(Math.random() * PEOPLE_PER_CATEGORY));

var app = new Vue({
    el: '#app',
    data: {
        score: 0,
        possibleScore: 4,
        stage: 0,
        people: people,
        peopleId: random,
        finished: {
            normally: false,
            interrupted: false
        },
        isFullscreen: false,
        started: false,
        startTime: 0,
        currentTime: 0,
        randomButtonsId: random_1_4()
    },
    computed: {
        info: function() {
            return this.people[this.stage][this.peopleId[this.stage]];
        },
        answers: function() {
            return this.randomButtonsId.map(x => this.people[this.stage][x].name);
        },
        timeRemaining: function() {
            var time = this.startTime - this.currentTime + 60;
            if (time < 0) {
                this.startTime = Math.trunc((new Date()).getTime() / 1000);
                this.answer(1337);
            }
            return time;
        },
        ended: function() {
            return this.finished.normally || this.finished.interrupted;
        }
    },
    methods: {
        answer: function(i) {
            if (!this.ended) {
                if (i != 1337 && this.answers[i] == this.info.name) {
                    this.score += this.possibleScore;
                }
                this.possibleScore = 4;
                if (this.stage < 3) {
                    this.stage++;
                    this.randomButtonsId = random_1_4();
                    this.startTime = Math.trunc((new Date()).getTime() / 1000);
                } else {
                    this.finished.normally = true;
                }
            }
        },
        fullscreen: function() {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            this.isFullscreen = true;
        },
        start: function() {
            window.onblur = function() {
                document.getElementById('app').className = 'yellow';
            }
            this.startTime = Math.trunc((new Date()).getTime() / 1000);
            this.currentTime = Math.trunc((new Date()).getTime() / 1000);
            window.setInterval(() => {
                this.currentTime = Math.trunc((new Date()).getTime() / 1000);
            }, 1000);
            this.started = true;
        },
        reload: function() {
            location.reload();
        }
    }
});

var endQuiz = function() {
    app.$set(app.finished, "interrupted", true);
};
/*
if (window.devtools.open) {
    endQuiz();
}
window.addEventListener('devtoolschange', endQuiz);*/

document.addEventListener('contextmenu', event => event.preventDefault());