import { expect } from 'chai';
import { contarOcorrencias } from '../lista-exercicios-function/ex09/index.js';

describe('Função contarOcorrencias', () => {
    context('Contagem de caracteres em strings', () => {
        it('Deve retornar 3 ocorrências da letra "a" na string "Banana"', () => {
            const resultado = contarOcorrencias('Banana', 'a');
            expect(resultado).to.be.a('number').and.to.equal(3);
        });

        it('Deve retornar 2 ocorrências da letra "a" na string "paralelepipedo"', () => {
            const resultado = contarOcorrencias('paralelepipedo', 'a');
            expect(resultado).to.be.a('number').and.to.equal(2);
        });

        it('Deve retornar 3 ocorrências da letra "e" na string "paralelepipedo"', () => {
            const resultado = contarOcorrencias('paralelepipedo', 'e');
            expect(resultado).to.be.a('number').and.to.equal(3);
        });
    });
});
