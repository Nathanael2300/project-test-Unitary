import { expect } from 'chai';
import calcularCuboNumero from '../lista-exercicios-function/ex01/index.js';
describe('Função cubeNumber', () => {
    context('Quando o número é 10', () => {
        it('Deve retornar 1000', () => {
            const expectedResult = calcularCuboNumero(10);
            expect(expectedResult).to.be.a('number').and.to.be.equal(1000);
        });
    });
    
    context('Quando o número é 30', () => {
        it('Deve retornar 27000', () => {
            const expectedResult = calcularCuboNumero(30);
            expect(expectedResult).to.be.a('number').and.to.be.equal(27000);
        });
    });
    
    context('Quando o número é 100', () => {
        it('Deve retornar 1000000', () => {
            const expectedResult = calcularCuboNumero(100);
            expect(expectedResult).to.be.a('number').and.to.be.equal(1000000);
        });
    });
    
});