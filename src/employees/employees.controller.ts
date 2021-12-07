import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesService } from './employees.service';
import { Employee } from './interfaces/employee.interface';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
  ApiParam,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('find-deleted')
  @ApiOkResponse({ description: 'List all deleted employees' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  findAllDeleted(): Promise<Employee[]> {
    return this.employeesService.findAllDeleted();
  }

  @Get('find-all')
  @ApiOkResponse({ description: 'List all employees' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  findAll(@Query('page') page: number): Promise<Employee[]> {
    return this.employeesService.findAll(page);
  }

  @Get('/find-one/:id')
  @ApiOkResponse({ description: 'List specific employee' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiParam({ name: 'id', type: 'string' })
  findOne(@Param('id') id): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  @Post('create')
  @ApiCreatedResponse({ description: 'Employee created' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiBody({
    type: CreateEmployeeDto,
    description: 'Employee structure',
  })
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(createEmployeeDto);
  }

  @Put('/update/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ description: 'Updated employee' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  update(
    @Body() updateEmployeeDto: CreateEmployeeDto,
    @Param('id') id: string,
  ): Promise<Employee> {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Put('/soft-delete/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ description: 'Soft Deleted employee' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  softDelete(@Param('id') id): Promise<any> {
    return this.employeesService.softDelete(id);
  }

  @Delete('/delete/:id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiOkResponse({ description: 'Deleted employee' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  delete(@Param('id') id): Promise<Employee> {
    return this.employeesService.delete(id);
  }
}
