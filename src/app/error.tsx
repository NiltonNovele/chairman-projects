"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-4">
      <AlertTriangle className="size-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">Algo correu mal</p>
      <Button variant="secondary" size="sm">
        <Link href="/">Voltar ao inicio</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
