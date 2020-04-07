import random from 'mout/random/random';

    describe('random/random', function(){

        it('should use Math.random as default PRNG', function () {
            expect( random.get ).toBe( Math.random );
        });


        it('should return the value generated by the provided PRNG', function () {
            var n = 0;
            random.get = function(){
                return ++n % 2? 0 : 1;
            };
            expect( random() ).toEqual( 0 );
            expect( random() ).toEqual( 1 );
            expect( random() ).toEqual( 0 );
            expect( random() ).toEqual( 1 );
            random.get = Math.random; // reset
        });

    });


