function concatenation(a, b) {
    return a.concat(" "+b);
}

describe('concatenation', function () {

    describe('concatenation', function () {
        it('john et doe devrait retourner john doe', function () {
            expect(concatenation("john", "doe")).toEqual("john doe");
        });
    })
})