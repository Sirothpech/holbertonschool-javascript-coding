// full_server/utils.js

const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
      }

      const lines = data.trim().split('\n').slice(1); // Remove empty lines and header
      const studentsByField = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!studentsByField[field]) {
          studentsByField[field] = {
            count: 1,
            list: [firstname],
          };
        } else {
          studentsByField[field].count += 1;
          studentsByField[field].list.push(firstname);
        }
      });

      const formattedData = {
        totalStudents: lines.length,
        studentsByField,
      };

      resolve(formattedData);
    });
  });
}

export default readDatabase;
