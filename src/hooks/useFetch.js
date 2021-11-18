import { useEffect, useState } from "react";

const useFetch = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://boiling-beach-90372.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },
        []);
    return { services };
}
export default useFetch;
