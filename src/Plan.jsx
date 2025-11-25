import React from 'react';
import pic1 from './assets/free.png';
import check from './assets/check.png';

const Plan = () =>{
    return(
        <>
        <div class="bg-gray-50 py-16">
           <div class="text-center mb-10">
           <h2 class="text-3xl font-bold">Choose Your Plan</h2>
           <p class="text-gray-600 mt-2">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
            </p>
            </div>
            <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <img src={pic1} class="w-20 mx-auto mb-4" />
            <p class="text-xl font-bold text-center mb-6">Free Plan</p>
            <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Unlimited Bandwidth
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Encrypted Connection
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                No Traffic Logs
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Works on All Devices
            </li>
            </ul>
            <p class="text-center font-bold text-xl mt-8">Free</p>
            <div class="mt-5 text-center">
            <button class="border border-red-500 text-red-500 px-6 py-2 rounded-xl hover:bg-red-100 transition">
                Select
            </button>
            </div>
            </div>
            <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <img src={pic1} class="w-20 mx-auto mb-4" />
            <p class="text-xl font-bold text-center mb-6">Standard Plan</p>
            <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Unlimited Bandwidth
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Encrypted Connection
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Yes Traffic Logs
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Connect Anywhere
            </li>
            </ul>
            <p class="text-center font-bold text-xl mt-8">$9 <span class="text-gray-500">/ mo</span></p>
            <div class="mt-5 text-center">
            <button class="border border-red-500 text-red-500 px-6 py-2 rounded-xl hover:bg-red-100 transition">
                Select
            </button>
            </div>
            </div>
            <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-red-500">
            <img src={pic1} class="w-20 mx-auto mb-4" />
            <p class="text-xl font-bold text-center mb-6">Premium Plan</p>
            <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Unlimited Bandwidth
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Encrypted Connection
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                No Traffic Logs
            </li>
            <li class="flex items-center gap-3 text-gray-600">
            <img src={check} class="w-5" />
                Works on All Devices
            </li>
            </ul>
            <p class="text-center font-bold text-xl mt-8">$12 <span class="text-gray-500">/ mo</span></p>
            <div class="mt-5 text-center">
            <button class="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition">
                Select
            </button>
            </div>
            </div>
            </div>
      </div>
        </>
    )
}

export default Plan