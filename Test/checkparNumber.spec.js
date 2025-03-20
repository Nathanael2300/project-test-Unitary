import { expect } from 'chai';
import verificarNumeroPar from '../lista-exercicios-function/ex10/index.js';

describe('Função verificarNumeroPar', () => {
    context('Quando o número é 2', () => {
        it('Deve retornar "Esse número é par"', () => {
            const resultado = verificarNumeroPar(2);

            expect(resultado).to.be.a('string')
                .and.to.equal('Esse número é par')
                .and.not.to.be.oneOf(['Número inválido', undefined, null, 1, 3]);
    });
});
    context('Quando o número é 3', () => {
        it('Deve retornar "Esse número é ímpar"', () => {
            const resultado = verificarNumeroPar(3);

            expect(resultado).to.be.a('string')
                .and.to.equal('Esse número é ímpar');
        });
    });
});
