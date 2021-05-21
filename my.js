const string = "John,Dorian,HTML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,84,92,70,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";

printResult(string);
function parseStudentInfo(fullString) {
  const result = fullString.split('#');
  return result.map(studentString => {
    const fields = studentString.split(',');
    return {
      firstName: fields[0],
      lastName: fields[1],
      courses: [{
          title: fields[2],
          grade: fields[5]
        },
        {
          title: fields[3],
          grade: fields[6]
        },
        {
          title: fields[4],
          grade: fields[7]
        },
      ],
      average: (+fields[5] + +fields[6] + +fields[7]) / 3,
      address: {
        street: fields[8],
        city: fields[9],
        state: fields[10],
      },
      phone: fields[11]
    };
  })
}

function getBestStudents(students, minAverage) {
  return students.filter(student => student.average >= minAverage);
}
function formatBestStudentInfo(students) {
  function formatAddress(address) {
    let result = [];
    if (address.street) {
      result.push(address.street);
    }
    if (address.city) {
      result.push(address.city);
    }
    if (address.state) {
      result.push(address.state);
    }
    return result.length > 0 ? result.join(', ') : 'N/A';
  }
  return students.map(student => {
    const courses = student.courses;
    return `Full name: ${student.firstName} ${student.lastName}\n` +
      `Address: ${formatAddress(student.address)}\n` +
      `Phone: ${student.phone || 'N/A'}\n` +
      `Courses:\n` +
      `${courses[0].title}: ${courses[0].grade}\n` +
      `${courses[1].title}: ${courses[1].grade}\n` +
      `${courses[2].title}: ${courses[2].grade}\n` +
      `Average: ${student.average}\n`
  }).join("\n");
}
function formatBestStudentInfoWithReduce(students) {
  function formatAddress(address) {
    let result = [];
    if (address.street) {
      result.push(address.street);
    }
    if (address.city) {
      result.push(address.city);
    }
    if (address.state) {
      result.push(address.state);
    }
    return result.length > 0 ? result.join(', ') : 'N/A';
  }
  return students.reduce((string, student) => {
    const courses = student.courses;
    return string + `Full name: ${student.firstName} ${student.lastName}\n` +
      `Address: ${formatAddress(student.address)}\n` +
      `Phone: ${student.phone || 'N/A'}\n` +
      `Courses:\n` +
      `${courses[0].title}: ${courses[0].grade}\n` +
      `${courses[1].title}: ${courses[1].grade}\n` +
      `${courses[2].title}: ${courses[2].grade}\n` +
      `Average: ${student.average}\n\n`
  }, '');
}
function printResult(string) {
  const students = parseStudentInfo(string);
  console.log(formatBestStudentInfoWithReduce(getBestStudents(students, 82)));
}
























