// Zadatak 1 kod ide ovdje
class CFC {
    constructor() {
      this.cats_ls = [];
      this.cats_rs = [];
      this.fight = new Fight(this);
    }
  
    init() {
      let leftSide = document.getElementById("firstSide");
      let rightSide = document.getElementById("secondSide");
      let leftFighters = document.getElementById("firstFighters").children; //leftElements (fighters-left)
      let rightFighters = document.getElementById("secondFighters").children; //rightElements (fighters-right)
      for(let i = 0; i < leftFighters.length; i++) {
        let rivalry = new Rivalry(leftFighters[i], rightFighters[i]);
        rivalry.init();
        let leftRival = new CatFighter(leftSide, leftFighters[i], rivalry, this);
        let rightRival = new CatFighter(rightSide, rightFighters[i], rivalry, this);
        leftRival.init();
        rightRival.init();
        this.cats_ls.push(leftRival);
        this.cats_rs.push(rightRival);
    }
      this.fight.init();
      this.regClickSelectRandomFighters();
    }
  
    regClickSelectRandomFighters() {
      document.getElementById("randomFight").addEventListener('click', (e) => this.clickSelectRandomFighters(), false);
    }
  
    clickSelectRandomFighters() {
      let ls = 0;
      let rs = 0;
      while (ls === rs || ls > 5 || rs > 5) {
        ls = Math.floor(Math.random());
        rs = Math.floor(Math.random());
      }
    }
  };

  class Rivalry {
    constructor(leftFighter, rightFighter) {
        this.leftFighter = leftFighter.getElementsByClassName('fighter-box')[0];
        this.rightFighter = rightFighter.getElementsByClassName('fighter-box')[0];
    }

    init() {
        let dataInfo = this.leftFighter.getAttribute('data-info');
        this.info = JSON.parse(dataInfo);
        this.imgSrc = this.leftElement.getElementsByTagName('img')[0].getAttribute('src');
    }
};
  
  class Fight {
    constructor(cfc) {
      this.cfc = cfc;
    }
  
    init() {
      this.btnFight = document.getElementById("generateFight");
    }
  };
  
  const cfc = new CFC();
  cfc.init();