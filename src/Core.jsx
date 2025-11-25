import React from 'react';
import pic1 from './assets/listen.png';
import pic2 from './assets/mark.png';

const Core = () =>{
    return(
        <>
        <div class="flex py-20">
            <div class="w-120 h-50">
              <img src={pic1}/>
            </div>
            <div class="pl-60 pt-10">
                <p class="text-2xl"><b>We provide many</b></p>
                <p class="text-2xl"><b>Features you can use</b></p>
                <p class="pt-5">you can explore the features that we provide with fun and</p>
                <p class="">have their own functions every feature</p>
                <div class="pt-10">
                    <ul class="">
                        <li class="flex gap-2">
                            <img src={pic2} class="w-5 h-5"/>
                            Powerfull online protection.
                        </li>
                        <li class="flex gap-2">
                            <img src={pic2} class="w-5 h-5"/>
                            Internet without borders.
                        </li>
                        <li class="flex gap-2">
                            <img src={pic2} class="w-5 h-5"/>
                            Superchanged VPN.
                        </li>
                        <li class="flex gap-2">
                            <img src={pic2} class="w-5 h-5"/>
                            No specific time limits.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Core