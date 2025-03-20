'use client';

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

interface SwitchToggleProps {
  name: string;
}

export function ToggleDarkLightMode({ name }: SwitchToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar se o usuário tem o tema escuro ativado no sistema
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Verificar o estado inicial do tema e aplicar a classe ao HTML
    const initialMode = darkModeMediaQuery.matches;
    setIsDarkMode(initialMode);
    
    // Aplicar a classe 'dark' diretamente no HTML se o modo escuro for ativado
    if (initialMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Função para lidar com a mudança do modo de tema
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);

      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Adicionar o ouvinte para a mudança de tema
    darkModeMediaQuery.addEventListener('change', handleChange);

    // Limpeza ao desmontar
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleCheckedChange = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDarkMode(checked);
  };

  return (
    <div className="flex flex-col gap-0.5 items-center">
      <Switch
        id={`switch-${name}`}
        checked={isDarkMode}
        onCheckedChange={handleCheckedChange}
      />
      <Label className="text-xs" htmlFor={`switch-${name}`}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Label>
    </div>
  );
}
