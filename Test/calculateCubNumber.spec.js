import { expect } from 'chai';
import calcularCuboNumero from '../lista-exercicios-function/ex01/index.js';

describe('Função calcularCuboNumero', () => {
    context('Quando o número é 10', () => {
        it('Deve retornar 1000', () => {
            const resultado = calcularCuboNumero(10);
            expect(resultado).to.equal(1000);
        });
    });

    context('Quando o número é 30', () => {
        it('Deve retornar 27000', () => {
            const resultado = calcularCuboNumero(30);
            expect(resultado).to.equal(27000);
        });
    });

    context('Quando o número é 100', () => {
        it('Deve retornar 1000000', () => {
            const resultado = calcularCuboNumero(100);
            expect(resultado).to.equal(1000000);
        });
    });
});