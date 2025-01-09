import Cat from "../src/polyLab/cat"
import Dog from "../src/polyLab/dog";

describe('Age check tests',()=>{
    const rnadCat = new Cat('Barsik',5,'White');
    it ('Constructor test', ()=>{
        expect(rnadCat.age == 5);
    })
    it('Age negative test',()=>{
        expect(()=>{
            rnadCat.age = -20
        }).toThrow(Error('Age is incorrect'))
    })

})
describe('Make sound test',()=>{
    it('Dog sound test',()=>{
        const sharik = new Dog('Sharik',5,"Black");
        expect(sharik.makeSound() === "Fow-Fow!");
    })
    it('Cat sound test',()=>{
        const barsik = new Cat('Barsik',5,'White');
        expect(barsik.makeSound() === "Meow");
    })
})
describe('toString test',()=>{
    it('dog toString test',()=>{
        const sharik = new Dog('Sharik',5,"Black");
        expect(sharik.toString() === "Sharik with 5 and its color is Black");
    })
    it ('cat toString test',()=>{
        const barsik = new Cat('Barsik',5,'White');
        expect(barsik.toString() === 'Barsik with 5 and its color is White');
    })
})