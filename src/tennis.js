function Tennis(){
    var scoreA = 0;
    var scoreB = 0;
    var dueceRule = new DueceRule();
    var tiebreakRule = new TiebreakRule();
    var scoreRule = new ScoreRule();

    this.score = function() {
        var textScoreA = "";
        var textScoreB = "";
        var score = "";

        var rules = [scoreRule, tiebreakRule, dueceRule].forEach(function(element){
            if(!isUndefined(element.showScore(scoreA, scoreB))){
                score = element.showScore(scoreA, scoreB);   
            }
        });
        return score;
        
    }

    function isUndefined(valueScore){
        return valueScore == undefined;
    }

    this.playerAWonPoint = function() {
        scoreA += 1;
    };

    this.playerBWonPoint = function () {
        scoreB += 1;
    };
}