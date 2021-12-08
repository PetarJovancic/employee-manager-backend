import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

describe('EmployeesController', () => {
  let controller: EmployeesController;

  const mockEmployeesService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
    findAllDeleted: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
    findAll: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
    findOne: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
    delete: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
    softDelete: jest.fn().mockImplementation((id, dto) => ({
      id,
      ...dto,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [EmployeesService],
    })
      .overrideProvider(EmployeesService)
      .useValue(mockEmployeesService)
      .compile();

    controller = module.get<EmployeesController>(EmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an employee', () => {
    const dto = {
      name: 'Petar',
      email: 'petar@gmail.com',
      phone: '063111145',
      homeAddress: {
        city: 'Belgrade',
        zipCode: '011',
        address1: 'Omladinskih brigada 1',
        address2: 'Spanskih boraca 2',
      },
      dateOfEmployment: '01.03.2020.',
      dateOfBirth: '01.03.1990.',
      isDeleted: false,
    };
    expect(controller.create(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });
  });

  it('should update an employee', () => {
    const dto = {
      name: 'Nikola',
      email: 'nikola@gmail.com',
      phone: '06314541145',
      homeAddress: {
        city: 'Belgrade',
        zipCode: '011',
        address1: 'Omladinskih brigada 1',
        address2: 'Spanskih boraca 2',
      },
      dateOfEmployment: '01.03.2020.',
      dateOfBirth: '01.03.1990.',
      isDeleted: false,
    };
    expect(controller.update(dto, '1')).toEqual({
      id: '1',
      ...dto,
    });
  });

  it('should list employees', () => {
    expect(controller.findAll(1)).toEqual({
      id: 1,
    });
  });

  it('should list specific employee', () => {
    expect(controller.findOne(1)).toEqual({
      id: 1,
    });
  });

  it('should delete employee', () => {
    expect(controller.delete(1)).toEqual({
      id: expect.any(Number),
    });
  });

  it('should soft delete employee', () => {
    expect(controller.softDelete(1)).toEqual({
      id: expect.any(Number),
    });
  });

  it('should delete employee', () => {
    expect(controller.findAllDeleted()).toBeDefined();
  });
});
