import { expect } from 'chai';
import { calcTemperatura } from '../lista-exercicios-function/ex02/index.js';

describe('Função calcTemperatura', () => {
    context('Conversão de temperatura de Fahrenheit para Celsius', () => {
        it('Deve retornar "0.00" quando a temperatura for 32°F', () => {
            const resultado = calcTemperatura(32);
            expect(resultado).to.be.a('string').and.to.equal('0.00');
        });

        it('Deve retornar "148.89" quando a temperatura for 300°F', () => {
            const resultado = calcTemperatura(300);
            expect(resultado).to.be.a('string').and.to.equal('148.89');
        });

        it('Deve retornar "-12.22" quando a temperatura for 10°F', () => {
            const resultado = calcTemperatura(10);
            expect(resultado).to.be.a('string').and.to.equal('-12.22');
        });
    });
});
