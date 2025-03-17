import { expect } from 'chai';
import inverterNumero   from '../lista-exercicios-function/ex05/index.js';

describe('invertNumber', () => {
    it('Deve retonar a inversão do numero 234', () => {
        const expectedResult = inverterNumero(234);
        expect(expectedResult).to.be.equal('432');
    });

    it('Deve retonar a inversão do numero 529', () => {
        const expectedResult = inverterNumero(529);
        expect(expectedResult).to.equal('925')
    });

    it('Deve retornar a inversão do numero 726', () => {
        const expectedResult = inverterNumero(726);
        expect(expectedResult).to.equal('627');
    })
});