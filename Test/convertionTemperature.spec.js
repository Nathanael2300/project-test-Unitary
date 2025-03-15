import { expect } from 'chai';
import  calcTemperatura  from '../lista-exercicios-function/ex02/index.js'

export default function minhaFuncao(input) {
    return parseFloat(input);
}

describe('convertionTemperature', () => {
    it('Deve retornar 0.00 da temperatura 32', () => {
        const expectedResult = calcTemperatura(32);
        expect(expectedResult).to.equal('0.00');
    });

    it('Deve retornar 148.89 da temperatura 300', () => {
        const expectedResult = calcTemperatura(300);
        expect(expectedResult).to.equal('148.89');
    });

    it('Deve retornar -12.22 da temperatura 10', () => {
        const expectedResult = calcTemperatura(10) ;
        expect(expectedResult).to.equal('-12.22');
    });
}); 