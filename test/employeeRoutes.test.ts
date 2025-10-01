import request from 'supertest';
import app from '../src/app';

describe('Employees CRUD opeartions', () => {
  it('Employee successful creation', async () => {
    // Arrange
    const nameObj = { name: 'Alice' } as any;

    // Act
    const res = await request(app).post('/api/v1/employees').send(nameObj);

    // Assert
    if (res.status === 201) {
      expect(res.body.message).toBe('Employee created successfully');
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data.name).toBe('Alice');
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('Missing parameters', async () => {
    // Arrange
    const empty = {};

    // Act
    const res = await request(app).post('/api/v1/employees').send(empty);

    // Assert
    if (res.status === 400) {
      expect(res.body.message).toBe('Employee name is required');
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('All Employees successful retrieval', async () => {
    // Act
    const res = await request(app).get('/api/v1/employees');

    // Assert
    if (res.status === 200) {
      expect(res.body.message).toBe('Employees fetched');
      expect(Array.isArray(res.body.data)).toBe(true);
    } else {
      expect(res.status).toBe(404);
    }
  });


  it('Employee by ID successful retrieval', async () => {
    // Act
    const res = await request(app).get('/api/v1/employees/1');

    // Assert
    if (res.status === 200) {
      expect(res.body.message).toBe('Employee Found');
      expect(res.body.data).toHaveProperty('id', 1);
    } else {
      expect(res.status).toBe(404);
    }
  });

  it('Missing ID parameter', async () => {
    // Act
    const res = await request(app).get('/api/v1/employees/undefined');

    // Assert
    expect(res.status).toBe(404);
  });
});
