"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import "./globals.css";
import Link from "next/link"


export default function Header() {
  return(
    <div className="justify-items-center bg-amber-700 w-screen p-4 space-y-2">
      
      <div className=""><h1 className="text-5xl">Studio Kosmeo</h1></div>
      <div className="">
            <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem >
                    <Link href='https://www.giacomosalsano.com'>
                      <NavigationMenuLink className='bg-none hover:bg-gray-100'>
                        Sobre Nós
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem >
                    <Link href='https://www.giacomosalsano.com'>
                      <NavigationMenuLink className='bg-none hover:bg-gray-100'>
                        Catálogo
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem >
                    <Link href='https://www.giacomosalsano.com'>
                      <NavigationMenuLink className='bg-none hover:bg-gray-100'>
                        Opção 3
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem >
                    <Link href='https://www.giacomosalsano.com'>
                      <NavigationMenuLink className='bg-none hover:bg-gray-100'>
                        Contato
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
    
  )
}