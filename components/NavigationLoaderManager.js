"use client";
import { NavigationLoaderProvider, useNavigationLoader } from "@/context/NavigationLoaderContext";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function NavigationLoaderOverlay() {
  const { navigationLoading } = useNavigationLoader();
  if (!navigationLoading) return null;
  return (
    <div className="fixed inset-0 z-[9999] bg-white bg-opacity-80 flex flex-col h-screen justify-center items-center pointer-events-none">
      <Loader />
    </div>
  );
}

function NavigationLoaderHandler() {
  const pathname = usePathname();
  const { setNavigationLoading } = useNavigationLoader();
  useEffect(() => {
    setNavigationLoading(true);
    const timeout = setTimeout(() => setNavigationLoading(false), 600);
    return () => {
      clearTimeout(timeout);
      setNavigationLoading(false);
    };
  }, [pathname, setNavigationLoading]);
  return null;
}

export default function NavigationLoaderManager({ children }) {
  return (
    <NavigationLoaderProvider>
      <NavigationLoaderHandler />
      <NavigationLoaderOverlay />
      {children}
    </NavigationLoaderProvider>
  );
} 