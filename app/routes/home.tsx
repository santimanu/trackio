import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Footer from "~/components/Footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trackio - Track your expenses" },
    { name: "description", content: "Trackio is a simple and powerful expense tracking app that helps you stay on top of your finances. Log your daily spending, monitor your savings, and gain insights into your habits — all in one place." },
  ];
}

export default function Home() {
  return (
  <div className="flex flex-col min-h-screen">
    <Header/>

    <main>
    </main>
      
    <Footer/>
  </div>
  );
}
