import { useRouter } from "next/router";
import PaymentForm from "../components/PaymentForm";
import { parser } from "../services/utils";

const Payment = () => {
    const router = useRouter()
    const { query } = router;
    
    const checkisArray = () => {
        if (query.items) {
            if (parser(query.items) instanceof Array) {
                return parser(query.items)
             }else {
                 return Array(parser(query.items))
             }
        }else {
            return []
        }
    }
    return <>
        <div className="container">
            <div className="mt-40 mb-40">
                <PaymentForm product={checkisArray()} />
            </div>
        </div>
    </>
}

export default Payment;