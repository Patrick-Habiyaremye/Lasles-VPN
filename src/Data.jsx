import React from 'react';
import pic1 from './assets/people.png';
import pic2 from './assets/data.png';
import pic3 from './assets/loc.png';

const Data = () =>{
    return(
        <>
        <div class="flex pt-20 pt-10 px-40 gap-50">
            <div class="flex gap-7">
              <img src={pic1} class="w-12"/>
              <div class="gap-10">
                <p><b>90+</b></p>
                <p>Users</p>
              </div>
            </div>
            <div class="flex gap-7">
              <img src={pic3} class="w-12"/>
              <div class="gap-10">
                <p><b>30+</b></p>
                <p>Locations</p> 
              </div>
            </div>
            <div class="flex gap-7">
              <img src={pic2} class="w-12"/>
              <div class="">
                <p><b>50+</b></p>
                <p>Servers</p>
              </div>
            </div>
        </div>
        </>
    )
}

export default Data