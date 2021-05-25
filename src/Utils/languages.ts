function createAcepptedLanguages() {
  function acepptedLanguages(language: string) {
    const accepted = {
      "Português 🇧🇷": () => {
        return "PTB";
      },
      "English 🇺🇲": () => {
        return "ENG";
      },
    };
    return accepted[language];
  }
  return acepptedLanguages;
}

export default createAcepptedLanguages;
