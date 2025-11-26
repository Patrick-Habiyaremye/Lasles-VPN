import React from 'react';
import pic1 from './assets/img1.png';
import pic2 from './assets/img2.png';
import pic3 from './assets/img3.png';
import pic4 from './assets/arrow1.png';
import pic5 from './assets/arrow2.png';

const Customer = () => {
    return (
        <>
        <div class="bg-white py-16">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold">Trusted by Thousands of Happy Customer</h2>
                <p class="text-gray-600 mt-2 max-w-2xl mx-auto">
                    These are the stories of our customers who have joined us with great pleasure
                    when using this amazing feature.
                </p>
            </div>
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-red-500">
                    <div class="flex items-center gap-4">
                        <img src={pic1} class="w-14 h-14 rounded-full object-cover" />
                        <div class="flex-1">
                            <p class="font-bold">Viezth Robert</p>
                            <p class="text-gray-500 text-sm">Warsaw, Poland</p>
                        </div>
                        <p class="text-gray-600 flex items-center gap-1">
                            4.5 <span class="text-yellow-500">★</span>
                        </p>
                    </div>
                    <p class="text-gray-600 mt-4 leading-relaxed">
                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations
                        and so far there have been no problems. LaslesVPN always the best”.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                    <div class="flex items-center gap-4">
                        <img src={pic2} class="w-14 h-14 rounded-full object-cover" />
                        <div class="flex-1">
                            <p class="font-bold">Yessica Christy</p>
                            <p class="text-gray-500 text-sm">Shanxi, China</p>
                        </div>
                        <p class="text-gray-600 flex items-center gap-1">
                            4.5 <span class="text-yellow-500">★</span>
                        </p>
                    </div>
                    <p class="text-gray-600 mt-4 leading-relaxed">
                        “I like it because I like to travel far and still can connect with high speed”.
                    </p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                    <div class="flex items-center gap-4">
                        <img src={pic3} class="w-14 h-14 rounded-full object-cover" />
                        <div class="flex-1">
                            <p class="font-bold">Kim Young Jou</p>
                            <p class="text-gray-500 text-sm">Seoul, South Korea</p>
                        </div>
                        <p class="text-gray-600 flex items-center gap-1">
                            4.5 <span class="text-yellow-500">★</span>
                        </p>
                    </div>
                    <p class="text-gray-600 mt-4 leading-relaxed">
                        “This is very unusual for my business that currently requires a virtual private network
                        that has high security”.
                    </p>
                </div>

            </div>
            <div class="flex justify-between items-center max-w-6xl mx-auto mt-12 px-6">
                <div class="flex gap-2">
                    <span class="w-10 h-3 bg-red-500 rounded-full"></span>
                    <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
                    <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
                    <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
                </div>
                <div class="flex gap-2">
                    <img src={pic4} class="w-10 h-10"/>
                    <img src={pic5} class="w-16 h-15"/>
                </div>
            </div>

        </div>
        </>
    );
};

export default Customer;

