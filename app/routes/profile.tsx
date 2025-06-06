import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function profile() {
    return (
    <>
      <SignedIn>
        <h1>Profile:</h1>
        {/* Tu contenido */}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
    );
}