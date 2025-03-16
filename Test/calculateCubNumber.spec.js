import { expect } from 'chai';
import calcularCuboNumero from '../lista-exercicios-function/ex01/index.js';

describe('Função cubeNumber', () => {
    it('Deve retornar o 1000 do número 10', () => {
        const expectedResult = calcularCuboNumero(10);
        expect(expectedResult).to.be.equal(1000);
    });

    it('Deve retornar o 27.000 do número 30', () => {
        const expectedResult = calcularCuboNumero(30);
        expect(expectedResult).to.be.equal(27000)
    });

    it('Deve retornar 1000000 do numero 100', () => {
        const expectedResult = calcularCuboNumero(100);
        expect(expectedResult).to.be.equal(1000000)
    });
});