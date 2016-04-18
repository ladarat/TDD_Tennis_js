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
            testName : "should show FIFTEEN LOVE when player A win first point",
            playerAScore : 1,
            playerBScore : 0,
            result : "FIFTEEN LOVE"
        },
        {
            testName : "should show LOVE FIFTEEN when player B win",
            playerAScore : 0,
            playerBScore : 1,
            result : "LOVE FIFTEEN"
        },
        {
            testName : "should show FIFTEEN FIFTEEN when player A win one point and player B win one point",
            playerAScore : 1,
            playerBScore : 1,
            result : "FIFTEEN FIFTEEN"
        },
        {
            testName : "should show THIRTY LOVE when player A win twice",
            playerAScore : 2,
            playerBScore : 0,
            result : "THIRTY LOVE"
        },
        {
            testName : "should show LOVE THIRTY when player B win twice",
            playerAScore : 0,
            playerBScore : 2,
            result : "LOVE THIRTY"
        },
        {
            testName : "should show FORTY LOVE when player A win 3 times",
            playerAScore : 3,
            playerBScore : 0,
            result : "FORTY LOVE"
        },
        {
            testName : "should show THIRTY FIFTEEN when player A win 2 times and player B win 1 times",
            playerAScore : 2,
            playerBScore : 1,
            result : "THIRTY FIFTEEN"
        },
        {
            testName : "should show FIFTEEN THIRTY when player B win 2 times and player A win 1 times",
            playerAScore : 1,
            playerBScore : 2,
            result : "FIFTEEN THIRTY"
        },
        {
            testName : "should show LOVE FORTY when player B win 2 times and player A win 1 times",
            playerAScore : 0,
            playerBScore : 3,
            result : "LOVE FORTY"
        },
        {
            testName : "should show playerAWin when player A win 4 times",
            playerAScore : 4,
            playerBScore : 0,
            result : "PLAYER A WIN"
        },
        {
            testName : "should show FORTY FIFTEEN when player A win 3 times and player B win 1 times",
            playerAScore : 3,
            playerBScore : 1,
            result : "FORTY FIFTEEN"
        },
        {
            testName : "should show THIRTY THIRTY when player A win 2 times and player B win 2 times",
            playerAScore : 2,
            playerBScore : 2,
            result : "THIRTY THIRTY"
        },
        {
            testName : "should show FIFTEEN FORTY when player A win 1 times and player B win 3 times",
            playerAScore : 1,
            playerBScore : 3,
            result : "FIFTEEN FORTY"
        },
        {
            testName : "should show PLAYER B WIN when player B win 4 times",
            playerAScore : 0,
            playerBScore : 4,
            result : "PLAYER B WIN"
        },
        {
            testName : "should show FORTY THIRTY when player A win 3 times and player B win 2 times",
            playerAScore : 3,
            playerBScore : 2,
            result : "FORTY THIRTY"
        },
        {
            testName : "should show THIRTY FORTY when player A win 2 times and player B win 3 times",
            playerAScore : 2,
            playerBScore : 3,
            result : "THIRTY FORTY"
        },
        {
            testName : "should show DUECE when player A win 3 times and player B win 3 times",
            playerAScore : 3,
            playerBScore : 3,
            result : "DUECE"
        },
        {
            testName : "should show PLAYER A AVD when player A win 4 times and player B win 3 times",
            playerAScore : 4,
            playerBScore : 3,
            result : "PLAYER A ADV"
        },
        {
            testName : "should show PLAYER B AVD when player A win 3 times and player B win 4 times",
            playerAScore : 3,
            playerBScore : 4,
            result : "PLAYER B ADV"
        },
        {
            testName : "should show PLAYER A WIN AFTER AVD when player A win 5 times and player B win 3 times",
            playerAScore : 5,
            playerBScore : 3,
            result : "PLAYER A WIN"
        },
        {
            testName : "should show PLAYER B WIN AFTER AVD when player A win 3 times and player B win 5 times",
            playerAScore : 3,
            playerBScore : 5,
            result : "PLAYER B WIN"
        },
        {
            testName : "should show DUECE AFTER AVD when player A win 4 times and player B win 4 times",
            playerAScore : 4,
            playerBScore : 4,
            result : "DUECE"
        }

    ].forEach(function(element){
        it(element.testName, function() {
            playerAGetPoint(element.playerAScore);
            playerBGetPoint(element.playerBScore);
            expect(tennis.score()).toEqual(element.result);
        });
    });

    function playerAGetPoint(point){
        for(var i = 0 ; i < point ; i++){
            tennis.playerAWonPoint();
        }
    }

    function playerBGetPoint(point){
        for(var i = 0 ; i < point ; i++){
            tennis.playerBWonPoint();
        }
    }
});