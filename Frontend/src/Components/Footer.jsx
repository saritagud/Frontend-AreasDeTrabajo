"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="bg-azulOscuro rounded-none text-white">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <Footer.Brand alt="Logo" src="" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="Contacto" className="text-white font-OpenSans "/>
              <Footer.LinkGroup col className="text-white font-OpenSans ">
                <Footer.name>0412-0983063</Footer.name>
                <Footer.name href="#">correo@gmail.com</Footer.name>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Redes Soiales" className="text-white font-OpenSans "/>
              <Footer.LinkGroup col className="text-white font-OpenSans ">
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Desarrolladores" className="text-white font-OpenSans "/>
              <Footer.LinkGroup col className="text-white font-OpenSans ">
                <Footer.name>Sara Gudiño</Footer.name>
                <Footer.name>Atilio Garcia</Footer.name>

                <Footer.name>Luis Paredes</Footer.name>

                <Footer.name>Maikol Guerrero</Footer.name>

                <Footer.name>José Uzcátegui</Footer.name>

                <Footer.name>Anggelo Huz</Footer.name>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="bg-white" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by=". Todos los derechos reservados." href="#" year={2023} className="text-white font-OpenSans "/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="#" icon={BsGithub} className="text-white"/>
            <Footer.Icon href="#" icon={BsInstagram} className="text-white"/>
            
          </div>
        </div>
      </div>
    </Footer>
  );
}
