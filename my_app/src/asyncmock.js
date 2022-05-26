const productos = [
    { id: '1', nombre: 'CONJUNTO ANNA', precio: 2100, img: '../Img/conj_ana2.jpg', stock: 4  },
    { id: '2', nombre: 'BODY SIMONA', precio: 1800, img: '../Img/body_simona.jpg', stock: 3  },
    { id: '3', nombre: 'CONJUNTO MADONNA', precio: 2100, img: '../Img/conj_madonna.jpeg', stock: 7  },
    { id: '4', nombre: 'CONJUNTO MAITE', precio: 2300, img: '../Img/conj_maite.jpeg', stock: 4  },
    { id: '5', nombre: 'CONJUNTO PATRY', precio: 2000, img: '../Img/conj_patry.jpg', stock: 5  },
    { id: '6', nombre: 'CONJUNTO STELLA', precio: 1890, img: '../Img/conj_stella2.jpg', stock: 6  },
    { id: '7', nombre: 'CONJUNTO UMA', precio: 2000, img: '../Img/conj_uma.jpeg', stock: 2  },
    { id: '8', nombre: 'PIJAMA ANASTASIA', precio: 2400, img: '../Img/pijama_anastasia2.jpg', stock: 3  },
    { id: '9', nombre: 'CONJUNTO LETY', precio: 1790, img: '../Img/prod_lety2.jpg', stock: 4  },
    { id: '10', nombre: 'TOP BRANCA', precio: 2000, img: '../Img/top_branca.jpg', stock: 6  },
    { id: '11', nombre: 'TOP FELICITAS', precio: 1580, img: '../Img/top_felicitas.jpg', stock: 5 }
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