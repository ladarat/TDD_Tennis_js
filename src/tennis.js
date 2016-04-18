function Tennis(){
   this.scoreA = 0;
   this.scoreB = 0;

    this.score = function() {
        var scoreA = "";
        var scoreB = "";
        var scoreMap = {
            0: "LOVE",
            1: "FIFTEEN",
            2: "THIRTY",
            3: "FORTY"
        };        

        if(this.scoreA === this.scoreB  && this.scoreA >= 3){
            return "DUECE";
        }

        if(this.scoreA > 3 || this.scoreB > 3){
            var scoreDiff = this.scoreA - this.scoreB;
            if(scoreDiff === 1){
                return "PLAYER A ADV";
            }
            if(scoreDiff === -1){
                return "PLAYER B ADV";
            }
            if(scoreDiff > 1){
                return "PLAYER A WIN";
            }
            if(scoreDiff < -1){
                return "PLAYER B WIN";
            }
        }

        if(this.scoreA < 4 && this.scoreB < 4){
            scoreA = scoreMap[this.scoreA];
            scoreB = scoreMap[this.scoreB];
            return scoreA + " " + scoreB;
        }
    }

    this.playerAWin = function() {
        this.scoreA += 1;
    };

    this.playerBWin = function () {
        this.scoreB += 1;
    };
}