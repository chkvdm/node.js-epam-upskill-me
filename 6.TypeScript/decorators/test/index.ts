import * as assert from "assert";
import {once, identifier} from '../src';


describe('once', () => {
    it('should call method once with single argument', () => {
        class Test {
            data: string;
            @once
            setData(newData: string) {
                this.data = newData;
            }
        }
        const test = new Test();
        test.setData('first string');
        test.setData('second string');
        assert.strictEqual(test.data, 'first string')
    });

    it('should call method once with multiple arguments', () => {
        class Test {
            user: {name: string, age: number};
            @once
            setUser(name: string, age: number) {
                this.user = {name, age};
            }
        }
        const test = new Test();
        test.setUser('John',22);
        test.setUser('Bill',34);
        assert.deepStrictEqual(test.user, {name: 'John', age: 22})
    });

    it('should return always return first execution result', () => {
        class Test {
            @once
            sayHello(name: string) {
                return `Hello ${name}!`;
            }
        }
        const test = new Test();
        test.sayHello('John');
        test.sayHello('Mark');
        assert.strictEqual(test.sayHello('new name'), 'Hello John!')
    })
});

describe('identifier', () => {
    it('should return Test-example from identify', () => {
        @identifier('example')
        class Test {}
        const test = new Test();
        assert.strictEqual(test['identify'](), 'Test-example');
    });

    it('should return ClassA-prototype from identify', () => {
        @identifier('prototype')
        class ClassA {}
        const test = new ClassA();
        assert.strictEqual(test['identify'](), 'ClassA-prototype');
    })
});
