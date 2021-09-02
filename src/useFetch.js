//custom hook
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [error, setError] = useState(null);
    let [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then((res) => {
                if(!res.ok){
                    throw Error('could not fetch data for that resource.');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === "AbortError"){
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        }, 1000);
        
        return () => abortCont.abort(); 
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;