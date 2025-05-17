"use client" 
import SideBar from "@/component/sidebar/sidebar"
import  Editor  from "../component/code/editor";
import { useEffect, useState } from "react";
import { _File } from "./types/file.d";
import { Settings } from "./types/settings.d";

export default function Home() {
  
  return (
    <div className="flex flex-col h-screen w-full">
     <SideBar/>
      <div className="flex flex-1 overflow-hidden h-screen w-full">
      
              <Editor  />
            
      </div>
    </div>
  );
}
