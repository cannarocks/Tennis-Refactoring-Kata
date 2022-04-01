import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === "player1") this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    //Draw
    if (this.m_score1 === this.m_score2) return this.getDraw();

    //Advantage or Win
    if (this.m_score1 >= 4 || this.m_score2 >= 4) return this.winOrAdvantage();

    //Normal
    return `${this.getScoreName(this.m_score1)}-${this.getScoreName(
      this.m_score2
    )}`;
  }

  getDraw(): string {
    if(this.m_score1 >= 3) return "Deuce";

    return `${this.getScoreName(this.m_score1)}-All`;
  }

  getAdvantagedPlayer(): string {
    return this.m_score1 > this.m_score2 ? this.player1Name : this.player2Name;
  }

  winOrAdvantage(): string {
    const delta: number = Math.abs(this.m_score1 - this.m_score2);
    return delta === 1
      ? `Advantage ${this.getAdvantagedPlayer()}`
      : `Win for ${this.getAdvantagedPlayer()}`;
  }

  getScoreName(score: number): string {
    switch (score) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
      default:
        return "";
    }
  }
}
