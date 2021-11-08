import { Test, TestingModule } from '@nestjs/testing';
import { PointingController } from './pointing.controller';
import { PointingService } from './pointing.service';

describe('PointingController', () => {
  let controller: PointingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointingController],
      providers: [PointingService],
    }).compile();

    controller = module.get<PointingController>(PointingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
