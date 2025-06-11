import { useState, useEffect } from "react";
import { Language, Theme, MenuItem } from "./types/menu";
import { categories, menuItems } from "./data/menuData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import CategoryButtons from "./components/CategoryButtons";
import MenuSection from "./components/MenuSection";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useLocalStorage<Language>("language", "en");
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");
  const [activeCategory, setActiveCategory] = useState("starters");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Apply theme to document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Apply RTL direction and font
  useEffect(() => {
    const isRTL = language === "ar" || language === "ckb";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;

    // Apply font for Kurdish and Arabic
    if (language === "ckb" || language === "ar") {
      const existingLink = document.getElementById("kurdish-font");
      if (!existingLink) {
        const fontLink = document.createElement("link");
        fontLink.id = "kurdish-font";
        fontLink.rel = "stylesheet";
        fontLink.href =
          "https://cdnjs.cloudflare.com/ajax/libs/vazir-font/30.1.0/font-face.css";
        document.head.appendChild(fontLink);

        const style = document.createElement("style");
        style.textContent = `
          [lang="ckb"] *, [lang="ar"] * { 
            font-family: Vazir, Arial, sans-serif !important; 
          }
        `;
        document.head.appendChild(style);
      }
    } else {
      const fontLink = document.getElementById("kurdish-font");
      if (fontLink) {
        fontLink.remove();
      }
    }
  }, [language]);

  // Update URL parameters
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    url.searchParams.set("category", activeCategory);
    window.history.replaceState({}, "", url);
  }, [language, activeCategory]);

  // Initialize from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang") as Language;
    const categoryParam = urlParams.get("category");

    if (langParam && ["en", "ar", "ckb"].includes(langParam)) {
      setLanguage(langParam);
    }

    if (categoryParam && categories.some((cat) => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [setLanguage]);

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-5 border-t-4 border-b-4 border-orange-500">
        <Header
          language={language}
          theme={theme}
          onLanguageChange={setLanguage}
          onThemeChange={setTheme}
        />

        <CategoryButtons
          categories={categories}
          activeCategory={activeCategory}
          language={language}
          onCategoryChange={setActiveCategory}
        />

        <MenuSection
          items={filteredItems}
          language={language}
          onItemClick={setSelectedItem}
        />

        <Footer language={language} />

        <Modal
          item={selectedItem}
          language={language}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </div>
  );
}

export default App;
