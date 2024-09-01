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

app.get('/usuarios', (req,res) => {
    res.send(usuarios)
       
    
})

app.get('/usuarios/:nombre', (req,res) => {
    const nombre = req.params.nombre
    const find = usuarios.find(usuario => usuario.nombre === nombre)
    res.send(find)
       
    
})

//CREATE

app.post('/usuarios', (req,res) => {
    const nuevoUser = { 
        
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        edad: req.body.edad, 
        lugarProcedencia: req.body.lugarProcedencia
    }

    usuarios.push(nuevoUser)

    res.status(200).send('ok')
})

//DELETE


app.delete('/usuarios/:nombre', (req,res) => {
    const nombre = req.params.nombre
    const filter = usuarios.filter(usuario => usuario.nombre != nombre)
    res.send(filter)
         
})
app.use((req,res)=>{
    res.status(404).send('Page not found')
})

app.listen(3000, () => {
    console.log('El servidor está escuchando en http://localhost:3000')
})