import { expect } from 'chai';
import  calcularFatorial  from '../lista-exercicios-function/ex08/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('calculareFactorial', () => {
    it('Deve retornar 120 do numero 5', () => {
        const expectedResult = calcularFatorial(5);
        expect(expectedResult).to.equal(120);
        expect(expectedResult).not.to.equal(600)
    });

    it('Deve retornar 40320 do numero 8', () => {
        const expectedResult = calcularFatorial(8);
        expect(expectedResult).to.equal(40320);
        expect(expectedResult).not.to.be.oneOf([100320, 12983]);
    })

    it('Deve retornar 3628800 do numero 10', () => {
        const expectedResult = calcularFatorial(10);
        expect(expectedResult).to.equal(3628800);
        expect(expectedResult).to.be.greaterThan(40000);
    });
});