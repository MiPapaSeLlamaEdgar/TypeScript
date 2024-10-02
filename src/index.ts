// Definición de tipos
type address = {
    city: string,
    country: string,
    ad: string;
}

type estudiante = {
    firstName: string,
    lastName: string,
    age?: number | string,
    address?: address;
}

// Creación de direcciones
const a1: address = {
    city: "Bogotá",
    country: "Colombia",
    ad: "Cra 1 # 1-1"
}

const a2: address = {
    city: "Bogotá",
    country: "Colombia",
    ad: "Cra 2 # 2-2"
}

// Creación de estudiantes
const e1: estudiante = {
    firstName: "Eric",
    lastName: "Sebastian",
    age: 17,
    address: a1
}

const e2: estudiante = {
    firstName: "Javier",
    lastName: "Andres",
    address: a2
}

// Función para mostrar información del estudiante
const mostrarEstudiante = (estudiante: estudiante): string => {
    const { firstName, lastName, age, address } = estudiante;
    return `Nombre Estudiante: ${firstName}, Apellido Estudiante: ${lastName}, Edad Estudiante: ${age}, Ciudad Estudiante: ${address?.city}`;
}

console.log(mostrarEstudiante(e1));

// Arreglo de estudiantes
let estudiantes: estudiante[] = [];

// Función para agregar un estudiante
const agregarEstudiante = (estudiante: estudiante) => {
    estudiantes.push(estudiante);
}

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
}

// Imprimir estudiantes antes de eliminar
console.log("Estudiantes antes de eliminar:");
imprimirEstudiantes();

// Función para eliminar un estudiante por apellido
const eliminarEstudiante = (age: number) => {
    const index = estudiantes.findIndex(estudiante => estudiante.age === age);
    
    if (index !== -1) {
        estudiantes.splice(index, 1);
    } else {
        console.log(`Estudiante con apellido ${age} no encontrado.`);
    }
}

// Eliminar un estudiante por apellido
eliminarEstudiante(17);

// Imprimir estudiantes después de eliminar
console.log("Estudiantes después de eliminar:");
imprimirEstudiantes();

// Función para actualizar el apellido de un estudiante por nombre
const actualizarApellidoPorNombre = (firstName: string, nuevoApellido: string) => {
    const index = estudiantes.findIndex(estudiante => estudiante.firstName === firstName);
    
    if (index !== -1) {
        estudiantes[index].lastName = nuevoApellido;
        console.log(`Apellido de ${firstName} actualizado a ${nuevoApellido}.`);
    } else {
        console.log(`Estudiante con nombre ${firstName} no encontrado.`);
    }
}


// Actualizar el apellido de Eric Gonzalez
actualizarApellidoPorNombre("Eric", "Martinez");

// Imprimir estudiantes después de la actualización
console.log("Estudiantes después de actualizar:");
imprimirEstudiantes();

