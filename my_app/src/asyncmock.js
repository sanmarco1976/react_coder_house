const productos = [
    { id: '1', nombre: 'CONJUNTO ANNA', precio: 2100, img: './Img/conj_ana2.jpg' },
    { id: '2', nombre: 'BODY SIMONA', precio: 1800, img: '../Img/body_simona.jpg' },
    { id: '3', nombre: 'CONJUNTO MADONNA', precio: 2100, img: '../Img/conj_madonna.jpeg' },
    { id: '4', nombre: 'CONJUNTO MAITE', precio: 2300, img: '../Img/conj_maite.jpeg' },
    { id: '5', nombre: 'CONJUNTO PATRY', precio: 2000, img: '../Img/conj_patry.jpg' },
    { id: '6', nombre: 'CONJUNTO STELLA', precio: 1890, img: '../Img/conj_stella2.jpg' },
    { id: '7', nombre: 'CONJUNTO UMA', precio: 2000, img: '../Img/conj_uma.jpeg' },
    { id: '8', nombre: 'PIJAMA ANASTASIA', precio: 2400, img: '../Img/pijama_anastasia2.jpg' },
    { id: '9', nombre: 'CONJUNTO LETY', precio: 1790, img: '../Img/prod_lety2.jpg' },
    { id: '10', nombre: 'TOP BRANCA', precio: 2000, img: '../Img/top_branca.jpg' },
    { id: '11', nombre: 'TOP FELICITAS', precio: 1580, img: '../Img/top_felicitas.jpg' }
]

export const obtenerProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos);
        }, 2000)
    })
}