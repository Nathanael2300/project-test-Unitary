import { expect } from 'chai';
import contarVogais from '../lista-exercicios-function/ex06/index.js';

describe('Função contarVogais', () => {
    context('Contagem de vogais em strings', () => {
        it('Deve retornar 5 vogais na string "Ola tudo bem"', () => {
            const resultado = contarVogais('Ola tudo bem');
            expect(resultado).to.be.a('number').and.to.equal(5);
        });

        it('Deve retornar 6 vogais na string "O amor é lindo"', () => {
            const resultado = contarVogais('O amor é lindo');
            expect(resultado).to.be.a('number').and.to.equal(6);
        });

        it('Deve retornar 7 vogais na string "quero me tornar QA"', () => {
            const resultado = contarVogais('quero me tornar QA');
            expect(resultado).to.be.a('number').and.to.equal(7);
        });
    });
});
