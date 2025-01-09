import ShieldUp from "../src/sagaSrc/ability/armor/shieldUp";
import SwordAttack from "../src/sagaSrc/ability/weapon/basicAbilitys/swordAttack";
import FireBlade from "../src/sagaSrc/ability/weapon/specialAbility/knight/fireBlade";
import Armor from "../src/sagaSrc/armor/armorAbstract";
import Character from "../src/sagaSrc/character/characterAbstract"
import Effect from "../src/sagaSrc/effects/effectAbstract";
import Freeze from "../src/sagaSrc/effects/freeze";
import DefUp from "../src/sagaSrc/effects/shieldUp";
import Stun from "../src/sagaSrc/effects/stun";
import ArmorFabric from "../src/sagaSrc/fabric/armorFabrics/armorFabric";
import CharacterFabric from "../src/sagaSrc/fabric/characterFabric"
import ClassEnum from "../src/sagaSrc/enums/classesEnum";
import Elements from "../src/sagaSrc/enums/elementsEnum";
import WeaponFabric from "../src/sagaSrc/fabric/weaponFabric";
import Weapon from "../src/sagaSrc/weapon/weaponAbstract";
import ElementChange from "../src/sagaSrc/effects/changeElement";
import HolyStrike from "../src/sagaSrc/ability/weapon/specialAbility/knight/holyStrike";
import ArmorBreak from "../src/sagaSrc/effects/armorBreakEffect";
import Burn from "../src/sagaSrc/effects/burn";
import { Game } from "../src/sagaSrc/gameClass/game";
import { unwatchFile } from "fs";
import BookAttack from "../src/sagaSrc/ability/weapon/basicAbilitys/bookAttack";
import FireBall from "../src/sagaSrc/ability/weapon/specialAbility/mage/fireball";
const armorFab = new ArmorFabric();
const weaponFab = new WeaponFabric();
const charFab = new CharacterFabric();
describe('Character,weapon and armor generator tests',()=>{
    let armor = armorFab.createConctereArmor("Test Armor",10,Elements.fire,new ShieldUp());
    it('Armor Generator test',()=>{
        expect(armor === new Armor("Test Armor",10,Elements.fire,new ShieldUp()));
    })
    it('Weapon generator',()=>{
        let testWeapon = weaponFab.createConcreteWeapon("Test Weapon",10,10,new SwordAttack(),new FireBlade());
        expect(testWeapon === new Weapon("Test Weapon",10,10,new SwordAttack(),new FireBlade()));
    })
    it('CharGenerator test',()=>{
        let armor = armorFab.createConctereArmor("Test Armor",10,Elements.fire,new ShieldUp());
        let testWeapon = weaponFab.createConcreteWeapon("Test Weapon",10,10,new SwordAttack(),new FireBlade());
        let testChar = charFab.createConcreteChar("Test Char",ClassEnum.knight,10,testWeapon,armor);
        expect(testChar === new Character("Test Char",ClassEnum.knight,10,armor,testWeapon));
    })
})
describe('Character methods tests',()=>{
    const effects = [new Freeze()];
    it("AddEffect test",()=>{
        let char = charFab.createCharacter(ClassEnum.mage);
        char.addNewEffect(new Freeze());
        expect(char.getEffects === effects);
    })
    it("EffectReduceDuration",()=>{
        let char = charFab.createCharacter(ClassEnum.mage);
        char.addNewEffect(new Freeze());
        char.reduceEffectDuration();
        expect(char.getEffects[0].getDuration === (effects[0].getDuration - 1));
    })
    it("EffectCheck test",()=>{
        let char = charFab.createCharacter(ClassEnum.mage);
        const endArr: Effect[] = [new Freeze()];
        char.addNewEffect(new Freeze());
        char.addNewEffect(new Stun());
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        expect(char.getEffects === endArr);
    })
    it("EffectCheck without delete",()=>{
        let char = charFab.createCharacter(ClassEnum.mage);
        const endArr: Effect[] = [new Freeze(),new DefUp()];
        char.addNewEffect(new Freeze());
        char.addNewEffect(new DefUp());
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        expect(char.getEffects === endArr);
    })
    it("ActAbility set",()=>{
        let char = charFab.createCharacter(ClassEnum.archer);
        char.actAbility = false;
        expect(char.canToAct === false);
    })
    it("ActAbility get",()=>{
        let char = charFab.createCharacter(ClassEnum.archer);
        expect(char.canToAct === true);
    })
    it("Take basic attack test same defType",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",10,Elements.physic,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        let currHP = char.characterHP;
        char.takeAttack(new SwordAttack());
        expect(char.characterHP === currHP);
    })
    it("Take basic attack diff defType",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        let currHP = char.characterHP;
        char.takeAttack(new SwordAttack());
        expect(char.characterHP === (currHP-5));
    })
    it("Take spec attack same defType",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.physic,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        let currHP = char.characterHP;
        let effectArr = [];
        char.takeAttack(new HolyStrike());
        expect((char.characterHP === currHP && char.getEffects === effectArr));
    })
    it("Take spec attack diff defType",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        let currHP = char.characterHP;
        let effectArr = [];
        char.takeAttack(new HolyStrike());
        expect((char.characterHP === (currHP-5) && char.getEffects === effectArr));
    })
    it("Choose attack test",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        const attack = char.chooseAttack();
        expect((attack === new FireBlade()) || (attack === new ShieldUp()) || (attack === new SwordAttack()) && (attack !== undefined));
    })
})
describe('Effect apply test',()=>{
    it("Armor Break test",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",10,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        char.applyEffect(new ArmorBreak);
        const afterEffect = char.currentArmor.currentDefense;
        char.reduceEffectDuration();
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        expect((afterEffect === 0) && (char.currentArmor.currentDefense === 10));
    })
    it("Burn test",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",10,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        char.addNewEffect(new Burn);
        char.reduceEffectDuration();
        char.reduceEffectDuration();
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        let effectArr = [];
        expect((char.characterHP === 41) &&(char.getEffects === effectArr));
    })
    it("Freeze text",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        char.addNewEffect(new Freeze);
        char.reduceEffectDuration();
        const afterEffect = char.canToAct;
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        const effectArr = [];
        expect((char.canToAct === false)&& (char.getEffects ===effectArr));
    })
    it("ShieldUp test",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        char.addNewEffect(new DefUp);
        char.reduceEffectDuration();
        const afterEffect = char.currentArmor.currentDefense;
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        const effectArr = [];
        expect((afterEffect === 15) && (char.currentArmor.currentDefense === 5) && (char.getEffects === effectArr));
    })
    it("Stun test",()=>{
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new SwordAttack(),new FireBlade());
        const armor = armorFab.createConctereArmor("Armor",5,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        char.addNewEffect(new Stun);
        char.reduceEffectDuration();
        const afterEffect = char.canToAct;
        const effectArr = []
        char.reduceEffectDuration();
        char.deleteEndedEffect();
        expect((afterEffect === false) && (char.getEffects === effectArr));
    })
})
describe('Game funcs test',()=>{
    it("init duels test",()=>{
        const randGame: Game = new Game();
        randGame.initDuel(ClassEnum.knight);
        expect((randGame.teamOne.length === 1) && (randGame.teamTwo.length === 1));
    })
    it("Teams mode test",()=>{
        const randGame: Game = new Game();
        randGame.initTeams(4);
        expect((randGame.teamOne.length === 4) && (randGame.teamTwo.length === 4));
    })
    it("Shuffle test",()=>{
        const randGame: Game = new Game();
        randGame.initTeams(4);
        randGame.shuffleOrder();
        const firstChar = randGame.teamOne[0];
        expect((randGame.turnOrder.length === 8) && (randGame.turnTeamOrder.length === 8) &&(randGame.turnOrder[0] !== firstChar));
    })
    it("NewTurn test",()=>{
        const randGame: Game = new Game();
        randGame.initTeams(4);
        randGame.shuffleOrder();
        const result = randGame.newTurn();
        expect((result[0] === randGame.turnOrder[randGame.turnOrder.length-1]) && (result[1] === randGame.turnTeamOrder[randGame.turnTeamOrder.length-1]) && (result[1] !== undefined) && (result[0] !== undefined));
    })
    it("Chhose target test",()=>{
        const randGame: Game = new Game();
        randGame.initTeams(4);
        const weapon = weaponFab.createConcreteWeapon("TestWeap",10,10,new BookAttack(),new FireBall());
        const armor = armorFab.createConctereArmor("Armor",10,Elements.fire,new ShieldUp());
        let char = charFab.createConcreteChar("Test Attack",ClassEnum.knight,50,weapon,armor);
        const result = randGame.chooseTarget([char,1],new BookAttack());
        expect(result.length === 4);
    })
})