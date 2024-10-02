"use strict";
// Creación de direcciones
const a1 = {
    city: "Bogotá",
    country: "Colombia",
    ad: "Cra 1 # 1-1"
};
const a2 = {
    city: "Bogotá",
    country: "Colombia",
    ad: "Cra 2 # 2-2"
};
// Creación de estudiantes
const e1 = {
    firstName: "Eric",
    lastName: "Sebastian",
    age: 17,
    address: a1
};
const e2 = {
    firstName: "Javier",
    lastName: "Andres",
    address: a2
};
// Función para mostrar información del estudiante
const mostrarEstudiante = (estudiante) => {
    const { firstName, lastName, age, address } = estudiante;
    return `Nombre Estudiante: ${firstName}, Apellido Estudiante: ${lastName}, Edad Estudiante: ${age}, Ciudad Estudiante: ${address === null || address === void 0 ? void 0 : address.city}`;
};
console.log(mostrarEstudiante(e1));
// Arreglo de estudiantes
let estudiantes = [];
// Función para agregar un estudiante
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
// Agregar estudiantes
agregarEstudiante({
    firstName: "Sebastian",
    lastName: "Gutierrez",
    age: 17
});
agregarEstudiante({
    firstName: "Eric",
    lastName: "Gonzalez",
    age: 20
});
// Función para imprimir estudiantes
const imprimirEstudiantes = () => {
    estudiantes.forEach((estudiante) => {
        const { firstName, lastName } = estudiante;
        console.log(`Nombre: ${firstName}, Apellido: ${lastName}`);
    });
};
// Imprimir estudiantes antes de eliminar
console.log("Estudiantes antes de eliminar:");
imprimirEstudiantes();
// Función para eliminar un estudiante por apellido
const eliminarEstudiante = (age) => {
    const index = estudiantes.findIndex(estudiante => estudiante.age === age);
    if (index !== -1) {
        estudiantes.splice(index, 1);
    }
    else {
        console.log(`Estudiante con apellido ${age} no encontrado.`);
    }
};
// Eliminar un estudiante por apellido
eliminarEstudiante(17);
// Imprimir estudiantes después de eliminar
console.log("Estudiantes después de eliminar:");
imprimirEstudiantes();
// Función para actualizar el apellido de un estudiante por nombre
const actualizarApellidoPorNombre = (firstName, nuevoApellido) => {
    const index = estudiantes.findIndex(estudiante => estudiante.firstName === firstName);
    if (index !== -1) {
        estudiantes[index].lastName = nuevoApellido;
        console.log(`Apellido de ${firstName} actualizado a ${nuevoApellido}.`);
    }
    else {
        console.log(`Estudiante con nombre ${firstName} no encontrado.`);
    }
};
// Actualizar el apellido de Eric Gonzalez
actualizarApellidoPorNombre("Eric", "Martinez");
// Imprimir estudiantes después de la actualización
console.log("Estudiantes después de actualizar:");
imprimirEstudiantes();
