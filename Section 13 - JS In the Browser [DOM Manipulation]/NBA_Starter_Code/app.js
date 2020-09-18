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

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (let game of warriorsGames) {
    const gameLi = document.createElement("li");
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");

    gameLi.innerHTML = getScoreLine(game);
    ulParent.append(gameLi);
  }

  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: homeTeamName, points: homeTeamPoints } = homeTeam;
  const { team: awayTeamName, points: awayTeamPoints } = awayTeam;

  const teamNames = `${awayTeamName} @ ${homeTeamName}`;

  let scoreLine;
  if (awayTeamPoints > homeTeamPoints) {
    scoreLine = `<b>${awayTeamPoints}</b>-${homeTeamPoints}`;
  } else {
    scoreLine = `${awayTeamPoints}-<b>${homeTeamPoints}</b>`;
  }

  return `${teamNames} ${scoreLine}`;
};

const gsSection = document.querySelector("#gs");
const gsChart = makeChart(warriorsGames, "Golden State");
gsSection.appendChild(gsChart);

const houstonSection = document.querySelector("#hr");
const hrChart = makeChart(warriorsGames, "Houston");
houstonSection.appendChild(hrChart);
