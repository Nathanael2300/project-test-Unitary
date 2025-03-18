import { expect } from 'chai';
import { calcTemperatura } from '../lista-exercicios-function/ex02/index.js'

export default function minhaFuncao(input) {
    return parseFloat(input);
}

describe('convertionTemperature', () => {
    context('Conversão de temperatura', () => {
        context('Quando a temperatura é 32°F', () => {
            it('Deve retornar 0.00', () => {
                const expectedResult = calcTemperatura(32);
                expect(expectedResult).to.be.a('string').and.to.equal('0.00');
            });
        });

        context('Quando a temperatura é 300°F', () => {
            it('Deve retornar 148.89', () => {
                const expectedResult = calcTemperatura(300);
                expect(expectedResult).to.be.a('string').and.to.equal('148.89');
            });
        });

        context('Quando a temperatura é 10°F', () => {
            it('Deve retornar -12.22', () => {
                const expectedResult = calcTemperatura(10);
                expect(expectedResult).to.be.a('string').and.to.equal('-12.22');
            });
        });
    });

}); 