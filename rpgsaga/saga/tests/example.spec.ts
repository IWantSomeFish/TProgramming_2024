import { calculateFunc,taskA,taskB } from "../src";

describe('TaskB func tests', () => {
    it('Array with len = 5, should return 5 values', () => {
        expect(taskB([1,2,3,4,5])).toEqual(5);
    })
    it('Empty array. Should return 0 values', () => {
        expect(taskB([])).toEqual(0);
    })
});

describe('TaskA func', ()=>{
    it('The basic case',()=>{
        expect(taskA(1,6,1)).toEqual(5)
    })
    // it('The basic case, but the step is negative (its realy inifinity)',()=>{
    //     expect(taskA(1,6,-1)).toEqual(Infinity)
    // })
    it('The beginning is less than the end, the step is negative,should return 0',()=>{
        expect(taskA(5,1,-1)).toEqual(0)
    })
    it('The beginning is less than the end, the step is positive,should return 0',()=>{
        expect(taskA(5,1,1)).toEqual(0)
    })
    it('The beginnig is equal to the end, should return 0',()=>{
        expect(taskA(1,1,1)).toEqual(0)
    })   
})

describe('Calculation func tests', () => {
    it('Should return 3', () => {
        expect(calculateFunc(3,18,3)).toEqual(2.48);
    })
    it('ln from zero, should return 0, cause the divider = -Infinity', ()=>{
        expect(calculateFunc(1,7,0)).toEqual(0)
    })
});