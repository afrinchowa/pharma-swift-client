import LoginForm from "@/components/modules/auth/login/LoginForm";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback={<p>Loading</p>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
