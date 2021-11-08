import { Test, TestingModule } from '@nestjs/testing';
import { PointingService } from './pointing.service';

describe('PointingService', () => {
  let service: PointingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointingService],
    }).compile();

    service = module.get<PointingService>(PointingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
