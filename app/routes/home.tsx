import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trackio - Track your expenses" },
    { name: "description", content: "Trackio is a simple and powerful expense tracking app that helps you stay on top of your finances. Log your daily spending, monitor your savings, and gain insights into your habits — all in one place." },
  ];
}

export default function Home() {
  return (
  <>
    <Header/>

    <Footer/>
  </>
  );
}
