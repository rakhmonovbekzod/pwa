import { useRouter } from "next/router";
import PaymentForm from "../components/PaymentForm";

const Payment = () => {
    const router = useRouter()
    const { query } = router;

    return <>
        <div className="container">
            <div className="mt-40">
                <PaymentForm product={query} />
            </div>
        </div>
    </>
}

export default Payment;