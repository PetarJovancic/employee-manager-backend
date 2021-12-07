import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  homeAddress: {
    city: String,
    zipCode: String,
    address1: String,
    address2: String,
  },
  dateOfEmployment: String,
  dateOfBirth: String,
  isDeleted: Boolean,
});
