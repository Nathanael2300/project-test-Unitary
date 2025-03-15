import { expect } from 'chai';
import contarVogais  from '../lista-exercicios-function/ex06/index.js'

export default function minhaFuncao(input) {
    return parseFloat(input);
}

describe('countVowels', () => {
    it('Deve retornar que na string "ola tudo bem" tem 5 vogais', () => {
        const expectedResult = contarVogais('Ola tudo bem');
        expect(expectedResult).to.be.equal(5);
    });

    it('Deve retornar que na string "O amor é lindo" tem 6 vogais', () => {
        const expectedResult = contarVogais('O amor é lindo');
        expect(expectedResult).to.be.equal(6);
    });

    it('Deve retornar que na string "quero me tornar QA" tem 7 vogais', () => {
        const expectedResult = contarVogais('quero me tornar QA');
        expect(expectedResult).to.equal(7);
    })
});