function DueceRule(){
    this.showScore = function(scoreA, scoreB){
        if(this.isDuece(scoreA, scoreB)){
            return "DUECE";
        } 
    };
    this.isDuece = function(scoreA, scoreB){
        return scoreA === scoreB  && scoreA > 2;
    };
}