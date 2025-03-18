import { expect } from 'chai';
import calcularAreaTriangulo   from '../lista-exercicios-function/ex03/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
}

describe('calculateAreatriangle', () => {
    context('Quando a base e a altura são 10', () => {
        it('Deve retornar 50 do cálculo 10x10 / 2', () => {
            const expectedResult = calcularAreaTriangulo(10, 10);
            expect(expectedResult).to.be.a('number');
            expect(expectedResult).to.equal(50.00).and.not.to.equal('30.00');
        });
    });
    
    context('Quando a base e a altura são 100', () => {
        it('Deve retornar 5000 do cálculo 100x100 / 2', () => {
            const expectedResult = calcularAreaTriangulo(100, 100);
            expect(expectedResult).to.be.a('number')
                .and.to.equal(5000.00);
        });
    });
    
    context('Quando a base e a altura são 25000', () => {
        it('Deve retornar 312500000.00 do cálculo 25000x25000 / 2', () => {
            const expectedResult = calcularAreaTriangulo(25000, 25000);
            expect(expectedResult).to.be.a('number');
            expect(expectedResult).to.equal(312500000.00);
            expect(Number(expectedResult)).to.be.greaterThan(1000000.00);
        });
    });
    
});