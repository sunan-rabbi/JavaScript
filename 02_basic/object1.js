const companies = {
    apple: ['sunan', 'wasim', 'fuad'],
    google: ['sunan', 'fuad', 'avijit'],
    facebook: ['wasim', 'fuad', 'avijit'],
};

/*
    {
        sunan: ['apple', 'google'],
        wasim: ['apple', 'facebook'],
        fuad: ['apple', 'google', 'facebook'],
        avijit: ['google', 'facebook']

    }
*/

const employeeCompanies = {};

for (const [company, employees] of Object.entries(companies)) {

    for (const employee of employees) {

        employeeCompanies[employee] = employeeCompanies[employee] || []
        employeeCompanies[employee].push(company)
    }
}

console.log(employeeCompanies);
