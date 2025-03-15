import { expect } from 'chai';
import {calcularArea, calcularPerimetro} from '../lista-exercicios-function/ex04/index.js';



export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('Calculate area and perimeter', () => {
    it('Deve retornar 78.54 do numero 5', () => {
        const expectedResult = calcularArea(5);
        expect(expectedResult).to.equal(78.54);
        expect(expectedResult).not.to.equal(78);
        expect(expectedResult).not.to.be.greaterThan(78.54);
        expect(expectedResult).not.to.be.lessThan(78.54);
    });

    it('Deve retornar 62.83 do numero 10', () => {
        const expectedResult = calcularPerimetro(10);
        expect(expectedResult).to.equal(62.83);
        expect(expectedResult).not.to.be.oneOf([62, 63]);
    });
});