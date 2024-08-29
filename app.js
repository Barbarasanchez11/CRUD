const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extend: true }))

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

//READ

app.get('/', (req,res) => {
    res.send(`
        <h1>Lista de usuarios</h1>
        <ul>
            ${usuarios.map((usuario)=> `<li> ID: ${usuario.id} | Nombre: ${usuario.nombre} 
            | Edad: ${usuario.edad} | Lugar de procedencia: ${usuario.lugarProcedencia} 
            </li>`)}
        </ul>
        <form action="/usuarios" method="post"></form>
         <label for ="nombre">Nombre: </label>
         <input type="text" id="nombre" name="nombre" required>

         <label for ="edad">Edad: </label>
         <input type="text" id="edad" name="edad" required>

         <label for ="lugarProcedencia">Lugar de procedencia: </label>
         <input type="text" id="lugarProcedencia" name="lugarProcedencia" required>

        <button type="submit">Agregar usuario</button>

        </form>
        <a href="/usuarios">Usuarios json</a>  
        `)
})

//CREATE



app.listen(3000, () => {
    console.log('El servidor está escuchando en http://localhost:3000')
})