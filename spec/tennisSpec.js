describe("Tennis", function() {
    var tennis;

    beforeEach(function() {
        tennis = new Tennis();
    });

    it("should show LOVE LOVE when start game", function() {
        expect(tennis.score()).toEqual("LOVE LOVE");
    });

    var testData = [
        {
            playerAScore : 1,
            playerBScore : 0,
            result : "FIFTEEN LOVE"
        },
        {
            playerAScore : 0,
            playerBScore : 1,
            result : "LOVE FIFTEEN"
        }
    ]

    it("should show FIFTEEN LOVE when player A win first point", function() {
        playerAGetPoint(testData[0].playerAScore);
        playerBGetPoint(testData[0].playerBScore);
        expect(tennis.score()).toEqual(testData[0].result);
    });

    it("should show LOVE FIFTEEN when player B win", function() {
        playerAGetPoint(testData[1].playerAScore);
        playerBGetPoint(testData[1].playerBScore);
        expect(tennis.score()).toEqual(testData[1].result);
    });

    it("should show FIFTEEN FIFTEEN when player A win one point and player B win one point", function() {
        playerAGetPoint(1)
        playerBGetPoint(1);
        expect(tennis.score()).toEqual("FIFTEEN FIFTEEN");
    });

    it("should show THIRTY LOVE when player A win twice", function() {
        playerAGetPoint(2);
        playerBGetPoint(0);
        expect(tennis.score()).toEqual("THIRTY LOVE");
    });

    it("should show LOVE THIRTY when player B win twice", function() {
        playerBGetPoint(2);
        expect(tennis.score()).toEqual("LOVE THIRTY");
    });

    it("should show FORTY LOVE when player A win 3 times", function() {
        playerAGetPoint(3);
        expect(tennis.score()).toEqual("FORTY LOVE");
    });

    it("should show THIRTY FIFTEEN when player A win 2 times and player B win 1 times", function() {
        playerAGetPoint(2);
        playerBGetPoint(1);
        expect(tennis.score()).toEqual("THIRTY FIFTEEN");
    });

    it("should show FIFTEEN THIRTY when player B win 2 times and player A win 1 times", function() {
        playerBGetPoint(2);
        playerAGetPoint(1);
        expect(tennis.score()).toEqual("FIFTEEN THIRTY");
    });

    it("should show LOVE FORTY when player B win 2 times and player A win 1 times", function() {
        playerBGetPoint(3);
        expect(tennis.score()).toEqual("LOVE FORTY");
    });

    it("should show playerAWin when player A win 4 times", function() {
        playerAGetPoint(4);
        expect(tennis.score()).toEqual("PLAYER A WIN");
    });

    it("should show FORTY FIFTEEN when player A win 3 times and player B win 1 times", function() {
        playerAGetPoint(3); 
        playerBGetPoint(1);
        expect(tennis.score()).toEqual("FORTY FIFTEEN");
    });

    it("should show THIRTY THIRTY when player A win 2 times and player B win 2 times", function() {
        playerAGetPoint(2);
        playerBGetPoint(2);
        expect(tennis.score()).toEqual("THIRTY THIRTY");
    });

    it("should show FIFTEEN FORTY when player A win 1 times and player B win 3 times", function() {
        playerAGetPoint(1);
        playerBGetPoint(3);
        expect(tennis.score()).toEqual("FIFTEEN FORTY");
    });

    it("should show PLAYER B WIN when player B win 4 times", function() {
        playerBGetPoint(4);
        expect(tennis.score()).toEqual("PLAYER B WIN");
    });

    it("should show FORTY THIRTY when player A win 3 times and player B win 2 times", function() {
        playerAGetPoint(3);
        playerBGetPoint(2);
        expect(tennis.score()).toEqual("FORTY THIRTY");
    });

    it("should show THIRTY FORTY when player A win 2 times and player B win 3 times", function() {
        playerAGetPoint(2);
        playerBGetPoint(3);
        expect(tennis.score()).toEqual("THIRTY FORTY");
    });

    it("should show DUECE when player A win 3 times and player B win 3 times", function() {
        playerAGetPoint(3);
        playerBGetPoint(3);
        expect(tennis.score()).toEqual("DUECE");
    });

    it("should show PLAYER A AVD when player A win 4 times and player B win 3 times", function() {
        playerAGetPoint(4);
        playerBGetPoint(3);
        expect(tennis.score()).toEqual("PLAYER A ADV");
    });

    it("should show PLAYER B AVD when player A win 3 times and player B win 4 times", function() {
        playerAGetPoint(3);
        playerBGetPoint(4)
        expect(tennis.score()).toEqual("PLAYER B ADV");
    });

    it("should show PLAYER A WIN AFTER AVD when player A win 5 times and player B win 3 times", function() {
        playerAGetPoint(5);
        playerBGetPoint(3);
        expect(tennis.score()).toEqual("PLAYER A WIN");
    });

    it("should show PLAYER B WIN AFTER AVD when player A win 3 times and player B win 5 times", function() {
        playerAGetPoint(3);
        playerBGetPoint(5);
        expect(tennis.score()).toEqual("PLAYER B WIN");
    });

    it("should show DUECE AFTER AVD when player A win 4 times and player B win 4 times", function() {
        playerAGetPoint(4);
        playerBGetPoint(4);
        expect(tennis.score()).toEqual("DUECE");
    });

    it("should show THIRTY FIFTEEN when A win 1 ponit and B win 1 point then A win 1 point again", function() {
        playerAGetPoint(1);
        playerBGetPoint(1);
        playerAGetPoint(1);
        expect(tennis.score()).toEqual("THIRTY FIFTEEN");
    });

    function playerAGetPoint(point){
        for(var i = 0 ; i < point ; i++){
            tennis.playerAWin();
        }
    }

    function playerBGetPoint(point){
        for(var i = 0 ; i < point ; i++){
            tennis.playerBWin();
        }
    }
});