import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import type { SignInForm } from "@/components/login-form";
import { useEffect, useState, type FormEvent } from "react";
import type { LoggedUser } from "@/types";

const baseURL = "https://dummyjson.com";

function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}

export async function getAuthenticatedUser(): Promise<LoggedUser | null> {
  const token = getCookie("@pitang/accessToken");
  if (!token) return null;

  const response = await fetch(`${baseURL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) return null;
  return response.json();
}

export function useAuth() {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAuthenticatedUser().then((user) => {
      if (!user) return toast.error("Something went wrong");
      setLoggedUser(user);
    });
  }, []);

  async function handleLogout() {
    document.cookie = "@pitang/accessToken=; path=/; Max-Age=0";
    navigate({ to: "/login" });
  }

  async function handleLogin(
    event: FormEvent<HTMLFormElement>,
    data: SignInForm,
  ): Promise<string | null> {
    event.preventDefault();

    const response = await fetch(`${baseURL}/auth/login`, {
      body: JSON.stringify({
        expiresInMins: 30,
        username: data.username,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const json = await response.json();

    if (!response.ok) {
      return json.message ?? "Invalid username or password.";
    }

    toast.success("Welcome...");

    document.cookie = `@pitang/accessToken=${json.accessToken}; path=/; Max-Age=86400`;

    navigate({ to: "/dashboard" });
    return null;
  }

  return {
    loggedUser,
    handleLogin,
    handleLogout,
  };
}