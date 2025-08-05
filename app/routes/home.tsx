import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Footer from "~/components/Footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trackio AI – Smart Business Expense Management" },
    { name: "description", content: "Trackio AI helps businesses manage expenses, analyze financial data, and uncover insights using artificial intelligence." },
  ];
}

export default function Home() {
  return (
  <div className="flex flex-col min-h-screen items-center">
    <Header/>

    <main className="flex justify-center bg-amber-100 h-screen w-screen flex-col text-black gap-6">
      
      <div className=" gap-3 flex flex-col items-center ">
        <h1> Maximize Your Business Performance </h1>
        <p>Let Trackio AI track, analyze, and interpret your business metrics so you can make smarter decisions—faster.</p>
        <button className=" bg-cyan-700 rounded-xl py-2 px-4 font-medium text-white hover:scale-105 hover:bg-cyan-800 transition-all duration-200">Start Tracking for Free</button>
        <img src="" alt="hero" />
      </div>

      <div>
        <h3>Trusted by over 1,200 businesses across retail, SaaS, and services.</h3>
        <p>“Trackio helped us reduce our expenses by 15% in just one quarter!” – Leo, CFO at NovaTech</p>
      </div>
      
      <div>
        <h4>Key Features</h4>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>

    </main>
      
    <Footer/>
  </div>
  );
}
