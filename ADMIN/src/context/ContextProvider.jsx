import React from 'react'
import { createContext , useState} from 'react'
import axios from "axios";
import { useEffect } from 'react';

const MyContext = createContext();

const ContextProvider = ( {children}) => {
  var url = "http://localhost:5000"

var [ category , setCategory] = useState("")
var [ type , setType] = useState("")
var [ desc , setDesc] = useState("")
var [ price , setPrice] = useState("")
var [ img , setImg] = useState("")
var [ previewImg , setPreviewImg] = useState("")


var [ productData , setProductData] = useState([])
var [ userData , setUserData] = useState([])
var [ buyerData , setBuyerData] = useState([])

var [ updateCategory , setUpdateCategory] = useState("")
var [ updateType , setUpdateType] = useState("")
var [ updateDesc , setUpdateDesc] = useState("")
var [ updatePrice , setUpdatePrice] = useState("")
var [ updatePreviewImg , setUpdatePreviewImg] = useState("")
var [ updateImg , setUpdateImg] = useState("")
var [ updateId , setUpdateId] = useState("")



const ImageFun = (e) => {
  var file = e.target.files[0]
  if(file) {
    var reader = new FileReader()
    reader.onloadend = () => {
      setImg(reader.result)
      setPreviewImg(reader.result)
    }
    reader.readAsDataURL(file)
  }
}
 var  formData = {
  img  , category , type , desc , price
 }
 console.log(formData)

 const ProductSubmitFun = async (e) => {
        try{
          e.preventDefault()
           
          var formData = {
            img , category , type , desc , price
          }
          await axios.post(`${url}/product/add` , formData)
          alert("product added!")
        }

        catch(err) {
          console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
 }

 const FetchProductData = async () => {
  try{
    var productList = await axios.get(`${url}/product/products`)
    setProductData(productList.data)
  }

  catch (err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 useEffect(() => {
  FetchProductData()
 } , [])



 const RemoveProduct = async (id) => {
  try {
    if(confirm("Are you sure you want to delete this product?")){
      await axios.delete(`${url}/product/remove/${id}`)
      alert("product Removed!")
      FetchProductData()
    }
  }
  catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 const UpdateFun = (id) => {
  var product = productData.find( a => a._id === id)
  if(product) {
    setUpdateCategory(product.category)
    setUpdateType(product.type)
    setUpdateDesc(product.desc)
    setUpdatePrice(product.price)
    setUpdateImg(product.img)
    setUpdatePreviewImg(product.previewImg)
    setUpdateId(product._id)
  }
 }

 const UpdateImageFun = (e) => {
  var file = e.target.files[0]
  if(file) {
    var reader = new FileReader()
    reader.onloadend = () => {
      setUpdateImg(reader.result)
      setUpdatePreviewImg(reader.result)
    }
    reader.readAsDataURL(file)
  }
 }

 const UpdateSubmitFun = async (e) => {
  try{
    e.preventDefault()

    var updateFormData = {
      category : updateCategory,
      type : updateType,
      desc : updateDesc,
      price : updatePrice,
      img : updateImg
    }
    await axios.put(`${url}/product/update/${updateId}` , updateFormData)
    alert("product Updated!")
    FetchProductData()
  }

  catch(err) {
    console.log(`Error Message : ${err.name} , Error Message : ${err.message}`)
  }
 }

 useEffect(() => {
  FetchProductData()
 } , [])

 const FetchUserData = async () => {
  try{
    const userList = await axios.get(`${url}/users/users`)
    setUserData(userList.data)
  }
  catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

  useEffect(() => {
  FetchUserData()
 } , [])

 const RemoveUser = async (id) => {
  try {
    if(confirm("are you sure you want to delete this user")){
      await axios.delete((`${url}/users/delete/${id}`))
      alert("user Removed")
      FetchUserData()
    }
  }

  catch(err) {
    console.log(`Error name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 const FetchBuyerData = async () => {
  try{
  
    const BuyerList = await axios.get(`${url}/buyer/list`)
    setBuyerData(BuyerList.data)
  }
   catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 useEffect(() => {
  FetchBuyerData()
 } , [])


  var ContextValue = {
     category , setCategory,
      type , setType,
      desc , setDesc,
      price , setPrice,
      img , setImg,
      previewImg , setPreviewImg,
      ImageFun,
      ProductSubmitFun,
      productData , setProductData,
      FetchProductData,
      RemoveProduct,
      updateCategory , setUpdateCategory,
      updateType , setUpdateType,
      updateDesc , setUpdateDesc,
      updatePrice , setUpdatePrice,
      updatePreviewImg , setUpdatePreviewImg,
      updateImg , setUpdateImg,
      updateId , setUpdateId,
      UpdateFun,
      UpdateImageFun,
      UpdateSubmitFun,
      userData , setUserData,
      RemoveUser,
      buyerData , setBuyerData

     
              
  }

  return (
    <>
      <MyContext.Provider value={ContextValue}>
        { children }
      </MyContext.Provider>
    </>
  )
}

export default ContextProvider
export {MyContext};