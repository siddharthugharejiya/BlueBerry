import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-[#F8F8FB] mt-5 px-4 md:px-10 py-10'>
                {/* Brand dire */}
                <div>
                    <h1 className='font-semibold text-2xl text-center mb-6'>Brands Directory</h1>

                    <div className="grid 2xl:grid-cols-2 gap-6 mb-6">
                        <div className="text-text flex flex-wrap">
                            <span className="font-bold mr-2">Footwear :</span>
                            <span className="pr-4 relative">Sneakers <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Loafers <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Sandals <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Slippers <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Boots <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Heels <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Flip Flops <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Formal Shoes <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Sports Shoes <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Floaters <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Mules <span className="absolute right-0">|</span></span>
                            <span className="px-4">Ethnic Footwear</span>
                        </div>

                        <div className="text-text flex flex-wrap">
                            <span className="font-bold mr-2">Jewellery :</span>
                            <span className="pr-4 relative">Necklace <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Earrings <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Couple Rings <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Pendants <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Crystal <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Bangles <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Bracelets <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Nose Pin <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Chain <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Mangalsutra <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Anklets <span className="absolute right-0">|</span></span>
                            <span className="px-4">Toe Rings</span>
                        </div>
                    </div>

                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 gap-6">
                        <div className="text-text flex flex-wrap">
                            <span className="font-bold mr-2">Fashion :</span>
                            <span className="pr-4 relative">T-shirt <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Shirt <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Jeans <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Jacket <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Kurti <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Hoodies <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Dresses <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Skirts <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Trousers <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Sweaters <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Blazers <span className="absolute right-0">|</span></span>
                            <span className="px-4">Leggings</span>
                        </div>

                        <div className="text-text flex flex-wrap">
                            <span className="font-bold mr-2">Cosmetics :</span>
                            <span className="pr-4 relative">Lipstick <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Foundation <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Kajal <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Compact <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Blush <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Highlighter <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Concealer <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Primer <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Mascara <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Eyeliner <span className="absolute right-0">|</span></span>
                            <span className="px-4 relative">Nail Paint <span className="absolute right-0">|</span></span>
                            <span className="px-4">Makeup Remover</span>
                        </div>
                    </div>
                    <hr className='border-solid border-[1px] mt-6' />
                </div>


                <div className="grid  2xl:grid-cols-5">
                    <div className='grid  items-center'>
                        <img src="./logo.png" alt="" />
                        <p className='text-text my-5'>BlueBerry is the biggest market of grocery products. Get your daily needs from our store</p>
                        <div className='grid grid-cols-2 gap-3'>
                            <img src="./android.png" alt="" className='rounded-lg' />
                            <img src="./apple.png" alt="" className='rounded-lg' />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-text border-b-2 pb-4'>Category</h1>
                        <p className='text-text pb-2 font-medium'>Dairy & Milk</p>
                        <p className='text-text pb-2 font-medium'>Snack & Spice</p>
                        <p className='text-text pb-2 font-medium'>Fast Food</p>
                        <p className='text-text pb-2 font-medium'>Juice & Drinks</p>
                        <p className='text-text pb-2 font-medium'>Bakery</p>
                        <p className='texts-text pb-2 font-medium'>Seafood</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
