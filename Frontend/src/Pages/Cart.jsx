import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateQuantity, RemoveFromCart } from '../Redux/CartSystem'

function Cart() {
    const { cart } = useSelector((state) => state.cart);
    console.log(cart);
    const dispatch = useDispatch();
    const total = (item) => {
        let totalprice = 0;
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            totalprice += element.price * element.quantity;
        }
        return totalprice;
    };
    return (
        <div className='flex flex-col flex-wrap justify-center my-10 min-h-[21.5vh]'>
            {cart.length === 0 ? (
                <h1 className='text-blue-500 text-3xl'>No Items in Cart</h1>

            ) : (
                <div className='flex justify-center flex-wrap gap-4'>
                    {cart.map((product) => (
                        <div
                            key={product._id}
                            className="w-[90%] sm:w-[90%] md:w-[45%] lg:w-[30%] h-fit bg-white flex flex-col gap-4 shadow-md hover:shadow-xl transition-all duration-500 rounded-lg group"
                        >
                            {/* Image Section */}
                            <div className="h-48 md:h-60 lg:h-64">
                                <img
                                    src={product.image}
                                    className="h-full w-full object-cover rounded-t-lg"
                                    alt={product.name}
                                />
                            </div>
    
                            {/* Product Details */}
                            <div className="flex flex-col gap-2 p-4">
                                <div className="flex justify-between">
                                    <h2 className="text-lg md:text-xl text-blue-500 group-hover:text-gray-400 font-semibold">
                                        {product.name}
                                    </h2>
                                    <span className="bg-green-300 text-white text-sm md:text-base px-2 py-1 rounded-md">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span className="font-bold text-sm md:text-base">
                                        Quantity
                                    </span>
                                    <button
                                        className='px-2 py-1 bg-gray-200 rounded'
                                        onClick={() => dispatch(UpdateQuantity({ id: product.id, quantity: product.quantity - 1 }))}
                                        disabled={product.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button
                                        className='px-2 py-1 bg-gray-200 rounded'
                                        onClick={() => dispatch(UpdateQuantity({ id: product.id, quantity: product.quantity + 1 }))}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span className="font-bold text-sm md:text-base">
                                        Price per unit
                                    </span>
                                    <span className="text-orange-600 text-sm md:text-base">
                                        Rs {product.price}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span className="font-bold text-sm md:text-base">
                                        Unit Packet Weight
                                    </span>
                                    <span className="text-sm md:text-base">{product.weight}kg</span>
                                </div>
                            </div>
    
                            {/* Edit Button */}
                            <button
                                className="flex items-center justify-center gap-3 bg-green-400 text-white text-base md:text-lg py-3 rounded-b-lg"
                                onClick={() => dispatch(RemoveFromCart(product.id))}
                            >
                                Remove From Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <section className='pt-10 flex justify-between px-4'>
                <h1 className='font-bold text-2xl sm:text-3xl'>Total Payable Amount:</h1>
                <span className='font-semibold text-2xl sm:text-3xl text-blue-600'>Rs{total(cart)}</span>
            </section>
        </div>
    )
}

export default Cart
