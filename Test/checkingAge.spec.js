import { expect } from 'chai';
import checkAge from '../lista-exercicios-function/ex11/index.js';

describe('Função checkAge', () => {
    context('Quando a idade é 18 anos ou mais', () => {
        it('Deve retornar "Você é maior de idade"', () => {
            const idade = 18;
            const resultado = checkAge(idade);

            expect(resultado).to.be.a('string')
                .and.to.equal('Você é maior de idade');
        });
    });

    context('Quando a idade é menor que 18 anos', () => {
        it('Deve retornar "Você é menor de idade"', () => {
            const idade = 17;
            const resultado = checkAge(idade);

            expect(resultado).to.be.a('string')
                .and.to.equal('Você é menor de idade');
        });
    });
});
