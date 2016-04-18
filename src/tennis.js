function Tennis(){
    var scoreA = 0;
    var scoreB = 0;
   this.isScoreLessThan4 = isScoreLessThan4;


    this.score = function() {
        var textScoreA = "";
        var textScoreB = "";
        var scoreMap = {
            0: "LOVE",
            1: "FIFTEEN",
            2: "THIRTY",
            3: "FORTY"
        };        

        if(isDuece()){
            return "DUECE";
        }

        if(this.isPlayerAAVD()){
            return "PLAYER A ADV";
        }

        if(this.isPlayerBAVD()){
            return "PLAYER B ADV";
        }

        if(this.isPlayerAWin()){
            return "PLAYER A WIN";
        }
        
        if(this.isPlayerBWin()){
            return "PLAYER B WIN";
        }

        if(this.isScoreLessThan4()){
            textScoreA = scoreMap[scoreA];
            textScoreB = scoreMap[scoreB];
            return textScoreA + " " + textScoreB;
        }
    }

    function isDuece(){
        return scoreA === scoreB  && scoreA >= 3;
    }

    this.isTiebreak = function(){
        return scoreA > 3 || scoreB > 3;
    }

    this.isPlayerAAVD = function(){
        return this.isTiebreak() && this.scoreADiffB() === 1;
    }

    this.isPlayerBAVD = function(){
        return this.isTiebreak() && this.scoreADiffB() === -1;
    }

    this.isPlayerAWin = function(){
        return this.isTiebreak() && this.scoreADiffB() > 1;
    }

    this.isPlayerBWin = function(){
        return this.isTiebreak() && this.scoreADiffB() < -1;
    }

    function isScoreLessThan4(){
        return scoreA < 4 && scoreB < 4;
    }

    this.scoreADiffB = function(){
        return scoreA - scoreB;
    }

    this.playerAWonPoint = function() {
        scoreA += 1;
    };

    this.playerBWonPoint = function () {
        scoreB += 1;
    };
}