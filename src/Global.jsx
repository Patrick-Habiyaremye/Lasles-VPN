import React from 'react';
import pic1 from './assets/global.png';

const Global = () =>{
    return(
        <>
        <div class="pt-20">
            <h1 class="text-3xl md:text-4xl pl-110">Huge Global Network</h1>
            <h1 class="text-3xl md:text-4xl pl-130">of Fast VPN</h1>
            <p class="pt-5 pl-60 max-w-xl mx-auto">See LeslesVPN everywhere to make it easier for you when you move</p>
            <p class="pl-145">locations</p>
        </div>
        <div class="ml-30 pt-20">
            <img src={pic1} class="w-230 h-100"/>
        </div>
        </>
    )
}

export default Global