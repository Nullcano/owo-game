const face = document.getElementById('face');
const faceExpression = document.getElementById('face-expression');
const money = document.getElementById('money');
const autoclicker = document.getElementById('autoclicker');
const cheat = document.getElementById('cheat');
const saveStorage = document.getElementById('saveStorage');
const clearStorage = document.getElementById('clearStorage');
const storage = window.localStorage;
const sessionLog = document.getElementById('sessionlog');
const drops = document.getElementById('drops');

const expressionZero = document.getElementById('expression-0');
const expressionOne = document.getElementById('expression-1');
const expressionTwo = document.getElementById('expression-2');
const expressionThree = document.getElementById('expression-3');
const expressionFour = document.getElementById('expression-4');
const expressionFive = document.getElementById('expression-5');
const expressionSix = document.getElementById('expression-6');
const expressionSeven = document.getElementById('expression-7');

const skinToneRed = document.getElementById('skin-tone-red');
const skinToneOrange = document.getElementById('skin-tone-orange');
const skinToneYellow = document.getElementById('skin-tone-yellow');
const skinToneGreen = document.getElementById('skin-tone-green');
const skinToneBlue = document.getElementById('skin-tone-blue');
const skinTonePurple = document.getElementById('skin-tone-purple');
const skinToneBlack = document.getElementById('skin-tone-black');
const skinToneWhite = document.getElementById('skin-tone-white');

let save = {
  money: 0,
  autoclicker: 0,
  autoclickercost: 10,
  expression: 'ÒwÓ',
  expressionColor: '#FFFFFF',
  skinTone: '#5E2CA5',
};

// Object to save
function load() {
	if (storage.getItem("save")) {
		save = JSON.parse(storage.getItem("save"));
		console.log("Save found: ", save);
	} else {
		console.log("Save not found");
  }
  money.innerHTML = `$${save.money}`;
  faceExpression.innerText = save.expression;
  faceExpression.style.color = save.expressionColor;
  face.style.backgroundColor = save.skinTone;
  autoclicker.innerHTML = `Buy Auto Clicker for $${save.autoclickercost}. You own ${save.autoclicker} autoclickers.`;
}
load();

// Click Event
face.addEventListener("click", function () {
	save.money++;
  money.innerHTML = `$${save.money}`;
  faceExpression.innerText = save.expression;
});

autoclicker.addEventListener('click', function() {
  if (save.money >= save.autoclickercost) {
    save.money -= save.autoclickercost;
    save.autoclicker++;
    save.autoclickercost++;
  } else {
    const log = document.createElement('span');
    log.innerText = `you can't afford the auto clicker upgrade yet`;
    sessionLog.appendChild(log);
    setTimeout(() => {
      sessionLog.removeChild(log);
    }, 30000);
  }
})

expressionZero.addEventListener('click', function() { 
  save.expression = 'ÒwÓ';
  faceExpression.innerText = save.expression;
})
expressionOne.addEventListener('click', function() { 
  save.expression = '◕‿◕';
  faceExpression.innerText = save.expression;
})
expressionTwo.addEventListener('click', function() { 
  save.expression = '°ε°';
  faceExpression.innerText = save.expression;
})
expressionThree.addEventListener('click', function() { 
  save.expression = '´•ω•`';
  faceExpression.innerText = save.expression;
})
expressionFour.addEventListener('click', function() { 
  save.expression = '≧◡≦';
  faceExpression.innerText = save.expression;
})
expressionFive.addEventListener('click', function() { 
  save.expression = '.❛ ᴗ ❛.';
  faceExpression.innerText = save.expression;
})
expressionSix.addEventListener('click', function() { 
  save.expression = '¬‿¬';
  faceExpression.innerText = save.expression;
})
expressionSeven.addEventListener('click', function() { 
  save.expression = '´｡•ᴗ•｡`';
  faceExpression.innerText = save.expression;
})

skinToneRed.addEventListener('click', function() { 
  save.skinTone = '#FF4136';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#FFFFFF';
  faceExpression.style.color = save.expressionColor;
})
skinToneOrange.addEventListener('click', function() { 
  save.skinTone = '#FF6300';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#FFFFFF';
  faceExpression.style.color = save.expressionColor;
})
skinToneYellow.addEventListener('click', function() { 
  save.skinTone = '#FFD700';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#000000';
  faceExpression.style.color = save.expressionColor;
})
skinToneGreen.addEventListener('click', function() { 
  save.skinTone = '#19A974';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#FFFFFF';
  faceExpression.style.color = save.expressionColor;
})
skinToneBlue.addEventListener('click', function() { 
  save.skinTone = '#357EDD';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#FFFFFF';
  faceExpression.style.color = save.expressionColor;
})
skinTonePurple.addEventListener('click', function() { 
  save.skinTone = '#5E2CA5';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#FFFFFF';
  faceExpression.style.color = save.expressionColor;
})
skinToneBlack.addEventListener('click', function() { 
  save.skinTone = '#000000';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#FFFFFF';
  faceExpression.style.color = save.expressionColor;
})
skinToneWhite.addEventListener('click', function() { 
  save.skinTone = '#FFFFFF';
  face.style.backgroundColor = save.skinTone;
  save.expressionColor = '#000000';
  faceExpression.style.color = save.expressionColor;
})

setInterval(() => {
  save.money += save.autoclicker
  money.innerHTML = `$${save.money}`;
  autoclicker.innerHTML = `Buy Auto Clicker for $${save.autoclickercost}. You own ${save.autoclicker} autoclickers.`;
}, 1000);

setInterval(() => {
  randomDrops()
}, 10000);

// Random drops
function randomDrops(){
  let chance = Math.random();
  if (chance > .35 && save.money >= 10) {
    let choice = Math.random();
    if (choice > .95) {
      const legendaryChest = document.createElement('div');
      legendaryChest.innerHTML = `<span class="relative pa3 ba bw1 b--gold bg-near-black pointer">I am a <span class="gold">legendary</span> chest o_o</span>`;
      drops.appendChild(legendaryChest);
      legendaryChest.addEventListener('click', function() {
        let winnings = Math.floor(.5 * save.money);
        save.money += winnings;
        const log = document.createElement('span');
        log.innerText = `you found $${winnings}`;
        sessionLog.appendChild(log);
        drops.removeChild(legendaryChest);
        setTimeout(() => {
          sessionLog.removeChild(log);
        }, 30000);
      })
      setTimeout(() => {
        drops.removeChild(legendaryChest);
      }, 5000);
    } else {
      const commonChest = document.createElement('div');
      commonChest.innerHTML = `<span class="relative pa3 ba bw1 b--purple bg-near-black pointer">I am a <span class="purple">common</span> chest ._.</span>`;
      drops.appendChild(commonChest);
      commonChest.addEventListener('click', function() {
        let winnings = Math.floor(.8 * save.money);
        save.money += winnings;
        const log = document.createElement('span');
        log.innerText = `you found $${winnings}`;
        sessionLog.appendChild(log);
        drops.removeChild(commonChest);
        setTimeout(() => {
          sessionLog.removeChild(log);
        }, 30000);
      })
      setTimeout(() => {
        drops.removeChild(commonChest);
      }, 5000);
    }
  }
}

// Cheat for testing
cheat.addEventListener("click", function () {
	save.money += 100000;
  faceExpression.innerText = 'owo';
});

// Save game
saveStorage.addEventListener("click", function () {
	storage.setItem("save", JSON.stringify(save));
  console.log("Saved game");
  faceExpression.innerText = 'UwU';
});

// Reset game
clearStorage.addEventListener("click", function () {
	storage.removeItem("save");
  location.reload();
});

setInterval(() => {
  storage.setItem("save", JSON.stringify(save));
  const log = document.createElement('span');
  log.innerText = `game auto-saved (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`;
  sessionLog.appendChild(log);
  setTimeout(() => {
    sessionLog.removeChild(log);
  }, 30000);
}, 30000);