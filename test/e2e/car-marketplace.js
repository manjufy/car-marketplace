/**
 * End-to-end Tests
 */
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;
const app = require('../../server').app;
chai.use(http);
const testAgent = chai.request.agent(app);

const email = `manju@manju.com`;
const password = `test123`;
let bearerToken = null;
let cars, car, availability;
describe('End-to-end Test for Car Marketplace API', function() {
  describe('#indexOf()', function() {
    it('should register', (done) => {
		testAgent
            .post(`/api/auth/register`)
            .send({
                "email": email,
                "password": password,
                "full_name": "Manjunath Reddy"
            })
			.end((error, res) => {
                expect(res.statusCode).to.be.equal(204);
				done();
			});
    });
    it('should login', (done) => {
		testAgent
            .post(`/api/auth/login`)
            .send({
                "email": email,
                "password": password,
            })
			.end((error, res) => {
                bearerToken = res.body.token;
                expect(res.statusCode).to.be.equal(200);
				done();
			});
    });
    it('should show my profile', (done) => {
		testAgent
            .get(`/api/users/me`)
            .set({ "Authorization": `Bearer ${bearerToken}` })
			.end((error, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.email).to.be.equal(email);
				done();
			});
    });
    /**
     * Add a car
     */
    it('should POST a car', (done) => {
		testAgent
            .post(`/api/cars`)
            .send({
                    year: 2020,
                    make: "Toyota",
                    model: "Vios",
                    reg_no: "ABC2323-2",
                    location: "C2-232, Bukit Jalil",
                    price_type: "DAILY",
                    price: 100,
                    transmission: "Automatic",
                    fuel_type: "Diesel"
            })
            .set({ "Authorization": `Bearer ${bearerToken}` })
			.end((error, res) => {
                expect(res.statusCode).to.be.equal(204);
				done();
			});
    });
    /**
     * Add another car
     */
    it('should POST another car', (done) => {
		testAgent
            .post(`/api/cars`)
            .send({
                    year: 2019,
                    make: "Subaru",
                    model: "XV",
                    reg_no: "XYN-2",
                    location: "24, Silverstone, UK",
                    price_type: "MONTHLY",
                    price: 1900,
                    transmission: "Automatic",
                    fuel_type: "Petrol"
            })
            .set({ "Authorization": `Bearer ${bearerToken}` })
			.end((error, res) => {
                expect(res.statusCode).to.be.equal(204);
				done();
			});
    });
    /**
     * Show all my cars
     */
    it('should show all cars in my inventory', (done) => {
		testAgent
            .get(`/api/cars`)
            .set({ "Authorization": `Bearer ${bearerToken}` })
			.end((error, res) => {
                expect(res.statusCode).to.be.equal(200);
                const total = res.body.length;
                cars = res.body;
                expect(total).to.be.equal(2);
				done();
			});
    });
    /**
     * Show one of the car
     */
    it('should show one of my car from the inventory', (done) => {
        testAgent
        .get(`/api/cars/${cars[0].id}`)
        .set({ "Authorization": `Bearer ${bearerToken}` })
        .end((error, res) => {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
    /**
     * Add availability for the first car
     */
    it('should show one of my car from the inventory', (done) => {
        const today = new Date();
        const tomorrow = today.setDate(today.getDate() + 1);

        testAgent
        .post(`/api/cars/${cars[0].id}/availabilities`)
        .send({
            from_datetime: today,
            to_datetime: tomorrow
        })
        .set({ "Authorization": `Bearer ${bearerToken}` })
        .end((error, res) => {
            expect(res.statusCode).to.be.equal(204);
            done();
        });
    });
    it('should show all availabilities for the car', (done) => {
        testAgent
        .get(`/api/cars/${cars[0].id}/availabilities`)
        .set({ "Authorization": `Bearer ${bearerToken}` })
        .end((error, res) => {
            availability = res.body;
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
    it('should show an availability for a car', (done) => {
        testAgent
        .get(`/api/cars/${cars[0].id}/availabilities/${availability[0].id}`)
        .set({ "Authorization": `Bearer ${bearerToken}` })
        .end((error, res) => {
            availability = res.body;
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
    it('should update availability for a car', (done) => {
        const today = new Date();
        const tomorrow = today.setDate(today.getDate() + 1);
        const dayAfterTomorrow = today.setDate(today.getDate() + 2);
        testAgent
        .patch(`/api/cars/${cars[0].id}/availabilities/${availability.id}`)
        .send({
            from_datetime: tomorrow,
            to_datetime: dayAfterTomorrow
        })
        .set({ "Authorization": `Bearer ${bearerToken}` })
        .end((error, res) => {
            expect(res.statusCode).to.be.equal(204);
            done();
        });
    });
    it('should show updated availability for a car', (done) => {
        testAgent
        .get(`/api/cars/${cars[0].id}/availabilities/${availability.id}`)
        .set({ "Authorization": `Bearer ${bearerToken}` })
        .end((error, res) => {
            availability = res.body;
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
  });
});