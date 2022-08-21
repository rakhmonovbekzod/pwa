import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PaymentForm from "../components/PaymentForm";

const Payment = () => {
    const router = useRouter()
    const [user,setUser] = useState([])
    const { query } = router;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(d => setUser(d))
        
    },[])

    return <>
        <div className="container">
            <div className="mt-40">
                <PaymentForm product={query} />
            </div>
            {
                user.length && user.map((item,index) => {
                    return <>
                       <div>
                          <h2>{item.name}</h2>
                          <p>{item.email}</p>
                       </div>
                    </>
                })
            }
        </div>
    </>
}

export default Payment;