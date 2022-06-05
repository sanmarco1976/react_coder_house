const productos = [
    { id: '1', categoria: 'day', nombre: 'CONJUNTO ANNA', precio: 2100, img: '../Img/conj_ana2.jpg', stock: 4, talle: {p:'P', pp:'PP', m:'M', g:'G'} },
    { id: '2', categoria: 'nigth', nombre: 'BODY SIMONA', precio: 1800, img: '../Img/body_simona.jpg', stock: 3, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '3', categoria: 'day', nombre: 'CONJUNTO MADONNA', precio: 2100, img: '../Img/conj_madonna.jpeg', stock: 7, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '4', categoria: 'nigth', nombre: 'CONJUNTO MAITE', precio: 2300, img: '../Img/conj_maite.jpeg', stock: 4, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '5', categoria: 'day', nombre: 'CONJUNTO PATRY', precio: 2000, img: '../Img/conj_patry.jpg', stock: 5, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '6', categoria: 'day', nombre: 'CONJUNTO STELLA', precio: 1890, img: '../Img/conj_stella2.jpg', stock: 6, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '7', categoria: 'nigth', nombre: 'CONJUNTO UMA', precio: 2000, img: '../Img/conj_uma.jpeg', stock: 2, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '8', categoria: 'day', nombre: 'PIJAMA ANASTASIA', precio: 2400, img: '../Img/pijama_anastasia2.jpg', stock: 3, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '9', categoria: 'nigth', nombre: 'CONJUNTO LETY', precio: 1790, img: '../Img/prod_lety2.jpg', stock: 4, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '10', categoria: 'nigth', nombre: 'TOP BRANCA', precio: 2000, img: '../Img/top_branca.jpg', stock: 6, talle: {p:'P', pp:'PP', m:'M', g:'G'}   },
    { id: '11', categoria: 'day', nombre: 'TOP FELICITAS', precio: 1580, img: '../Img/top_felicitas.jpg', stock: 5, talle: {p:'P', pp:'PP', m:'M', g:'G'}  }
]

export const obtenerProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos);
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoria) =>{
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoria))
        }, 500)
    })
}