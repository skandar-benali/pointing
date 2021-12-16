import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { EmployeeModule } from './employee.module';
import { INestApplication } from '@nestjs/common';
import { EmployeeService } from './employee.service';

describe('/employee POST create employee', () => {
  let app: INestApplication;
  const user = {
    firstName: 'tester',
    name: 'tester',
    department: 1,
  };
  const employeeService = {
    create: () => ({
      ...user,
      id: 1,
      createdAt: '2021-12-16T10:32:04.710Z',
      updatedAt: '2021-12-16T10:32:04.710Z',
    }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [EmployeeModule],
    })
      .overrideProvider(EmployeeService)
      .useValue(employeeService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('should return the created employee', async () => {
    // console.log(res.);

    return request(app.getHttpServer())
      .post('/employee')
      .send(user)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchSnapshot();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
