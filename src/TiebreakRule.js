function TiebreakRule(){
    this.showScore = function(scoreA, scoreB){
        if(isTiebreak(scoreA, scoreB)){
            if(isPlayerAAVD(scoreA, scoreB)){
                return "PLAYER A ADV";
            }
            if(isPlayerBAVD(scoreA, scoreB)){
                return "PLAYER B ADV";
            }
            if(isPlayerAWin(scoreA, scoreB)){
                return "PLAYER A WIN";
            }
            if(isPlayerBWin(scoreA, scoreB)){
                return "PLAYER B WIN";
            }
        }
    }

    function isTiebreak(scoreA, scoreB){
        return scoreA > 3 || scoreB > 3;
    }

    function isPlayerAAVD(scoreA, scoreB){
        return scoreADiffB(scoreA, scoreB) === 1;
    }

    function isPlayerBAVD(scoreA, scoreB){
        return scoreADiffB(scoreA, scoreB) === -1;
    }

    function isPlayerAWin(scoreA, scoreB){
        return scoreADiffB(scoreA, scoreB) > 1;
    }

    function isPlayerBWin(scoreA, scoreB){
        return scoreADiffB(scoreA, scoreB) < -1;
    }

    function scoreADiffB(scoreA, scoreB){
        return scoreA - scoreB;
    }
}