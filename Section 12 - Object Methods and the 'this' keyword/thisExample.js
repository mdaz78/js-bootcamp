const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickname: "Cher",

  fullName() {
    const {
      first,
      last,
      nickname
    } = this
    console.log(`${first} ${last} AKA ${nickname}`)
  }
}

// annoyomatic demo
const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't stop"],
  pickPhrase() {
    const {
      phrases
    } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("PHEW THANK HEAVENS THAT IS OVER!")
  }
}

// putting it all together
const myDeck = {
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  deck: [],
  drawnCards: [],

  initializeDeck() {
    const {
      suits,
      values,
      deck
    } = this;

    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
  },

  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },

  drawMultipleCards(numOfCards) {
    const cards = [];
    for (let i = 0; i < numOfCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },

  shuffle() {
    const {
      deck
    } = this
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}