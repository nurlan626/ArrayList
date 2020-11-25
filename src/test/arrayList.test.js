const {assert} = require("chai");
const ArrayList = require("../ArrayList.js");

describe("ArrayList methods", () => {

    describe('init', () => {
        const aList = new ArrayList();
        const testData = [
            {
                initialArray: [1, 2, 3],
                expectedSize: 3,
                expectedString: '[1, 2, 3]',
            },
            {
                initialArray: [1, 2, 3, 4],
                expectedSize: 4,
                expectedString: '[1, 2, 3, 4]',
            },
            {
                initialArray: [1, 2, 3, 4, 5, 6],
                expectedSize: 6,
                expectedString: '[1, 2, 3, 4, 5, 6]',
            }
        ];

        testData.forEach(({ initialArray, expectedSize, expectedString }) => {
            it(`should return size ${expectedSize} and ${expectedString}`, () => {
                aList.init(initialArray);


                const actSize = aList.getSize();
                const actString = aList.MyToString();

                assert.deepEqual(actSize, expectedSize);
                assert.strictEqual(actString, expectedString);
            });
        });
    }); 

})