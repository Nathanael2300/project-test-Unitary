import { expect } from 'chai';
import calcularInvestimento from '../lista-exercicios-function/ex07/index.js';

describe('calculeteInvest', () => {
    context('Quando o investimento é de 5000 com taxa de 5% por 3 anos', () => {
        it('Deve retornar 5796.37', () => {
            const expectedResult = calcularInvestimento(5000, 5, 3);
            expect(expectedResult).to.be.equal(5796.37);
            expect(expectedResult).not.to.be.oneOf([5796]);
        });
    });
    
    context('Quando o investimento é de 10000 com taxa de 2% por 5 anos', () => {
        it('Deve retornar 11025', () => {
            const expectedResult = calcularInvestimento(10000, 2, 5);
            expect(expectedResult).to.be.a('number')
                .and.to.be.equal(11025)
                .and.not.to.be.greaterThan(11025)
                .and.not.to.be.lessThan(11025);
        });
    });
    
    context('Quando o investimento é de 50000 com taxa de 30% por 8 anos', () => {
        it('Deve retornar 503132.84', () => {
            const expectedResult = calcularInvestimento(50000, 30, 8);
            expect(expectedResult).to.be.a('number')
                .and.to.be.equal(503132.84)
                .and.not.to.equal(503132);
        });
    });
});