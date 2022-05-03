// Javascript fundamentals - Semillero Mayo-2022
const numerico = 1;
const alfanumerico = '';
const booleano = true;
const indefinido = undefined;
const nulleable = null; // ext obj

// ECMScript 2015
const simbolo = Symbol();
const bigIntValue = 12313n;

///////////////////////
const arreglos = new Array();
const object = { pro: 'value'};

const method = () => { 
    const obj = { a: 'value'};
};
function methodClasic() {};

/// tipos de declarar una variable

// buenas practicas
const obj = { a: 'value'};
obj.a = 'Nombre';

console.log(obj);

let b = '1';
b = 1;
// mala practica
var c = 2;

////// callbacks 

const suma = (num1, num2) => num1 + num2;
const div = (num3, num4) => num3 / num4;

const executeOperation = (operation) => {
    return operation(1,3);
};

console.log(executeOperation(suma));
console.log(executeOperation(div));

///// Operadores -- spread operator - destructuring; 

const danielPerson = { name: 'Daniel', lastName: 'Gomez', age: 18};
const jorgePerson = { name: 'Jorge', lastName: 'Perez', age: 6};

const danielQuiroz = {...danielPerson, lastName: 17};

console.log(danielQuiroz);
console.log(danielPerson);

// array 
const personList = [danielPerson, jorgePerson];
const newPersonList = [...personList];
newPersonList.pop();
console.log(personList);

const [ firstPerson, secondPerson ] = personList;
console.log(firstPerson);
console.log(secondPerson);

       // ----- 
const { age } = danielPerson;
console.log(age);

const operators = ({lastName, age}) => {
    return lastName;
}

console.log(operators(jorgePerson));

// template string - template literal string

const fullName = `${jorgePerson.name} ${jorgePerson.lastName} - ${ new Date().getTime() }`;
console.log(fullName);

// Array function - lamda

const studenList = [jorgePerson, danielPerson, danielQuiroz];
const longerThan18 = [];
// forEach - without return
    studenList.forEach( (student, index, array) => {
        if (student.age > 18) {
            longerThan18.push(student);
        }
    });
// Map
    const newStudentsWithMath = studenList.map( (student, index, array) => {
        return { nameStudent: student.name, class: 'Math'};
    });

    console.log(newStudentsWithMath[0]);
// find
    const danielStudent = studenList.find( (student, index, array) => {return student.name === 'Daniel'});
    console.log(danielStudent);
// filter

    const allDanielStudent = studenList.filter( (student, index, arreglo) => { return student.name === 'Daniel'});
    console.log(allDanielStudent);

// some
    const existStudentCarlos = studenList.some( (student, index, array) => {return student.name === 'Carlos'});
    const existStudentDaniel = studenList.some( (student, index, array) => {return student.name === 'Daniel'});
    console.log(existStudentCarlos);
    console.log(existStudentDaniel);

// reduce
    const sumAgeStudent = studenList.reduce( (prev, act, index, arreglo) => {
        console.log(prev, act);
        return prev + act.age;
    }, 0);
    const promAgeStuden = sumAgeStudent / studenList.length;


    const arrayNumber = [1,34,5,56,6,7];
    const sumArray = arrayNumber.reduce( (prev, act) => {
        console.log(prev, act);
        return prev + act
    }, 0);
    console.log(sumArray);

    //{ daniel: 20, jorge: 13, danilo: 2}

    const objStudentSum = studenList.reduce( (prev, act) => {
        if(!!prev[act.name]) {
            return {...prev, [act.name]: prev[act.name] + act.age};
        } else {
            return {...prev, [act.name]: act.age};
        }
    }, {});

    console.log(objStudentSum);

    //

    















