import { expect } from 'chai';
import calcularFatorial from '../lista-exercicios-function/ex08/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('Função calcularFatorial', () => {
    context('Quando o número é 5', () => {
        it('Deve retornar 120', () => {
            const expectedResult = calcularFatorial(5);
            expect(expectedResult).to.equal(120)
                .and.not.to.equal(600);
        });
    });

    context('Quando o número é 8', () => {
        it('Deve retornar 40320', () => {
            const expectedResult = calcularFatorial(8);
            expect(expectedResult).to.be.a('number');
            expect(expectedResult).to.equal(40320)
                .and.not.to.be.oneOf([100320, 12983]);
        });
    });

    context('Quando o número é 10', () => {
        it('Deve retornar 3628800', () => {
            const expectedResult = calcularFatorial(10);
            expect(expectedResult).to.be.a('number');
            expect(expectedResult).to.equal(3628800)
                .and.to.be.greaterThan(40000);
        });
    });
});

