const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda1'
};
 
let data = JSON.stringify(student);
fs.writeFileSync('./data/userData.json', data);