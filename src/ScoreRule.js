function ScoreRule(){
    var dueceRule = new DueceRule();
    var scoreMap = {
            0: "LOVE",
            1: "FIFTEEN",
            2: "THIRTY",
            3: "FORTY"
        };
    this.showScore = function(scoreA, scoreB){
        if(isScoreLessThan4(scoreA, scoreB)){
            textScoreA = scoreMap[scoreA];
            textScoreB = scoreMap[scoreB];
            return textScoreA + " " + textScoreB;
        }  
    }

    function isScoreLessThan4(scoreA, scoreB){
        return scoreA < 4 && scoreB < 4 && !dueceRule.isDuece(scoreA, scoreB);
    }
}