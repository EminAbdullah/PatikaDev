const fs = require('fs');

const createData = () => {
  const data = { name: "Employee 1 Name", salary: 2000 };
  fs.writeFileSync('employees.json', JSON.stringify(data, null, 2), 'utf8');
  console.log("Dosya oluşturuldu ve veri eklendi.");
};

const readData = () => {
  const data = fs.readFileSync('employees.json', 'utf8');
  console.log("Dosyadan okunan veri:");
  console.log(data);
};

const updateData = () => {
  const updatedData = { name: "Employee 1 Updated Name", salary: 3000 };
  fs.writeFileSync('employees.json', JSON.stringify(updatedData, null, 2), 'utf8');
  console.log("Dosya güncellendi.");
};

const deleteData = () => {
  fs.unlinkSync('employees.json');
  console.log("Dosya silindi.");
};

createData();
readData();
updateData();
readData();
deleteData();
