import { useState, useEffect } from "react";

const useFetchData = url => {
    const [data, setData] = useState([]);

    const handleData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(url);

    useEffect(() => {
        handleData();
      }, [url]);
    // handleData()
    console.log(url)
    
    return  {data};  
};

    export default useFetchData;
    