"use strict";

const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const ulParent = document.createElement("ul");
for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const { team: homeTeamName, points: homeTeamPoints } = homeTeam;
  const { team: awayTeamName, points: awayTeamPoints } = awayTeam;

  const gameLi = document.createElement("li");

  const teamNames = `${awayTeamName} @ ${homeTeamName}`;

  let scoreLine;
  if (awayTeamPoints > homeTeamPoints) {
    scoreLine = `<b>${awayTeamPoints}</b>-${homeTeamPoints}`;
  } else {
    scoreLine = `${awayTeamPoints}-<b>${homeTeamPoints}</b>`;
  }

  const warriors = homeTeamName === "Golden State" ? homeTeam : awayTeam;
  gameLi.classList.add(warriors.isWinner ? "win" : "loss");

  gameLi.innerHTML = `${teamNames} ${scoreLine}`;
  ulParent.append(gameLi);
}

document.body.prepend(ulParent);
