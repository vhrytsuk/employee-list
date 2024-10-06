export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  profile_pic: string;
  gender: string;
  street_address: string;
  city: string;
  manager_id: number;
  bio: string;
}

export interface EmployeeSubordinates extends Employee {
  subordinates: EmployeeSubordinates[];
}

export interface EmployeeContextType {
  employees: Employee[];
  fetchEmployees: () => Promise<void>;
  selectedEmployee: Employee | null;
  selectEmployeeByUserName: (name: string) => void;
  deleteEmployeeById: (id: string) => Promise<void>;
  updateEmployeeData: (id: string, values: Employee) => void;
  loading: boolean;
  error: string | null;
}
