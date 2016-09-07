function addition(a, b) {
    return a + b;
}

describe('Calculette', function () {

    describe('addition', function () {
        it('1 et 2 devrait retourner 3', function () {
           expect(addition(1,2)).toEqual(3);
        });
        it('5 et 8 devrait retourner 13', function () {
            expect(addition(5,8)).toEqual(13);
        });

    })
})
