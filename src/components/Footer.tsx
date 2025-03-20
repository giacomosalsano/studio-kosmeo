import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  return(
    <div className="absolute bottom-0 w-full">
     <div className="flex items-center justify-center gap-x-3 py-5"> 
        <a href='https://www.instagram.com/studio_kosmeo/?__d=11%2F' target="_blank" className="hover:bg-hoverColor rounded-full p-2 text-foreground"><FaInstagram size={16} /></a>
        <a href='' target="_blank" className="hover:bg-hoverColor rounded-full p-2 text-foreground"><FaFacebookF size={16}/></a>
        <a href='https://whatsa.me/5511958260620/?t=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20o%20@studio_kosmeo!' target="_blank" className="hover:bg-hoverColor rounded-full p-2 text-foreground"><FaWhatsapp size={16}/></a>
      </div>
      <div className="flex items-center font-kanit text-xs justify-center mb-1">made with ♥ by<a className='underline ml-1' href="https://instagram.com/ushvodkapapi" target="_blank">ushvodkapapi</a></div>
      
    </div>
  )
}