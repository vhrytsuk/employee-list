import * as Yup from "yup";

export const EmployeeSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  street_address: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  bio: Yup.string().max(500, "Bio must be 500 characters or less"),
});
