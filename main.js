document.addEventListener("DOMContentLoaded", function () {
  // Language selector functionality
  const languageBtn = document.querySelector(".language-btn");
  const languageDropdown = document.querySelector(".language-dropdown");
  const currentLang = document.querySelector(".current-lang");

  // Update current language based on URL
  const updateCurrentLanguage = () => {
    const path = window.location.pathname;
    const lang = path.split("/")[1] || "fr";
    const langElement = document.querySelector(
      `[data-lang="${lang.toUpperCase()}"]`
    );
    if (langElement) {
      currentLang.textContent = langElement.getAttribute("data-lang");
    }
  };

  updateCurrentLanguage();

  let isOpen = false;

  // Toggle dropdown on button click
  languageBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!isOpen) {
      languageDropdown.style.display = "block";
      isOpen = true;
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !languageBtn.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.style.display = "none";
      isOpen = false;
    }
  });

  // Close dropdown when clicking on a language link
  languageDropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      languageDropdown.style.display = "none";
      isOpen = false;
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add animation to sections on scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(section);
  });

  // Add parallax effect to hero section
  const heroVisual = document.querySelector(".hero-visual");
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    if (heroVisual) {
      heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });
});

// Fonction pour détecter la langue de la page
const getPageLanguage = () => {
  return document.documentElement.lang || "fr"; // Défaut : français
};

// Texte et liens en fonction de la langue
const getPopupText = (lang) => {
  const siteSource = "myinstasecurity.com"; // Source toujours égale au site

  const affiliateLinks = {
    fr: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_FR`,
    en: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_EN`,
    es: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_ES`,
    ru: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_RU`,
    it: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_IT`,
    de: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_DE`,
    zh: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_ZH`,
    pt: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_PT`,
    id: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_ID`,
    ja: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_JA`,
    da: `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_DA`,
    "x-default": `https://track.mspy.click/aff_c?offer_id=70&aff_id=13867&source=${siteSource}&aff_sub=insta_EN`,
  };

  const translations = {
    fr: {
      closeBtn: "Fermer",
      content:
        "En 2025 la seule technique qui fonctionne pour <strong>PIRATER un COMPTE</strong> Instagram est d'utiliser un logiciel d'espionnage.",
      additionalText: "Découvre le logiciel espion ICI :",
      affiliateBtn: {
        text: "Voir le logiciel",
        link: affiliateLinks.fr,
      },
    },
    en: {
      closeBtn: "Close",
      content:
        "In 2025 the only technique that works to <strong>HACK AN INSTAGRAM ACCOUNT</strong> is to use a spyware software.",
      additionalText: "Discover the spy software HERE:",
      affiliateBtn: {
        text: "See the software",
        link: affiliateLinks.en,
      },
    },
    es: {
      closeBtn: "Cerrar",
      content:
        "En 2025 la única técnica que funciona para <strong>HACKEAR UNA CUENTA</strong> de Instagram es usar un software espía.",
      additionalText: "Descubre el software espía AQUÍ:",
      affiliateBtn: {
        text: "Ver el software",
        link: affiliateLinks.es,
      },
    },
    ru: {
      closeBtn: "Закрыть",
      content:
        "В 2025 году единственная техника, которая работает для <strong>ВЗЛОМА АККАУНТА</strong> Instagram, - это использование шпионского программного обеспечения.",
      additionalText:
        "Откройте для себя шпионское программное обеспечение ЗДЕСЬ:",
      affiliateBtn: {
        text: "Посмотреть программное обеспечение",
        link: affiliateLinks.ru,
      },
    },
    it: {
      closeBtn: "Chiudi",
      content:
        "Nel 2025 l'unica tecnica che funziona per <strong>HACKERARE UN ACCOUNT</strong> Instagram è utilizzare un software spia.",
      additionalText: "Scopri il software spia QUI:",
      affiliateBtn: {
        text: "Vedi il software",
        link: affiliateLinks.it,
      },
    },
    de: {
      closeBtn: "Schließen",
      content:
        "Im Jahr 2025 ist die einzige Technik, die funktioniert, um <strong>EIN INSTAGRAM-KONTO ZU HACKEN</strong>, die Verwendung einer Spyware-Software.",
      additionalText: "Entdecken Sie die Spyware-Software HIER:",
      affiliateBtn: {
        text: "Software ansehen",
        link: affiliateLinks.de,
      },
    },
    zh: {
      closeBtn: "关闭",
      content:
        "在2025年，<strong>黑客Instagram账号</strong>的唯一技术是使用间谍软件。",
      additionalText: "在此处发现间谍软件：",
      affiliateBtn: {
        text: "查看软件",
        link: affiliateLinks.zh,
      },
    },
    pt: {
      closeBtn: "Fechar",
      content:
        "Em 2025, a única técnica que funciona para <strong>HACKEAR UMA CONTA</strong> do Instagram é usar um software de espionagem.",
      additionalText: "Descubra o software espião AQUI:",
      affiliateBtn: {
        text: "Veja o software",
        link: affiliateLinks.pt,
      },
    },
    id: {
      closeBtn: "Tutup",
      content:
        "Pada 2025, satu-satunya teknik yang berhasil untuk <strong>MERETAS AKUN</strong> Instagram adalah menggunakan perangkat lunak mata-mata.",
      additionalText: "Temukan perangkat lunak mata-mata DI SINI:",
      affiliateBtn: {
        text: "Lihat perangkat lunak",
        link: affiliateLinks.id,
      },
    },
    ja: {
      closeBtn: "閉じる",
      content:
        "2025年、<strong>Instagramアカウントをハッキング</strong>する唯一の技術は、スパイウェアソフトウェアを使用することです。",
      additionalText: "スパイウェアソフトウェアをここで発見：",
      affiliateBtn: {
        text: "ソフトウェアを見る",
        link: affiliateLinks.ja,
      },
    },
    da: {
      closeBtn: "Luk",
      content:
        "I 2025 er den eneste teknik, der fungerer til at <strong>HACKE EN INSTAGRAM-KONTO</strong>, at bruge spyware-software.",
      additionalText: "Opdag spyware-softwaren HER:",
      affiliateBtn: {
        text: "Se softwaren",
        link: affiliateLinks.da,
      },
    },
    "x-default": {
      closeBtn: "Close",
      content:
        "In 2025 the only technique that works to <strong>HACK AN INSTAGRAM ACCOUNT</strong> is to use a spyware software.",
      additionalText: "Discover the spy software HERE:",
      affiliateBtn: {
        text: "See the software",
        link: affiliateLinks["x-default"],
      },
    },
  };

  return translations[lang] || translations["x-default"];
};

// Exemple d'appel de la fonction
const lang = "fr"; // Remplacer par la langue de l'utilisateur
const popupContent = getPopupText(lang);
console.log(popupContent); // Affiche le texte et le lien de l'offre pour la langue sélectionnée

// Vérifier si le user agent est Googlebot
const isGoogleBot = () => {
  return /Googlebot/i.test(navigator.userAgent);
};

// Création de la popup
const createPopup = () => {
  const lang = getPageLanguage();
  const text = getPopupText(lang);

  // Créer le conteneur de la popup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popup-header">
        <button class="close-btn" disabled>${text.closeBtn} (5s)</button>
    </div>
    <div class="popup-content">
        <p>${text.content}</p>
        <p class="additional-text">${text.additionalText}</p> <!-- Classe pour appliquer un espacement -->
        <a href="${text.affiliateBtn.link}" target="_blank" class="affiliate-btn">${text.affiliateBtn.text}</a>
    </div>
`;
  document.body.appendChild(popup);

  // Fonctionnalité du bouton "Fermer" avec un compte à rebours
  const closeBtn = popup.querySelector(".close-btn");
  let secondsRemaining = 5;
  closeBtn.innerText = `${text.closeBtn} (${secondsRemaining}s)`;

  const countdown = setInterval(() => {
    secondsRemaining -= 1;
    if (secondsRemaining > 0) {
      closeBtn.innerText = `${text.closeBtn} (${secondsRemaining}s)`;
    } else {
      clearInterval(countdown);
      closeBtn.innerText = text.closeBtn;
      closeBtn.disabled = false;
    }
  }, 1000);

  // Fermer la popup lors du clic sur le bouton "Fermer"
  closeBtn.addEventListener("click", () => {
    popup.remove();
  });
};

// Afficher la popup après un délai si ce n'est pas Googlebot
if (!isGoogleBot()) {
  setTimeout(createPopup, 2000);
}
document.addEventListener("DOMContentLoaded", () => {
  function animateCounter(element, start, end, duration, format = false) {
    let startTime = null;

    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let current = Math.min(
        Math.floor(start + (end - start) * (progress / duration)),
        end
      );

      element.textContent = format ? current.toLocaleString("en-US") : current;

      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // Récupérer les éléments et lancer le compteur
  const stats = document.querySelectorAll(".stat-highlight");
  stats.forEach((stat) => {
    let endValue = parseInt(stat.getAttribute("data-value"), 10);
    let format = stat.hasAttribute("data-format"); // Vérifie si on doit formater
    animateCounter(stat, 0, endValue, 2000, format);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("section");
  const heroContent = document.querySelector(".hero-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroContent.classList.add("visible");
        } else {
          heroContent.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});

//pour le filtrage section procede//

document.addEventListener("DOMContentLoaded", function () {
  const attackTab = document.querySelector(".procede-list li:nth-child(1)");
  const consequenceTab = document.querySelector(
    ".procede-list li:nth-child(2)"
  );
  const signeTab = document.querySelector(".procede-list li:nth-child(3)");

  const attackSection = document.querySelector(".procede-attack");
  const consequenceSection = document.querySelector(".procede-consequence");
  const signeSection = document.querySelector(".procede-signe");

  const allTabs = [attackTab, consequenceTab, signeTab];
  const allSections = [attackSection, consequenceSection, signeSection];

  function showSection(show, activeTab) {
    allSections.forEach((section) => {
      section.classList.remove("active");
      section.style.display = "none";
    });

    allTabs.forEach((tab) => tab.classList.remove("active"));

    show.style.display = "flex";
    setTimeout(() => {
      show.classList.add("active");
    }, 50);

    activeTab.classList.add("active");

    const cards = show.querySelectorAll(".card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  showSection(attackSection, attackTab);

  attackTab.addEventListener("click", () =>
    showSection(attackSection, attackTab)
  );
  consequenceTab.addEventListener("click", () =>
    showSection(consequenceSection, consequenceTab)
  );
  signeTab.addEventListener("click", () => showSection(signeSection, signeTab));
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelector("section");
  const solutionList = document.querySelector(".solution-list");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          solutionList.classList.add("visible");
        } else {
          solutionList.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(sections);
});

document.addEventListener("DOMContentLoaded", () => {
  const solutionLists = document.querySelectorAll(".solution-list");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3, // L'élément est visible à 30% avant d'apparaître
    }
  );

  solutionLists.forEach((list) => {
    observer.observe(list);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const conclusionSection = document.querySelector(".conclusion");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(conclusionSection);
});
