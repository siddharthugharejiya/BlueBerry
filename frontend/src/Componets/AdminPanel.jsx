import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product, Product_del, Product_edite_get } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const dispatch = useDispatch()
  const [state, setstate] = useState("Desh");
  const handleClick = (e) => {
    setstate(e)
  }
  const products = useSelector(state => state.Products.data.data || [])
  console.log(products);

  const handleDelete = (el) => {

    dispatch(Product_del(el))

  }
 const nav = useNavigate()
    const handleEdite = (el) => {
          // nav("/product")
   console.log(el);
   dispatch(Product_edite_get(el))
   nav("/product")
   
  }
  useEffect(() => {
    dispatch(Product())
  }, [dispatch])


  return (
    <>
      <div className='grid 2xl:grid-cols-2 '>


        <aside className=''>
          <div>
            <button onClick={() => handleClick("Desh")}>Deshboard</button>
          </div>
          <div>
            <button onClick={() => handleClick("prod")}>Product</button>
          </div>
        </aside>
        <div>
          <div>
            {
              state === "Desh" && <h1>Desh BOard</h1>
            }
            {
              state === "prod" && <>

                {
                  products.map((el) => (
                    <div key={el.id} className="px-2 w-[18rem]">
                      <div className="relative group card w-full  h-full flex flex-col justify-between rounded-2xl overflow-hidden shadow-md border hover:shadow-lg transition-all duration-300">


                        <div className="h-[240px] w-full relative overflow-hidden">
                          <span className="absolute z-10 top-3 left-2 group-hover:hidden" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
                            {el.tag}
                          </span>

                          {/* Images with smooth transition */}
                          <div className='relative h-full w-full'>
                            <img
                              src={el.image[0]}
                              alt={el.name}
                              className="absolute h-full w-full object-cover border transition-opacity duration-500 group-hover:opacity-0"
                            />
                            <img
                              src={el.image[1]}
                              alt={`${el.name} back`}
                              className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            />
                          </div>


                          <div className="hidden group-hover:block absolute bottom-0 right-[4rem]">
                            <i className="fa-regular  fa-heart p-2 text-[#777] rounded-lg shadow-md border bg-white hover:bg-[#6c7fd8] hover:border-[#6c7fd8] m-1 hover:text-white"></i>
                            <i
                              className="bg-white text-[#777] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] fa-regular fa-eye p-2 rounded-lg shadow-md border m-1 hover:text-white"
                              onClick={() => handleEye(el)}
                            ></i>
                            <i className="bg-white text-[#777] fa-solid fa-recycle p-2 rounded-lg shadow-md border hover:border-[#6c7fd8] hover:bg-[#6c7fd8] hover:text-white m-1"></i>
                            <i className="bg-white text-[#777] fa-solid fa-bag-shopping p-2 rounded-lg shadow-md border hover:bg-[#6c7fd8] hover:border-[#6c7fd8] m-1 hover:text-white"></i>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-4 flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold truncate">{el.name}</h3>
                            <div className="text-yellow-500 text-sm">
                              {'★'.repeat(Math.floor(el.rating || 0))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">{el.des}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-gray-800 font-bold">
                              ${el.price}
                              {el.strike && (
                                <span className="text-sm text-gray-400 ms-2 line-through">
                                  ${el.strike}
                                </span>
                              )}
                            </span>
                            <span className="text-sm text-gray-500">{el.weight}</span>
                          </div>
                        </div>
                        <div>
                          <button className='p-2 border' onClick={() => handleDelete(el._id)}>Delete</button>
                          <button className='p-2 border' onClick={() => handleEdite(el._id)}>edite</button>
                        </div>
                      </div>
                    </div>
                  ))}


              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
