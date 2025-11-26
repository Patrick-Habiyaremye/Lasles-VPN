import React from "react";
import pic1 from './assets/log.png';
import pic2 from './assets/facebook.png';
import pic3 from './assets/twitter.png';
import pic4 from './assets/inst.png';

const Footer = () => {
    return (
        <>
        <div class="py-16">
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
                <div>
                    <div class="flex items-center gap-3">
                        <img src={pic1} class="w-8" />
                        <h2 class="text-xl font-bold">LaslesVPN</h2>
                    </div>
                    <p class="text-gray-600 mt-4">
                        LaslesVPN is a private virtual network that has unique features and has high security.
                    </p>
                    <div class="flex mt-6">
                        <img src={pic2} class="w-20 cursor-pointer" />
                        <img src={pic3} class="w-20 cursor-pointer" />
                        <img src={pic4} class="w-20 cursor-pointer" />
                    </div>
                    <p class="text-gray-400 mt-6">@2020LaslesVPN</p>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Product</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Engage</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>LaslesVPN ?</li>
                        <li>FAQ</li>
                        <li>Tutorials</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold mb-4">Earn Money</h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>Affiliate</li>
                        <li>Become Partner</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;
