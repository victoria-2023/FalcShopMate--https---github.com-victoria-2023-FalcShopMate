const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../app');
const inventoryService = require('../services/inventoryService');

chai.use(chaiHttp);
const { expect } = chai;

describe('Inventory Service', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should retrieve inventory status for a product', async () => {
        const productId = '123';
        const fakeInventory = { productId: productId, available: true };
        sandbox.stub(inventoryService, 'checkInventory').resolves(fakeInventory);

        const res = await chai.request(app)
            .get(`/api/inventory/${productId}`);

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(fakeInventory);
    });
});
