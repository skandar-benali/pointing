import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PointingModule } from './pointing.module';
import { PointingService } from './pointing.service';

describe('/pointing/check-in POST checkin', () => {
  let app: INestApplication;
  const checkIn = {
    id: 1,
    checkIn: '2021-12-16T10:53:12.522Z',
    checkOut: null,
    comment: 'test comment',
    createdAt: '2021-12-16T10:53:12.522Z',
    updatedAt: null,
  };
  const pointingService = {
    create: () => checkIn,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PointingModule],
    })
      .overrideProvider(PointingService)
      .useValue(pointingService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('should return the created employee', async () => {
    // console.log(res.);

    return request(app.getHttpServer())
      .post('/pointing/check-in')
      .send({
        employee: 1,
        comment: 'test comment',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchSnapshot();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
