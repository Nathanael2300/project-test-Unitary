import { expect } from 'chai';
import {contarOcorrencias} from '../lista-exercicios-function/ex09/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('countOccurrences', () => {
    context('Contagem de caracteres em strings', () => {
        context('Quando a string é "Banana"', () => {
            it('Deve retornar que há 3 ocorrências da letra "a"', () => {
                const expectedResult = contarOcorrencias('Banana', 'a');
                expect(expectedResult).to.be.a('number')
                    .and.to.equal(3)
                    .and.not.to.equal(1);
            });
        });
    
        context('Quando a string é "paralelepipedo"', () => {
            it('Deve retornar que há 2 ocorrências da letra "a"', () => {
                const expectedResult = contarOcorrencias('paralelepipedo', 'a');
                expect(expectedResult).to.be.a('number').and.to.equal(2);
            });
    
            it('Deve retornar que há 3 ocorrências da letra "e"', () => {
                const expectedResult = contarOcorrencias('paralelepipedo', 'e');
                expect(expectedResult).to.be.a('number')
                    .and.to.equal(3)
                    .and.not.to.equal(4);
            });
        });
    });
    
});

