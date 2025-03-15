import { expect } from 'chai';
import { calcularAreaTriangulo }  from '../lista-exercicios-function/ex03/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
}

describe('calculateAreatriangle', () => {
    it('Deve retornar numero 50 do calculo 10x10 /2', () => {
        const expectedResult = calcularAreaTriangulo(10, 10);
        expect(expectedResult).to.equal('50.00');
        expect(expectedResult).not.to.equal('30.00');
    });

    it('Deve retornar 5000 do calculo 100x100 /2', () => {
        const expectedResult = calcularAreaTriangulo(100, 100);
        expect(expectedResult).to.equal('5000.00');
        expect(expectedResult).to.not.be.oneOf(['3000.00', '4000.00']);
    });

    it('Deve retornar 312500000.00 do calculo 25000x25000 /2', () => {
        const expectedResult = calcularAreaTriangulo(25000, 25000);
        expect(expectedResult).to.equal('312500000.00');
        expect(Number(expectedResult)).to.be.greaterThan(1000000.00);
    });
});