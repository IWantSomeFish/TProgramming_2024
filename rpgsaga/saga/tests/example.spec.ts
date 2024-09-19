import { calculateFunc,taskA,taskB } from "../src";

describe('TaskB func tests', () => {
    it('should return 5 values', () => {
        expect(taskB([1,2,3,4,5])).toEqual(5);
    })
    it('Empty array. Should return 0 values', () => {
        expect(taskB([])).toEqual(0);
    })
});

describe('TaskA func', ()=>{
    it('should return 5 value',()=>{
        expect(taskA(1,6,1)).toEqual(5)
    })
    it('The beginning is less than the end, the step is negative',()=>{
        expect(taskA(5,0,-1)).toEqual(5)
    })
})