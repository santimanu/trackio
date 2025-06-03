import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trackio - Track your expenses" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  return <> hey </>;
}
