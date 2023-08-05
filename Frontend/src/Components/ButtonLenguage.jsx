import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => handleChangeLanguage(e.target.value)}
    >
      <option value="es">Español</option>
      <option value="en">Inglés</option>
    </select>
  );
}