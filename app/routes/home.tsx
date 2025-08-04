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
  <div className="flex flex-col min-h-screen justify-center items-center">
    <Header/>

    <main>
    </main>
      
    <Footer/>
  </div>
  );
}
