const express = require('express');
const app = express();
const faker = require('faker');

app.use(express.json());

createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        company: faker.company.companyName(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
}

app.get('/api/users/new', (request, response)=>{
    response.json(createUser());
})

app.get('/api/companies/new', (request, response)=>{
    response.json(createCompany());
})

app.get('/api/user/company', (request, response)=>{
    const user = createUser();
    const company = createCompany();
    const merged = {
        user: user,
        company: company
    }
    response.json(merged);
})

app.listen(8000, ()=>console.log('You have successfully connected to port 8000'));