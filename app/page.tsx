import Image from "next/image";

export default function Home() {
  return (
    
   <main> 
  <div className="flex justify-center gap-4 h-64 w-full mt-10">
    <div className="bg-orange-600 h-56 w-1/4"></div>
    <div className="bg-green-400 h-56 w-1/4"></div>
    <div className="bg-purple-500 h-56 w-1/4"></div>
    </div>
    
    
    <div className="flex w-full h-64 justify-center gap-4">
    
    <div className="bg-yellow-400 h-56 w-1/4"></div>
    <div className="bg-orange-300 h-56 w-1/4"></div>
    
  </div>
  </main>

)
}