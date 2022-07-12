let Employee = {
    name: "Himadrika",
    email: "himadri@gmail.com",
    phone: 9938354580,
    basicSalary: 500000,
    totalSalary: function(){
      const HRA = .15*this.basicSalary;
      const specialAllowance = .2*this.basicSalary;
      var totalSal = this.basicSalary + HRA + specialAllowance;
      if(this.basicSalary>90000)
        totalSal = totalSal - (0.30*totalSal);
      else if(this.basicSalary>70000)
        totalSal = totalSal - (0.20*totalSal);
      else if(this.basicSalary>50000)
        totalSal = totalSal - (0.15*totalSal);
      else if(this.basicSalary>40000)
        totalSal = totalSal - (0.10*totalSal);
      return totalSal;
    }
  }
  console.log(Employee.name);
  console.log(Employee.email);
  console.log(Employee.phone);
  console.log(Employee.basicSalary);
  console.log(Employee.totalSalary());