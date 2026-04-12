import React from 'react'
import { Link } from 'react-router-dom'
import { my_asset } from '../assets/assets'
import { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'

const AddTocart = () => {

  const { category , setCategory , type ,setType , desc , setDesc , price , setPrice , ImageFun , previewImg , ProductSubmitFun } = useContext(MyContext)
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={"/Grid"}>view</Link>
                    <Link to={"/Users"}>view</Link>
                    <Link to={"/Buy"}>view</Link>
                </div>
            </div>
        </div>
        <div className='container my-3'>
            <div className='row'>
                <div className='col'>
                    <form onSubmit={ProductSubmitFun}>
                        <input type='file' id='Image' hidden onChange={ImageFun}/>
                        <label htmlFor='Image'>
                            <img src={ previewImg ? previewImg : my_asset.upload} height = {200} width={200}className='img-fluid my-3' />
                        </label>
                        <br/>

                        <select className='form-control my-3' value={category} onChange={e => setCategory(e.target.value)}>
                            <option hidden> choice</option>
                            <option>shop</option>
                        </select>
                        <input type="text" className="form-control my-3" placeholder='enter Product Type' value={type} onChange={e => setType(e.target.value)}/>
                        <input type="text" className="form-control my-3" placeholder='enter Product Desc' value={desc} onChange={e => setDesc(e.target.value)}/>
                        <input type="text" className="form-control my-3" placeholder='enter Product Price' value={price} onChange={e => setPrice(e.target.value)}/>
                        <input type="submit" className='btn btn-danger my-3'/>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddTocart