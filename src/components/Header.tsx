import { ToggleDarkLightMode } from '@/components/ui/ToggleDarkLightMode';
import Image from 'next/image';
import { FaBars } from "react-icons/fa6";

export function Header() {
  return (
    <div className="flex px-2 justify-between items-center min-h-14 bg-menuForeground">
      <div className="flex items-center justify-center">
        <FaBars className='hover:bg-hoverColor' size={16} />
      </div>

     
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src="/studio-kosmeo/KosmeoLogo-Idea6_Option3.1-logoSemFundoCorte.PNG"
          alt="Kosmeo Logo"
          width={90}
          height={90}
        />
      </div>

      <div className="flex items-center justify-center">
        <ToggleDarkLightMode name="toggleDarkLightMode" />
      </div>
    </div>
  );
}
