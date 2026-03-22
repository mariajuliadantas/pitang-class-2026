import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SignupForm } from "@/components/signup-form";

export const Route = createFileRoute("/_auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  function handleRegister() {
    navigate({ to: "/login" });
  }

  return <SignupForm onSuccess={handleRegister} />;
}