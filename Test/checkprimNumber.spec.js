import { expect } from 'chai';
import  verificarNumeropar  from '../lista-exercicios-function/ex10/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('checkprimNumber', () => {
    it('Deve retornar que o numero 2 é par', () => {
        const expectedResult = verificarNumeropar(2);
        expect(expectedResult).to.equal(`Esse numero é par`);
        expect(expectedResult).to.not.be.oneOf(['Número inválido', undefined, null, 1, 3]);
    });

    it('Deve retornar que o numero 3 é impar', () => {
        const expectedResult = verificarNumeropar(3);
        expect(expectedResult).to.equal('Esse numero é impar');
    });
});