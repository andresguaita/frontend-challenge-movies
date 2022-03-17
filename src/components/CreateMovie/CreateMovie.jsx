import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { createMovie } from '../../actions/Actions'
import { fileUpload } from '../../helpers/fileUpload'


import './CreateMovie.css'

export const CreateMovie = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        title: '',
        description: '',
        hour: '',
        minute: '',
        duration: '',
        rdate: '',
        img: '',
        trailer: '',
        categories: []

    })

    const handleInputChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (e) => {
        setInput({
            ...input,
            rdate: e.target.value
        })
    }

    const handleImage= async(e) =>{
        const file= e.target.files[0]
        Swal.fire({
            title: 'Subiendo...',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
            },
          })

    if(file){
        const fileUrl = await fileUpload(file)
        setInput({
            ...input,
            img: fileUrl
        })
    }    

     Swal.close()
    }



    const handleHour = (e)=>{
        setInput({
            ...input,
            hour: e.target.value
        })
    }

    const handleMinutes = (e)=>{
        console.log(e.target.value)
        setInput({
            ...input,
            duration: `${input.hour}:${e.target.value}`
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(createMovie(input.title,input.description,input.duration,input.rdate,
            input.img,input.trailer,input.categories))
        setInput({
            title: '',
            description: '',
            hour: '',
            minute: '',
            duration: '',
            rdate: '',
            img: '',
            trailer: '',
            categories: []
    
        })
    }

    const handleCategory = (e)=>{

        setInput({
            ...input,
            categories: [...input.categories, e.target.value]
          })
    }

    const handleRemoveSelect = (indexItem) =>{
        setInput({
          ...input,
          categories: input.categories.filter((c, index) => index !== indexItem)
        }
        );
      }

    return (
        <div className='create__container'>
            <form className="create__form" onSubmit={handleSubmit}>
            <h1 className='create__title'>Crear Pelicula</h1>
                <label>Titulo</label>
                <input 
                className='inputForm'
                name='title'
                value={input.title}
                onChange={handleInputChange}
                />
               
                <label>Descripción</label>
                <textarea 
                name='description'
                value={input.description}
                onChange={handleInputChange}
                />
                <label>Duración</label>
                <div className='create__duration'>
                <input type="number"
                    className='inputForm'
                    min="1"
                    max="24"
                    onChange={handleHour}>
                </input><span>horas</span>
                <input
                    className='inputForm'
                    type="number"
                    min="1"
                    max="60"
                   
                    onChange={handleMinutes}
                    >
                
                </input><span>minutos</span>
                </div>
                
                
               
            <div className='create__space'>
            <select  className='create__select' onChange={handleCategory}>
              <option value='default-category'>Selecctionar Categoria</option>
              <option value={1}>Acción</option>
              <option value={2}>Aventura</option>
              <option value={3}>Comedia</option>
              <option value={5}>Fantasía</option>
              <option value={4}>Drama</option>
              <option value={6}>Musical</option>
              <option value={7}>Suspenso</option>
              <option value={9}>Infantil</option>
              <option value={8}>Terror</option>
          </select>
          { input.categories? <div className='category__contain'>
          {input.categories?.map((c,index) => (<span key={c} className='country__select' ><div>{c}<i className="fas fa-times-circle" onClick={() => handleRemoveSelect(index)}></i></div> </span>))}
        </div> : null}
            </div>
          
                <label>Fecha de estreno</label>
                <input
                    type="date"
                    name='rdate'
                    value={input.rdate}
                    onChange={handleDateChange}
                ></input>
               
                <label>Poster</label>
                <input
                    type="file"
                    name="file"
                    placeholder="Inserte Imagen"
                    onChange={handleImage}
                />
               
                <label>Trailer(Enlace)</label>
                <input 
                className='inputForm'
                name='trailer'
                value={input.trailer}
                onChange={handleInputChange}
                />
            <button className='create__button' type='submit'>Añadir Pelicula</button>
            </form>
        </div>
    )
}
