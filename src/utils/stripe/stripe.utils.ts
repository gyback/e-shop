import { loadStripe } from "@stripe/stripe-js";

let publicKey: string;
if(process.env.REACT_APP_STRIPE_PUBLIC_KEY){
    publicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY
} else {
    throw new Error("Missing public stripe key");
}
export const stripePromise = loadStripe( publicKey );

