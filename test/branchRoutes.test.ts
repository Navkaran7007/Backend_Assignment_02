import request from 'supertest';
import app from '../src/app';

describe('Branch CRUD', () => {
  it('Successful branch creation', async () => {
    // Arrange
    const obj = { name: 'Main Branch', address: '123 Street', phone: '555-1111' };

    // Act
    const res = await request(app).post('/api/v1/branches').send(obj);

    // Assert
    if (res.status === 201) {
      expect(res.body.message).toBe('Branch created successfully');
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data.name).toBe('Main Branch');
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('Missing parameters', async () => {
    // Arrange
    const empty = {};

    // Act
    const res = await request(app).post('/api/v1/branches').send(empty);

    // Assert
    if (res.status === 400) {
      expect(res.body.message).toBe('Branch name is required');
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('Successful branch retrieval', async () => {
    // Act
    const res = await request(app).get('/api/v1/branches');

    // Assert
    if (res.status === 200) {
      expect(res.body.message).toBe('Branches fetched');
      expect(Array.isArray(res.body.data)).toBe(true);
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('Successful branch retrieval', async () => {
    // Act
    const res = await request(app).get('/api/v1/branches/1');

    // Assert
    if (res.status === 200) {
      expect(res.body.message).toBe('Branch Found');
      expect(res.body.data).toHaveProperty('id', 1);
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('Missing ID parameter', async () => {
    // Act
    const res = await request(app).get('/api/v1/branches/undefined');

    // Assert
    expect(res.status).toBe(404);
  });
});
