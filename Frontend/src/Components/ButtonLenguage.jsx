"use client";

import { Dropdown } from "flowbite-react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
export default function ButtonLenguage() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Dropdown inline label="Idioma">
      <DropdownItem onClick={() => handleChangeLanguage("es")}>
        Español
      </DropdownItem>
      <DropdownItem onClick={() => handleChangeLanguage("en")}>
        Ingles
      </DropdownItem>
    </Dropdown>
  );
}
