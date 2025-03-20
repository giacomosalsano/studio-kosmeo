'use client';

import { ComingSoon } from "@/components/ComingSoon";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export default function Home() {


  return (
    <div className="items-center">
      <Header/>
      <ComingSoon/>
      <Footer/>
    </div>
  );
}
