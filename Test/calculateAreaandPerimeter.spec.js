import { expect } from 'chai';
import { calcularArea, calcularPerimetro } from '../lista-exercicios-function/ex04/index.js';

describe('Funções calcularArea e calcularPerimetro', () => {
    context('Quando o raio é 5', () => {
        it('Deve retornar aproximadamente 78.54', () => {
            const resultado = calcularArea(5);
            expect(resultado).to.be.a('number').and.closeTo(78.54, 0.01);
        });
    });

    context('Quando o raio é 10', () => {
        it('Deve retornar aproximadamente 62.83', () => {
            const resultado = calcularPerimetro(10);
            expect(resultado).to.be.a('number').and.closeTo(62.83, 0.01);
        });
    });
});