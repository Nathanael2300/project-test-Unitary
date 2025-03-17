import { expect } from 'chai';
import calcularInvestimento from '../lista-exercicios-function/ex07/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('calculeteInvest', () => {
    it('Deve retornar 5796.37 do investimento "5000, 5, 3"', () => {
        const expectedResult = calcularInvestimento(5000, 5, 3);
        expect(expectedResult).to.be.equal(5796.37);
        expect(expectedResult).not.to.be.oneOf([5796]);
    });

    it('Deve retornar 11025 do investimento "10000, 2, 5"', () => {
        const expectedResult = calcularInvestimento(10000, 2, 5);
        expect(expectedResult).to.be.equal(11025);
        expect(expectedResult).not.to.be.greaterThan(11025);
        expect(expectedResult).not.to.be.lessThan(11025);
        
    });

    it('Deve retornar 503132.84 do investimento "50000, 30, 8"', () => {
        const expectedResult = calcularInvestimento(50000, 30, 8);
        expect(expectedResult).to.be.equal(503132.84);
        expect(expectedResult).not.to.equal(503132);
    });
});