import { expect } from 'chai';
import  checkAge  from '../lista-exercicios-function/ex11/index.js';

export default function minhaFuncao(input) {
    return parseFloat(input);
};

describe('checkingAge', () => {
    context('Quando a idade é 18 anos ou mais', () => {
        it('Deve retornar a mensagem "Voce é maior de idade" caso o usuario estiver 18 anos ou mais', () => {
            const age = 18;
            const expectedResult = checkAge(age);
            
            expect(expectedResult).to.be.a('string').and.to.be.eq('Voce é maior de idade')
            
        });
    });

    context('Quando a idade é menos de 18 ', () => {
        it('Deve retornar a mensagem "Voce é menor de idade" caso o ususario estiver 17 anos ou menos', () => {
            const age = 17;
            const expectedResult = checkAge(age);
    
            expect(expectedResult).to.be.a('string').and.to.be.eq('Voce é menor de idade')
        });
    });
});