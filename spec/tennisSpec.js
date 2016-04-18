describe("Tennis", function() {
    it("should show LOVE LOVE when start game", function() {
        var tennis = new Tennis();
        var result = tennis.score();
        expect(result).toEqual("LOVE LOVE");
    });

    it("should show FIFTEEN LOVE when player A win first point", function() {
        var tennis = new Tennis();
        tennis.playerAWin();    
        var result = tennis.score();
        expect(result).toEqual("FIFTEEN LOVE");
    });

    it("should show LOVE FIFTEEN when player B win", function() {
        var tennis = new Tennis();
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("LOVE FIFTEEN");
    });

    it("should show FIFTEEN FIFTEEN when player A win one point and player B win one point", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerBWin();        
        var result = tennis.score();
        expect(result).toEqual("FIFTEEN FIFTEEN");
    });

    it("should show THIRTY LOVE when player A win twice", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();      
        var result = tennis.score();
        expect(result).toEqual("THIRTY LOVE");
    });

    it("should show LOVE THIRTY when player B win twice", function() {
        var tennis = new Tennis();
        tennis.playerBWin();
        tennis.playerBWin();      
        var result = tennis.score();
        expect(result).toEqual("LOVE THIRTY");
    });

    it("should show FORTY LOVE when player A win 3 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();      
        var result = tennis.score();
        expect(result).toEqual("FORTY LOVE");
    });

    it("should show THIRTY FIFTEEN when player A win 2 times and player B win 1 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerBWin();      
        var result = tennis.score();
        expect(result).toEqual("THIRTY FIFTEEN");
    });

    it("should show FIFTEEN THIRTY when player B win 2 times and player A win 1 times", function() {
        var tennis = new Tennis();
        tennis.playerBWin();
        tennis.playerBWin();
        tennis.playerAWin();      
        var result = tennis.score();
        expect(result).toEqual("FIFTEEN THIRTY");
    });

    it("should show LOVE FORTY when player B win 2 times and player A win 1 times", function() {
        var tennis = new Tennis();
        tennis.playerBWin();
        tennis.playerBWin();
        tennis.playerBWin();    
        var result = tennis.score();
        expect(result).toEqual("LOVE FORTY");
    });

    it("should show playerAWin when player A win 4 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();  
        tennis.playerAWin();  
        var result = tennis.score();
        expect(result).toEqual("PLAYER A WIN");
    });

    it("should show FORTY FIFTEEN when player A win 3 times and player B win 1 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();  
        tennis.playerBWin();  
        var result = tennis.score();
        expect(result).toEqual("FORTY FIFTEEN");
    });

    it("should show THIRTY THIRTY when player A win 2 times and player B win 2 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        var result = tennis.score();
        expect(result).toEqual("THIRTY THIRTY");
    });

    it("should show FIFTEEN FORTY when player A win 1 times and player B win 3 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerBWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        var result = tennis.score();
        expect(result).toEqual("FIFTEEN FORTY");
    });

    it("should show PLAYER B WIN when player B win 4 times", function() {
        var tennis = new Tennis();
        tennis.playerBWin();
        tennis.playerBWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        var result = tennis.score();
        expect(result).toEqual("PLAYER B WIN");
    });

    it("should show FORTY THIRTY when player A win 3 times and player B win 2 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("FORTY THIRTY");
    });

    it("should show THIRTY FORTY when player A win 2 times and player B win 3 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("THIRTY FORTY");
    });

    it("should show DUECE when player A win 3 times and player B win 3 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("DUECE");
    });

    it("should show PLAYER A AVD when player A win 4 times and player B win 3 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("PLAYER A ADV");
    });

    it("should show PLAYER B AVD when player A win 3 times and player B win 4 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("PLAYER B ADV");
    });

    it("should show PLAYER A WIN AFTER AVD when player A win 5 times and player B win 3 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();  
        tennis.playerAWin();  
        tennis.playerBWin();
        tennis.playerBWin();
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("PLAYER A WIN");
    });

    it("should show PLAYER B WIN AFTER AVD when player A win 3 times and player B win 5 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerBWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        tennis.playerBWin();
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("PLAYER B WIN");
    });

    it("should show DUECE AFTER AVD when player A win 4 times and player B win 4 times", function() {
        var tennis = new Tennis();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();
        tennis.playerAWin();  
        tennis.playerBWin();  
        tennis.playerBWin();
        tennis.playerBWin();
        tennis.playerBWin();
        var result = tennis.score();
        expect(result).toEqual("DUECE");
    });
});