import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product, Product_del, Product_edite_get } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import Product_add from './Product_add';
import { FiHome, FiBox, FiPlusCircle, FiShoppingBag, FiUsers, FiSettings } from 'react-icons/fi';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState("Desh");
  const handleClick = (e) => {
    setstate(e);
  };
  const products = useSelector(state => state.Products.data.data || []);
  console.log(products);

  const handleDelete = (el) => {
    dispatch(Product_del(el));
  };

  const nav = useNavigate();
  const handleEdite = (el) => {
    dispatch(Product_edite_get(el));
    nav("/product");
  }

  useEffect(() => {
    dispatch(Product());
  }, [dispatch]);

  // Chart data for dashboard
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ['Electronics', 'Clothing', 'Home', 'Food', 'Other'],
    datasets: [
      {
        label: 'Revenue by Category',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(79, 70, 229, 0.8)',
          'rgba(67, 56, 202, 0.8)',
          'rgba(55, 48, 163, 0.8)',
          'rgba(49, 46, 129, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - unchanged structure but with design */}
      <aside className="w-64 bg-indigo-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8 flex items-center">
          <FiShoppingBag className="mr-2" />
          Admin Panel
        </h1>
        <div className="space-y-2">
          <button
            onClick={() => handleClick("Desh")}
            className={`flex items-center w-full p-3 rounded-lg ${state === "Desh" ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
          >
            <FiHome className="mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => handleClick("prod")}
            className={`flex items-center w-full p-3 rounded-lg ${state === "prod" ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
          >
            <FiBox className="mr-3" />
            Products
          </button>
          <button
            onClick={() => handleClick("add")}
            className={`flex items-center w-full p-3 rounded-lg ${state === "add" ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
          >
            <FiPlusCircle className="mr-3" />
            Add Product
          </button>
          <button
            onClick={() => nav("/")}
            className={`flex items-center w-full p-3 rounded-lg ${state === "add" ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
          >
            <FiPlusCircle className="mr-3" />
            Website
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {state === "Desh" && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-gray-500">Total Products</h3>
                <p className="text-3xl font-bold text-indigo-600">{products.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-gray-500">Monthly Sales</h3>
                <p className="text-3xl font-bold text-indigo-600">$12,345</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-gray-500">New Customers</h3>
                <p className="text-3xl font-bold text-indigo-600">124</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
                <Line data={salesData} />
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">Revenue by Category</h3>
                <Pie data={revenueData} />
              </div>
            </div>
          </div>
        )}

        {state === "prod" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Product Management</h1>
              <button
                onClick={() => handleClick("add")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Add Product
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((el) => (
                <div key={el.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative overflow-hidden">
                    <div className="relative h-full w-full">
                      <img
                        src={el.image[0]}
                        alt={el.name}
                        className="absolute h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        src={el.image[1]}
                        alt={`${el.name} back`}
                        className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </div>
                    <span className="absolute top-3 left-3 bg-white/80 text-xs font-medium px-2 py-1 rounded">
                      {el.tag}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg truncate">{el.name}</h3>
                      <div className="text-yellow-400">
                        {'★'.repeat(Math.floor(el.rating || 0))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{el.des}</p>

                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="font-bold text-gray-800">${el.price}</span>
                        {el.strike && (
                          <span className="text-sm text-gray-400 ml-2 line-through">
                            ${el.strike}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{el.weight}</span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDelete(el._id)}
                        className="flex-1 py-1.5 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdite(el._id)}
                        className="flex-1 py-1.5 text-sm bg-indigo-100 text-indigo-600 rounded hover:bg-indigo-200"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {state === "add" && (
          <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>
            <Product_add />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;