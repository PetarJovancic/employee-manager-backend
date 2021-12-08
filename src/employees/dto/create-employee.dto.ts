import { ApiProperty } from '@nestjs/swagger';

class HomeAddress {
  @ApiProperty({ default: '' })
  city: string;
  @ApiProperty({ default: '' })
  zipCode: string;
  @ApiProperty({ default: '' })
  address1: string;
  @ApiProperty({ default: '' })
  address2?: string;
}

export class CreateEmployeeDto {
  @ApiProperty({ type: String, default: '', description: 'name' })
  readonly name: string;

  @ApiProperty({
    type: String,
    default: '',
    description: 'email',
  })
  readonly email: string;

  @ApiProperty({ type: String, default: '', description: 'phone' })
  readonly phone: string;

  @ApiProperty({ type: HomeAddress })
  readonly homeAddress: HomeAddress;

  @ApiProperty({
    type: String,
    default: '',
    description: 'dateOfEmployment',
  })
  readonly dateOfEmployment: string;

  @ApiProperty({
    type: String,
    default: '',
    description: 'dateOfBirth',
  })
  readonly dateOfBirth: string;

  @ApiProperty({ type: Boolean, default: false, description: 'isDeleted' })
  readonly isDeleted: boolean;
}
