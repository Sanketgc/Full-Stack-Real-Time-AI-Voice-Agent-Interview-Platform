import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout =  async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  console.log("Auth Layout - isUserAuthenticated:", isUserAuthenticated);

  if (isUserAuthenticated) {
    redirect("/interview");
    return null;
  }
  return <div className="auth-layout">{children}</div>;
}

export default AuthLayout;
