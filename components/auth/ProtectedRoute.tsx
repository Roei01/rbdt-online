"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import type { ReactNode } from "react";

const mapErrorCodeToMessage = (code?: string) => {
  switch (code) {
    case "TOKEN_EXPIRED":
      return "פג תוקף ההתחברות. יש להתחבר מחדש.";
    case "SESSION_ALREADY_ACTIVE":
      return "לא ניתן להתחבר כעת. כבר יש משתמש אחד מחובר לחשבון הזה.";
    default:
      return "יש להתחבר כדי להמשיך.";
  }
};

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user, loading, errorCode } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(
        `/login?message=${encodeURIComponent(mapErrorCodeToMessage(errorCode))}`
      );
    }
  }, [errorCode, loading, router, user]);

  if (loading || !user) {
    return <LoadingSpinner fullScreen label="בודקים את הגישה שלך..." />;
  }

  return <>{children}</>;
};
