describe("Tennis", function() {
    it("should show LOVE ALL when start game", function() {
        var tennis = new Tennis();
        var result = tennis.score();
        expect(result).toEqual("LOVE LOVE");
    });

    xit("should show FIFTEEN LOVE when start game", function() {
        var tennis = new Tennis();   
        var result = tennis.score();
        expect(result).toEqual("FIFTEEN LOVE");
    });
});