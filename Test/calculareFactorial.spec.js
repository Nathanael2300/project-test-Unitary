import { expect } from 'chai';
import calcularFatorial from '../lista-exercicios-function/ex08/index.js';

describe('Função calcularFatorial', () => {
    context('Quando o número é 5', () => {
        it('Deve retornar 120', () => {
            const resultado = calcularFatorial(5);
            expect(resultado).to.be.a('number').and.equal(120);
        });
    });

    context('Quando o número é 8', () => {
        it('Deve retornar 40320', () => {
            const resultado = calcularFatorial(8);
            expect(resultado).to.be.a('number').and.equal(40320);
        });
    });

    context('Quando o número é 10', () => {
        it('Deve retornar 3628800', () => {
            const resultado = calcularFatorial(10);
            expect(resultado).to.be.a('number').and.equal(3628800);
            expect(resultado).to.be.greaterThan(40000);
        });
    });
});
