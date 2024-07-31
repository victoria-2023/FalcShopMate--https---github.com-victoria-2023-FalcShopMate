const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { app } = require('../app'); // Assuming your Express app is exported from app.js
const chatService = require('../services/chatService');

chai.use(chaiHttp);
const { expect } = chai;

describe('Chat Service', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should handle sending a message to the chatbot and receiving a response', async () => {
        const fakeResponse = { message: 'Hello, how can I help you?' };
        sandbox.stub(chatService, 'chatWithBot').resolves(fakeResponse);

        const res = await chai.request(app)
            .post('/api/chat')
            .send({ message: 'Hi' });

        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(fakeResponse);
    });
});
