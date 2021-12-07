import { Injectable } from '@nestjs/common';
import { Employee } from './interfaces/employee.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async findAll(page: number): Promise<Employee[]> {
    return await this.employeeModel
      .find()
      .limit(10)
      .skip((page - 1) * 10);
  }

  async findAllDeleted(): Promise<Employee[]> {
    return await this.employeeModel.find().where({ isDeleted: true });
  }

  async findOne(id: string): Promise<Employee> {
    return await this.employeeModel.findOne({ _id: id });
  }

  async create(employee: Employee): Promise<Employee> {
    const newEmployee = new this.employeeModel(employee);
    return await newEmployee.save();
  }

  async delete(id: string): Promise<Employee> {
    return await this.employeeModel.findByIdAndRemove(id);
  }

  async softDelete(id: any): Promise<any> {
    return await this.employeeModel.updateOne({ _id: id }, { isDeleted: true });
  }

  async update(id: string, employee: Employee): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }
}
