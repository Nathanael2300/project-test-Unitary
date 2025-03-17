import { expect } from 'chai';
import {contarOcorrencias} from '../lista-exercicios-function/ex09/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('countOccurrences', () => {
    it('Deve retornar que a string "Banana" tenha 3 caracteres "a" ', () => {
        const expectedResult = contarOcorrencias('Banana', 'a');
        expect(expectedResult).to.equal(3);
        expect(expectedResult).not.to.equal(1);
    });

    it('Deve retornar que a string "paralelepipedo" tenha 2 "A" e 3 "E" ', () => {
        const expectedResult = contarOcorrencias('paralelepipedo', 'a');
        const expectedResult_2 = contarOcorrencias('paralelepipedo', 'e');
        expect(expectedResult).to.equal(2);
        expect(expectedResult_2).to.equal(3);
        expect(expectedResult).not.to.equal(4);
        expect(expectedResult_2).not.to.equal(2);
    });


});

