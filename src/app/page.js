import Image from "next/image";
import Header from "./components/Header";
import { CiMedicalCase } from "react-icons/ci";
import { LiaAmbulanceSolid } from "react-icons/lia";

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
<span className=" text-5xl font-semibold flex flex-col  "> Book <h1 className=" text-red-700"> OPD now</h1></span>
<input className="  p-2 rounded-2xl ring-1 font-serif text-2xl ring-black "/>

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
     
       
    
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
