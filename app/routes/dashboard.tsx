import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <h1>Dashboard privado</h1>
        {/* Tu contenido */}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}