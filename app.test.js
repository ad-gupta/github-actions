const request = require('supertest');
const app = require('./index');

test('GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World!");
});

test('POST /add - valid numbers', async () => {
    const res = await request(app).post('/add').send({ num1: 5, num2: 3 });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(8);
});

test('POST /add - invalid input', async () => {
    const res = await request(app).post('/add').send({ num1: "a", num2: 3 });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Invalid input, numbers required");
});

test('POST /subtract - valid numbers', async () => {
    const res = await request(app).post('/subtract').send({ num1: 10, num2: 4 });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(6);
});

test('POST /subtract - invalid input', async () => {
    const res = await request(app).post('/subtract').send({ num1: "x", num2: 4 });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Invalid input, numbers required");
});

test('POST /multiply - valid numbers', async () => {
    const res = await request(app).post('/multiply').send({ num1: 10, num2: 4 });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(40);
});

test('POST /multiply - invalid input', async () => {
    const res = await request(app).post('/multiply').send({ num1: "x", num2: 4 });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Invalid input, numbers required");
});
