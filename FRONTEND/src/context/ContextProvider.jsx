import React, { createContext, useEffect, useState , useRef} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';




const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await  fetch("http://localhost:5000/product/products?category=shop")// 👈 your API
      const data = await res.json();

      console.log("DATA:", data); // 🔍 check this

      setProducts(data);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  fetchProducts();
}, []);

  var url = "http://localhost:5000"
  const navigate = useNavigate()

   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // ✅ stays true forever
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const [ cartItems , setCartItems] = useState(() => {
      try {
        const saved = localStorage.getItem("cartItems")
        return saved ? JSON.parse(saved) : []
      }
      catch (e) {
        console.err("invalid cartItems in storage: " , e);
        localStorage.removeItem("cartItems");

        return [];
      }
    });
     
     useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (err) {
      console.error("Could not save cartItems:", err);
    }
  }, [cartItems]);

    
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);

      if(exists) {
        return prevCart.map((item) => 
          item.id === product.id 
          ? { ...item, quantity : item.quantity + 1}
          : item
        )
      }

      return [
        ...prevCart,
        {
          id : product.id,
          name : product.name,
          price : product.price,
          img : product.img,
          quantity : 1,
        }
      ]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const clearCart = () => {

    setCartItems([]);
    localStorage.removeItem("cartItems")
  }
const getCartTotal = () =>
  cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [selectedItems, setSelectedItems] = useState([])

  // toggle checkbox
  const handleSelect = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // total only selected
  const selectedTotal = cartItems
    .filter(item => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price * item.quantity, 0)

    const [ wishlistItems , setWishListItems] = useState(() => {
      try {
        const saved = localStorage.getItem("wishlistItems");
        return saved ? JSON.parse(saved) : [];
      }
      catch (e) {
        console.error("Invalid CartItems In Storage:" , e)
        localStorage.removeItem("wishListItems")
        return [];
      }
    })

    useEffect(() => {
      try{
        localStorage.setItem("wishlistItems"  , JSON.stringify(wishlistItems))
      }
      catch (err) {
        console.error("Could Not Save wishListItems:" , err);
      }
    } , [wishlistItems]);

    const AddToWishList = (product) => {
      setWishListItems((prev) => {
        const exists = prev.find((item) => item.id === product.id)
        if (exists) return prev;

        return [
          ...prev,
          {
            id : product.id,
            name : product.name,
            price : product.price,
            img : product.img
          }
        ]
      })
    }


    const removeFromwishList = (id) => {
      setWishListItems((prev) => prev.filter((item) => item.id !== id))
    };


    const clearWishList = () => {
      setWishListItems([]);
      localStorage.removeItem("wishListItem")
    }


const timerRef = useRef(null);

const [ Input , setInput] = useState("")
const [ filteredData , setFilteredData] = useState([])
const SearchFun = (value) => {
  setInput(value);

  if (timerRef.current) {
    clearTimeout(timerRef.current);
  }

  timerRef.current = setTimeout(async () => {
    if (!value) {
      setFilteredData([]);
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/product/products?category=shop"
      );
      const data = await res.json();

      const results = data.filter((item) =>
        item.desc.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredData(results);

    } catch (err) {
      console.log("Search Error:", err);
    }
  }, 400);
};


    const [ firstName , setFirstName] = useState("")
    const [ lastName , setLastName] = useState("")
    const [ email , setEmail] = useState("")
    const [ password , setPassword] = useState("")
 
  const RegisterSubmitFun = async (e) => {
    try {
      e.preventDefault();

      const formData = { firstName , lastName , email , password };

      await axios.post(`${url}/users/add` , formData);
      alert("Registered Successfully!")
      navigate("/Login")
      
    }
    catch(err) {
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }


  var [ loginEmail , setLoginEmail ] =useState("");
  var [ loginPassword , setLoginPassword ] =useState("");

  const LoginSubmitFun = async (e) => {
    try {
      e.preventDefault();

      const loginData = {
        email : loginEmail,
        password : loginPassword
      };

      localStorage.setItem("password" , loginPassword);

      await axios.post(`${url}/users/login` , loginData)

      alert("Login Successfully")
      navigate("/Home")
    }
    catch (err) {
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
      alert("❌ Invalid email or password");
    }
  }
 

  const [ FullName , setFullName ] = useState ("")
  const [ Phone , setPhone ] = useState ("")
  const [ Street , setStreet ] = useState ("")
  const [ City , setCity ] = useState ("")
  const [ State , setState ] = useState ("")
  const [ Zip , setZip ] = useState ("")
  const [ Product , setProduct ] = useState ("")
  const [ Total , setTotal ] = useState ("")
  const [ Payment , setPayment ] = useState ("")
  const [productData, setProductData] = useState([]);
const UserSubmitFun = async (e, productData) => {
  try {
    e.preventDefault();

    console.log("RAW productData:", productData);

    let productName = "";
    let productImage = "";

    // ✅ MULTIPLE PRODUCTS
    if (Array.isArray(productData) && productData.length > 0) {
      productName = productData
        .map(item => item.type || "Unknown")
        .join(", ");

      productImage = productData[0]?.img || "";
    } 
    // ✅ SINGLE PRODUCT
    else if (productData) {
      productName = productData.type || "Unknown";
      productImage = productData.img || "";
    }

    // ❌ IMPORTANT FAIL SAFE
    if (!productName) {
      alert("Product missing!");
      console.log("ERROR: Product is empty");
      return;
    }

    const formData = {
      FullName,
      Phone,
      Street,
      City,
      State,
      Zip,
      Product: productName,
      ProductImage: productImage,
      Total,
      Payment
    };

    console.log("Sending Data:", formData);

    await axios.post(`${url}/buyer/add`, formData);

    alert("Order placed!");
  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
  }
};


    var ContextValue = {
      products ,setProducts,
      scrolled ,setScrolled,
      firstName ,setFirstName,
      lastName , setLastName,
      email, setEmail,
      password , setPassword,
      RegisterSubmitFun,
      loginEmail , setLoginEmail,
      loginPassword , setLoginPassword,
      LoginSubmitFun,
      FullName , setFullName,
      Phone ,setPhone,
      Street , setStreet,
      City , setCity,
      State , setState,
      Zip , setZip,
      Product ,setProduct ,
      Total , setTotal,
      Payment , setPayment,
      UserSubmitFun,
      cartItems ,setCartItems,
      addToCart,
      removeFromCart ,
      clearCart,
      getCartTotal,
      handleSelect,
      selectedTotal,
      selectedItems,
      wishlistItems ,
      setWishListItems,
      AddToWishList,
      removeFromwishList,
      clearWishList,
      Input , setInput,
      filteredData , setFilteredData,
      SearchFun,
      setProductData,
      productData

      


     
      
    }

  return (
    <MyContext.Provider value={ContextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
export { MyContext };