import { SignIn } from "@clerk/nextjs";

//Signup
export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}
