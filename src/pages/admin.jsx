import * as React from "react"
import AllOrders from '../components/AllOrders';
import AllProducts from '../components/AllProducts';
import UserOrders from "../components/ UserOrderHistory";

const Admin = () => {
    

    return (
        <>
        <div className="container mx-auto bg-white">
            <div className="p-4">
                <div>
                    <h1 class="text-3xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl" 
                    style={{
                        marginTop: `85px`,
                        color: `#383838`,}}
                        >Admin Page<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                      </h1>
                </div>

                <div>
                    <h2 class="mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-10" 
                    style={{
                        color: `#383838`,}}
                        >Orders
                    </h2>
                    <AllOrders />
                </div>

                <hr />
                <div>
                    <h2 class="mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-20" 
                    style={{
                        color: `#383838`,}}
                        >Products
                    </h2>
                    <AllProducts />
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin;