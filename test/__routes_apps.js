const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');
const faker = require('faker');
const App = require('../src/models/app');

// Unit Test for APP Routes
describe('App Routes', () => {
  let server;
  let app;
  let testApp = {};

  // Open server at each stub
  beforeEach((done) => {
    server = require('../src/server');
    // Create an app with temp. details
    const fakeApp = {
      id: faker.random.number(),
      title: faker.name.title(),
      description: faker.company.catchPhraseDescriptor(),
      releaseDate: faker.phone.phoneNumber(),
    };
    // Add fake app data into database
    App.add(fakeApp,
      (err) => {
        throw new Error(err);
      },
      (data) => {
        testApp = data;
        done();
      }
    );
  });

  // Close server after each stub done
  afterEach((done) => {
    server.close();

    App.remove(testApp,
      (err) => {
        throw new Error(err);
      },
      (data) => {
        expect(data).to.be.equal(1);
        done();
      }
    );
  });

  // Test route of all apps
  it('should list all apps on /api/v1/apps GET', (done) => {
    request(server)
      .get('/api/v1/apps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const apps = res.body;

        // Save one single app from the list to test on in later tests
        this.app = testApp;
        expect(apps.length).to.be.above(0);
      })
      .end(done);
  });

  // Test route of all apps for one user
  it('should list all apps on /api/v1/users/:id/apps GET', (done) => {
    request(server)
      .get(`/api/v1/users/${this.app.id}/apps`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const userApps = res.body;
        assert.isArray(userApps.users);
      })
      .end(done);
  });

  // Test for a single app
  it('should list app obj with id, title, description, & releaseDate on /api/v1/apps/:id GET',
    (done) => {
      request(server)
      .get(`/api/v1/apps/${this.app.id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        app = res.body;
        expect(app).to.have.property('id');
        expect(app).to.have.property('title');
        expect(app).to.have.property('description');
        expect(app).to.have.property('releaseDate');
      })
      .end(done);
    });
});
