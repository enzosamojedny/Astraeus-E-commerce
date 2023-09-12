import { createContext, useEffect, useState, useContext } from "react";

export const CartContext = createContext()

const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito") || "[]")

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState(carritoLocalStorage)

    const agregar1AlCarrito = (item, cantidad) =>{
      const itemAgregado = {...item, cantidad}
      const estaAgregado = carrito.find(prenda => prenda.id === itemAgregado.id)
  
      estaAgregado ? (estaAgregado.cantidad += 1 , setCarrito([...carrito])) : setCarrito([...carrito, itemAgregado])
    
    }
  
    const agregarAlCarrito = (item, cantidad) =>{
      const nuevoCarrito = [...carrito]
      const itemAgregado = {...item, cantidad}
      const estaEnCarrito = nuevoCarrito.find(producto => producto.id === itemAgregado.id)
  
      if(estaEnCarrito){
          estaEnCarrito.cantidad += cantidad
          setCarrito([...nuevoCarrito])
      }
      else {
          setCarrito([...carrito, itemAgregado])
      }   
      
    }
    
    const eliminarDeCarrito = (item) =>{
      const index = carrito.findIndex(prenda => prenda.id === item.id)
      const nuevoCarrito = [...carrito]
      nuevoCarrito[index].cantidad > 1 ? nuevoCarrito[index].cantidad -= 1 : nuevoCarrito.splice(index, 1)
      setCarrito([...nuevoCarrito])
    }
  
    const agregarNumeroCarrito = () =>{
      return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    }

    const vaciarCarrito = () =>{
      setCarrito([])
    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return <CartContext.Provider value={{
        carrito, 
        setCarrito, 
        agregarAlCarrito, 
        agregarNumeroCarrito, 
        agregar1AlCarrito, 
        eliminarDeCarrito,
        vaciarCarrito}}>
        {children}
    </CartContext.Provider>
  
}