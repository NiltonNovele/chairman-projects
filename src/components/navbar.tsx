"use client";

import { UserButton } from "@/features/auth/components/user-button";

import { MobileSidebar } from "./mobile-sidebar";
import { usePathname } from "next/navigation";

const pathnameMap = {
  tasks: {
    title: "Tarefas",
    description: "Veja aqui todas as suas tarefas",
  },
  projects: {
    title: "Projetos",
    description: "Veja aqui as tarefas do seu projeto",
  },
};

const defaultMap = {
  title: "Inicio",
  description: "Monitorize todos os seus projetos e tarefas aqui",
};

export const Navbar = () => {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;

  const { title, description } = pathnameMap[pathnameKey] || defaultMap;

  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};
