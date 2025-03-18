import { expect } from 'chai';
import {calcularArea, calcularPerimetro} from '../lista-exercicios-function/ex04/index.js';



export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('Calculate area and perimeter', () => {
    context('Quando o raio é 5', () => {
        it('Deve retornar 78.54', () => {
            const expectedResult = calcularArea(5);
            expect(expectedResult).to.be.a('number');
            expect(expectedResult).to.equal(78.54)
                .and.not.to.equal(78)
                .and.not.to.be.greaterThan(78.54)
                .and.not.to.be.lessThan(78.54);
        });
    });
    
    context('Quando o raio é 10', () => {
        it('Deve retornar 62.83', () => {
            const expectedResult = calcularPerimetro(10);
            expect(expectedResult).to.be.a('number');
            expect(expectedResult).to.equal(62.83)
                .and.not.to.be.oneOf([62, 63]);
        });
    });
});