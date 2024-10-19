import Image from "next/image";
import Header from "./components/Header";
import { CiMedicalCase } from "react-icons/ci";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { TfiLineDotted } from "react-icons/tfi";
import { FaUserDoctor } from "react-icons/fa6";
export default function Home() {
  return (
    <div >
      <main className="flex flex-col  bg-rose-50 p-3 space-y-12">
        <Header/>
        <div className=" flex justify-between p-4">
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" width="100"  className=" ring-1  ring-neutral-700 h-[100px] rounded-full shadow-white"/>
       <span className=" text-8xl font-sans"> <h1 className=" flex">Swift care<CiMedicalCase className="text-red-500"/></h1><h1 className=" p-2 mx-3 flex space-x-4">< LiaAmbulanceSolid className="text-red-500  "/>smart routes.</h1></span>
       <div className="p-7 rounded-2xl grid justify-evenly space-y-7  ring-1 ring-neutral-800">
<span className=" text-5xl font-serif flex flex-col  "> Emergency <h1 className=" text-red-700"> Window</h1></span>
<p className=" text-xl font-serif">Skip the Line</p>
<p className=" text-xl font-semibold" >Book an appointment within 2 minutes</p>
<button className=" bg-red-600 text-white font-bold  p-4 rounded-xl">Book Now</button>
       </div></div>
       <div className=" flex justify-around">
       <div className="p-7 rounded-2xl grid justify-evenly space-y-7 bg-neutral-100 bg-opacity-20 ring-1 ring-neutral-800 w-full">
<span className=" text-5xl font-semibold flex text-center"> Book <h1 className=" text-red-700  mx-4 overline"> OPD now</h1></span>
<div className=" flex justify-between  space-x-4">
<input className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black  " placeholder="Enter your Aadhar No." type="number"/>
<input className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black " placeholder="Enter your Name"/ >
<input className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black z-20 " placeholder="Enter your Age" type="number" /></div>

<div className=" flex justify-between  space-x-4">
<select className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black  " placeholder="Enter your Aadhar No." type="number">
<option>
  male 
</option>
<option>
  female 
</option>
</select>
<select className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black   z-20 " placeholder="Enter your Aadhar No." type="number">
<option value="">Blood Group</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
</select>
<select className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black   z-20 " placeholder="Enter your Aadhar No." type="number">
<option value="">Chronic Disease?</option>
                    <option value="a+">Yes</option>
                    <option value="a-">No</option>
                   
</select></div>
<p className=" text-xl font-semibold" >Book an appointment within 2 minutes</p>
<button className=" bg-red-600 text-white font-bold  p-4 rounded-xl">Book Now</button>
       </div>
       <div className=" grid justify-evenly bg-white  bg-opacity-25 ">
      <h1 className=" text-red-700 font-semibold text-7xl text-center">
        2300+
      </h1>
      <h3 className=" text-xl font-sans text-black text-center">Registered OPD</h3>
      <h1 className=" text-red-700 font-semibold text-7xl text-center">
     13000+
      </h1 >
      <h3 className=" text-xl font-sans text-black text-center">Registered Patients</h3></div>
       </div>
       <div className=" flex  justify-center h-[370px] p-11">
       < LiaAmbulanceSolid className="text-red-500 text-[130px] mt-10  "/>
       <div className=" grid  text-center ">
        <h1 className="mx-3 grid text-7xl text-center">Have An<div className=" flex"><TfiLineDotted className=" text-8xl text-red-500 text-center"/><TfiLineDotted className=" text-8xl text-red-500 text-center"/><TfiLineDotted className=" text-8xl text-red-500 text-center"/><TfiLineDotted className=" text-8xl text-red-500 text-center"/><TfiLineDotted className=" text-8xl text-red-500 text-center"/><TfiLineDotted className=" text-8xl text-red-500 text-center"/></div>
        </h1>
          <h1 className=" text-8xl "> appointment.</h1></div><FaUserDoctor className="text-red-500 text-[130px] mt-10  " /></div>
     
       <div className=" flex justify-around flex-row-reverse">
       <div className="p-7 rounded-2xl grid justify-evenly space-y-7 bg-neutral-100 bg-opacity-20  w-full">
<span className=" text-5xl font-semibold flex text-center"> Book <h1 className=" text-red-700  mx-4 overline"> Ambulance now</h1></span>
<div className=" flex justify-between  space-x-4">

<input className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black z-20 " placeholder="Enter your Source"/ >
<input className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black z-20 " placeholder="Enter your Destination" type="number" /></div>
<input className="  p-2 rounded-2xl ring-1 font-serif text-lg ring-black z-20 " placeholder="Enter your Aadhar No." type="number"/>
<div className=" flex justify-between  space-x-4">


</div>
<p className=" text-xl font-semibold z-20" >Book an appointment within 2 minutes</p>
<button className=" bg-red-600 text-white font-bold  p-4 rounded-xl">Book Now</button>
       </div>
       <div className=" grid justify-evenly bg-white  bg-opacity-25 ring-1 ring-neutral-800 rounded-xl  p-4">
      <h1 className=" text-red-700 font-semibold text-7xl text-center">
        2300+
      </h1>
      <h3 className=" text-xl font-sans text-black text-center">Registered Ambulance</h3>
      <h1 className=" text-red-700 font-semibold text-7xl text-center">
     13000+
      </h1 >
      <h3 className=" text-xl font-sans text-black text-center">Registered Rides</h3></div>
       </div>
    
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
};
