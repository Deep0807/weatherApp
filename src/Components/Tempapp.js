import  React, { useEffect, useState } from  "react";
import  "./css/style.css"  ; 

 const Tempapp =(  ) =>{
     const[city ,setCity] =useState(null);
     const[search, setSerach]=useState("Delhi");

     useEffect(() =>{
         const fetchApi = async ()=>{
             const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e65ca1f8a0dfc287eab5c665394ff705
             `
             const response =await fetch(url);
             const resjson =await response.json();
             setCity(resjson.main);

         }
         fetchApi();
     } ,[search]
      
     )


    return( 
    <>
 
        
        <div className="box">
                
            <div className="inputdata">
                <input type="search" 
                className="inputFeild"
                onChange={(event)=> 
                {   setSerach(event.target.value)

                } }/>
            </div>
            {
                !city?(
                    <p>No Data Found</p>
                ):(     <div>       <div className =" info">
                < h2 className="loaction">
                <i className="fas fa-street-view"></i>{search}

                </h2>
                <h1 className="temp"> {city.temp}°cal </h1> 
                    
           
    
           <h3 className="temp-min-max"> Min: {city.temp_min}°cal | max {city.temp_max}°cal </h3>
        
           </div>
          
           </div>

           ) }
          

            </div>
            </>
    )
 }  
 
export default Tempapp;