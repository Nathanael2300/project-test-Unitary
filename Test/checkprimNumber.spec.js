import { expect } from 'chai';
import  verificarNumeropar  from '../lista-exercicios-function/ex10/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('checkprimNumber', () => {
    context('Quando o número é 2', () => {
        it('Deve retornar que o número 2 é par', () => {
            const expectedResult = verificarNumeropar(2);
            expect(expectedResult).to.be.a('string')
                .and.to.equal('Esse numero é par')
                .and.to.not.be.oneOf(['Número inválido', undefined, null, 1, 3]);
        });
    });
    
    context('Quando o número é 3', () => {
        it('Deve retornar que o número 3 é ímpar', () => {
            const expectedResult = verificarNumeropar(3);
            expect(expectedResult).to.be.a('string').and.to.equal('Esse numero é impar');
        });
    });
    
});