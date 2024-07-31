const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../app');
const recommendationService = require('../services/recommendationService');

chai.use(chaiHttp);
const { expect } = chai;

describe('Recommendation Service', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should fetch recommendations based on user ID', async () => {
        const userId = 'user1';
        const fakeRecommendations = [{ productId: 'prod1', score: 9.5 }, { productId: 'prod2', score: 8.5 }];
        sandbox.stub(recommendationService, 'fetchRecommendations').resolves(fakeRecommendations);

        const res = await chai.request(app)
            .get(`/api/recommendations/${userId}`);

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(fakeRecommendations);
    });
});
