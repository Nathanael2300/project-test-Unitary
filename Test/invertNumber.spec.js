import { expect } from 'chai';
import inverterNumero   from '../lista-exercicios-function/ex05/index.js';

describe('invertNumber', () => {
    context('Inversão de números', () => {
        context('Quando o número é 234', () => {
            it('Deve retornar a inversão como "432"', () => {
                const expectedResult = inverterNumero(234);
                expect(expectedResult).to.be.a('string').and.to.be.equal('432');
            });
        });
    
        context('Quando o número é 529', () => {
            it('Deve retornar a inversão como "925"', () => {
                const expectedResult = inverterNumero(529);
                expect(expectedResult).to.be.a('string').and.to.equal('925');
            });
        });
    
        context('Quando o número é 726', () => {
            it('Deve retornar a inversão como "627"', () => {
                const expectedResult = inverterNumero(726);
                expect(expectedResult).to.be.a('string').and.to.equal('627');
            });
        });
    });
    
});