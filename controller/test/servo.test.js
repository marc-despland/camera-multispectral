const assert = require('assert');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;
const Gpio = require('pigpio').Gpio;


describe('PiGpio', () => {

    it('servo move', async () => {
        const motor = new Gpio(18, {mode: Gpio.OUTPUT});
        motor.servoWrite(1000);
    });
});