import { expect } from 'chai';
import calcularAreaTriangulo from '../lista-exercicios-function/ex03/index.js';

describe('calcularAreaTriangulo', () => {
    context('Quando a base e a altura são 10', () => {
        it('Deve retornar aproximadamente 50 do cálculo 10x10 / 2', () => {
            const resultado = calcularAreaTriangulo(10, 10);
            expect(resultado).to.be.a('number').and.closeTo(50.00, 0.01);
        });
    });

    context('Quando a base e a altura são 100', () => {
        it('Deve retornar aproximadamente 5000 do cálculo 100x100 / 2', () => {
            const resultado = calcularAreaTriangulo(100, 100);
            expect(resultado).to.be.a('number').and.closeTo(5000.00, 0.01);
        });
    });

    context('Quando a base e a altura são 25000', () => {
        it('Deve retornar aproximadamente 312500000.00 do cálculo 25000x25000 / 2', () => {
            const resultado = calcularAreaTriangulo(25000, 25000);
            expect(resultado).to.be.a('number').and.closeTo(312500000.00, 0.01);
            expect(resultado).to.be.greaterThan(1000000.00);
        });
    });
});
