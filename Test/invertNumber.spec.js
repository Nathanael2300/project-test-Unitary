import { expect } from 'chai';
import inverterNumero from '../lista-exercicios-function/ex05/index.js';

describe('Função inverterNumero', () => {
    context('Inversão de números', () => {
        it('Deve retornar "432" ao inverter 234', () => {
            const resultado = inverterNumero(234);
            expect(resultado).to.be.a('string').and.to.equal('432');
        });

        it('Deve retornar "925" ao inverter 529', () => {
            const resultado = inverterNumero(529);
            expect(resultado).to.be.a('string').and.to.equal('925');
        });

        it('Deve retornar "627" ao inverter 726', () => {
            const resultado = inverterNumero(726);
            expect(resultado).to.be.a('string').and.to.equal('627');
        });
    });
});
