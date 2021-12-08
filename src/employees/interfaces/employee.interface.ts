export interface Employee {
  id?: string;
  name: string;
  email: string;
  phone: string;
  homeAddress: {
    city: string;
    zipCode: string;
    address1: string;
    address2?: string;
  };
  dateOfEmployment: string;
  dateOfBirth: string;
  isDeleted: boolean;
}
