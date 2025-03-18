import { expect } from 'chai';
import contarVogais  from '../lista-exercicios-function/ex06/index.js'

export default function minhaFuncao(input) {
    return parseFloat(input);
}

describe('countVowels', () => {
    context('Contagem de vogais em strings', () => {
        context('Quando a string é "Ola tudo bem"', () => {
            it('Deve retornar que há 5 vogais', () => {
                const expectedResult = contarVogais('Ola tudo bem');
                expect(expectedResult).to.be.a('number').and.to.be.equal(5);
            });
        });
    
        context('Quando a string é "O amor é lindo"', () => {
            it('Deve retornar que há 6 vogais', () => {
                const expectedResult = contarVogais('O amor é lindo');
                expect(expectedResult).to.be.a('number').and.to.be.equal(6);
            });
        });
    
        context('Quando a string é "quero me tornar QA"', () => {
            it('Deve retornar que há 7 vogais', () => {
                const expectedResult = contarVogais('quero me tornar QA');
                expect(expectedResult).to.be.a('number').and.to.equal(7);
            });
        });
    });
    
});