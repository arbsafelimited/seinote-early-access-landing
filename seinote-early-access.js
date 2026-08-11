(function () {
  const params = new URLSearchParams(window.location.search);
  const utm = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map((key) => [key, params.get(key) || ""]));
  const campaign = utm.utm_campaign || "seinote_early_access";
  const variant = ["less_admin_more_care", "built_by_listening", "seinote_early_access"].includes(campaign) ? campaign : "seinote_early_access";
  const translations = {
    en: {
      intro_platform: "Clinical Practice Platform",
      nav_how: "How It Works",
      nav_features: "Features",
      nav_early: "Early Access",
      nav_faq: "FAQ",
      cta_apply: "Apply for Early Access",
      cta_see_how: "See How Seinote Works",
      hero_eyebrow: "For mental health professionals in Canada",
      hero_title: "Spend less time on clinical notes. Spend more time caring for people.",
      hero_lead: "Seinote brings clinical notes, scheduling, video sessions and billing into one platform designed around the real workflow of mental health professionals.",
      hero_micro: "14 days free on the Basic plan. 50% off your selected plan while your subscription remains active. Limited to 25 selected professionals.",
      product_small: "Session completed",
      product_strong: "Clinical note ready for review",
      product_body: "Review, edit and finalize with professional judgment.",
      note_label: "Progress note",
      note_title: "Draft summary",
      flow_schedule: "Schedule",
      flow_video: "Video",
      flow_billing: "Billing",
      problem_eyebrow: "The work after the session",
      problem_title: "Clinical care should not be buried under administration.",
      problem_p1: "Many therapists finish the session and then start the second shift: notes, billing, reminders, scheduling and switching between disconnected tools.",
      problem_p2: "Seinote is built to reduce that operational drag, starting with clinical notes that are ready for review in minutes.",
      how_eyebrow: "How it works",
      how_title: "A calmer practice flow from session to note.",
      how_1_title: "Run the session",
      how_1_body: "Use Seinote in your web-based workflow, including integrated video sessions when appropriate.",
      how_2_title: "Review the draft",
      how_2_body: "AI supports the documentation process. You stay responsible for reviewing, editing and finalizing clinical information.",
      how_3_title: "Keep the practice moving",
      how_3_body: "Scheduling, billing and reminders stay closer to the same operational system.",
      features_eyebrow: "All-in-one practice flow",
      features_title: "Designed around the routines independent clinicians actually manage.",
      feature_1_title: "Clinical notes",
      feature_1_body: "Draft notes for professional review after sessions.",
      feature_2_title: "Scheduling",
      feature_2_body: "Organize appointments and the daily flow of practice.",
      feature_3_title: "Video sessions",
      feature_3_body: "Meet clients inside the platform instead of jumping between tools.",
      feature_4_title: "Billing with Stripe",
      feature_4_body: "Support payment and billing workflows without making financial data part of clinical notes.",
      feature_5_title: "Responsible AI support",
      feature_5_body: "Use AI as assistance, never as a replacement for clinical judgment.",
      feature_6_title: "Web platform",
      feature_6_body: "Available through the web. A mobile app is not currently offered.",
      listening_title: "Built by listening to mental health professionals.",
      listening_body: "Seinote was developed by listening to the people who understand the work best. Now, we want to continue improving it alongside 25 professionals who will use the platform in real practice and share their experience with us.",
      listening_quiet: "Technology should support care - never replace the professional behind it.",
      early_eyebrow: "Seinote Early Access",
      early_title: "25 professionals. One opportunity to experience Seinote early.",
      early_body: "Selected applicants receive a real Early Access experience, a commercial benefit and a direct channel to help shape what Seinote becomes next.",
      benefit_1_title: "14 days free",
      benefit_1_body: "Basic plan during the initial Early Access period.",
      benefit_2_title: "50% off",
      benefit_2_body: "Your selected plan while your subscription remains active.",
      benefit_3_title: "Direct product access",
      benefit_3_body: "Communicate with Sarkis Curi, Seinote Product Partner.",
      benefit_4_title: "Priority feedback",
      benefit_4_body: "Report issues and share suggestions based on real practice.",
      partner_eyebrow: "Product Partner access",
      partner_title: "A direct line to the product team.",
      partner_body: "Early Access participants will have a direct communication channel with Sarkis Curi, Seinote Product Partner, to report issues, share ideas and help us understand how Seinote performs in real clinical practice.",
      objections_eyebrow: "Questions before applying",
      objections_title: "Change should feel clear, not risky.",
      objection_1_title: "I do not have time.",
      objection_1_body: "That is exactly why Seinote exists: to reduce time spent on administrative work and give you more time for clients.",
      objection_2_title: "Does AI replace judgment?",
      objection_2_body: "No. Seinote uses AI as a support tool. The professional remains responsible for reviewing and finalizing clinical information.",
      objection_3_title: "What if my current software works?",
      objection_3_body: "You can experience Seinote during the free Early Access period and decide whether the workflow is right for your practice.",
      objection_4_title: "What about privacy?",
      objection_4_body: "Privacy and responsible data handling are core product priorities. No patient information belongs in this application form.",
      faq_eyebrow: "FAQ",
      faq_title: "What professionals usually ask first.",
      faq_1_q: "What is Seinote?",
      faq_1_a: "Seinote is an operational platform for mental health professionals, focused on clinical notes, scheduling, video sessions and billing workflows.",
      faq_2_q: "Who is Early Access for?",
      faq_2_a: "Psychologists, psychotherapists, counsellors, therapists, social workers and other mental health professionals in Canada, especially independent or early-stage practices.",
      faq_3_q: "Is Seinote already available to use?",
      faq_3_a: "Yes. Early Access is the real-use phase for selected professionals, not a fictional waitlist.",
      faq_4_q: "When do I become a Seinote Early Access Partner?",
      faq_4_a: "During the free period you are an Early Access Applicant. After subscribing, you become a Seinote Early Access Partner.",
      faq_5_q: "Do I need to attend meetings or give a testimonial?",
      faq_5_a: "No. Feedback is welcome, but there are no fixed meetings, testimonial requirements or image-use obligations.",
      faq_6_q: "Is there a mobile app?",
      faq_6_a: "No. Seinote is currently available as a web platform.",
      apply_eyebrow: "Apply",
      apply_title: "Apply for Seinote Early Access.",
      apply_body: "Applications now happen directly through the Seinote secure access page.",
      footer_line: "A quiet companion for clinicians.",
    },
    fr: {
      intro_platform: "Plateforme de pratique clinique",
      nav_how: "Fonctionnement",
      nav_features: "Fonctionnalités",
      nav_early: "Accès anticipé",
      nav_faq: "FAQ",
      cta_apply: "Demander l'accès anticipé",
      cta_see_how: "Voir comment Seinote fonctionne",
      hero_eyebrow: "Pour les professionnels de la santé mentale au Canada",
      hero_title: "Passez moins de temps sur les notes cliniques. Passez plus de temps à prendre soin des gens.",
      hero_lead: "Seinote réunit les notes cliniques, la planification, les séances vidéo et la facturation dans une seule plateforme conçue autour du vrai flux de travail des professionnels de la santé mentale.",
      hero_micro: "14 jours gratuits sur le forfait Basic. 50 % de réduction sur le forfait choisi tant que votre abonnement reste actif. Limité à 25 professionnels sélectionnés.",
      product_small: "Séance terminée",
      product_strong: "Note clinique prête à réviser",
      product_body: "Révisez, modifiez et finalisez avec votre jugement professionnel.",
      note_label: "Note de progrès",
      note_title: "Résumé provisoire",
      flow_schedule: "Horaire",
      flow_video: "Vidéo",
      flow_billing: "Facturation",
      problem_eyebrow: "Le travail après la séance",
      problem_title: "Les soins cliniques ne devraient pas être ensevelis sous l'administration.",
      problem_p1: "De nombreux thérapeutes terminent la séance puis commencent un deuxième quart: notes, facturation, rappels, horaire et passage entre des outils déconnectés.",
      problem_p2: "Seinote est conçu pour réduire cette charge opérationnelle, en commençant par des notes cliniques prêtes à être révisées en quelques minutes.",
      how_eyebrow: "Fonctionnement",
      how_title: "Un flux de pratique plus calme, de la séance à la note.",
      how_1_title: "Menez la séance",
      how_1_body: "Utilisez Seinote dans votre flux de travail web, y compris les séances vidéo intégrées lorsque c'est approprié.",
      how_2_title: "Révisez le brouillon",
      how_2_body: "L'IA soutient le processus de documentation. Vous restez responsable de réviser, modifier et finaliser l'information clinique.",
      how_3_title: "Gardez la pratique en mouvement",
      how_3_body: "L'horaire, la facturation et les rappels restent plus près du même système opérationnel.",
      features_eyebrow: "Flux de pratique tout-en-un",
      features_title: "Conçu autour des routines que les cliniciens indépendants gèrent réellement.",
      feature_1_title: "Notes cliniques",
      feature_1_body: "Brouillons de notes à réviser après les séances.",
      feature_2_title: "Planification",
      feature_2_body: "Organisez les rendez-vous et le déroulement quotidien de la pratique.",
      feature_3_title: "Séances vidéo",
      feature_3_body: "Rencontrez vos clients dans la plateforme au lieu de passer d'un outil à l'autre.",
      feature_4_title: "Facturation avec Stripe",
      feature_4_body: "Soutenez les flux de paiement et de facturation sans intégrer les données financières aux notes cliniques.",
      feature_5_title: "Soutien IA responsable",
      feature_5_body: "Utilisez l'IA comme assistance, jamais comme remplacement du jugement clinique.",
      feature_6_title: "Plateforme web",
      feature_6_body: "Disponible sur le web. Aucune application mobile n'est actuellement offerte.",
      listening_title: "Construit en écoutant les professionnels de la santé mentale.",
      listening_body: "Seinote a été développé en écoutant les personnes qui comprennent le mieux ce travail. Nous voulons maintenant continuer à l'améliorer avec 25 professionnels qui utiliseront la plateforme en pratique réelle et partageront leur expérience.",
      listening_quiet: "La technologie devrait soutenir les soins - jamais remplacer le professionnel derrière eux.",
      early_eyebrow: "Accès anticipé Seinote",
      early_title: "25 professionnels. Une occasion d'essayer Seinote en premier.",
      early_body: "Les candidats sélectionnés reçoivent une vraie expérience d'accès anticipé, un avantage commercial et un canal direct pour aider à façonner l'avenir de Seinote.",
      benefit_1_title: "14 jours gratuits",
      benefit_1_body: "Forfait Basic pendant la période initiale d'accès anticipé.",
      benefit_2_title: "50 % de réduction",
      benefit_2_body: "Sur le forfait choisi tant que votre abonnement reste actif.",
      benefit_3_title: "Accès direct au produit",
      benefit_3_body: "Communiquez avec Sarkis Curi, Product Partner de Seinote.",
      benefit_4_title: "Rétroaction prioritaire",
      benefit_4_body: "Signalez les problèmes et partagez vos suggestions basées sur la pratique réelle.",
      partner_eyebrow: "Accès Product Partner",
      partner_title: "Une ligne directe avec l'équipe produit.",
      partner_body: "Les participants à l'accès anticipé auront un canal de communication direct avec Sarkis Curi, Product Partner de Seinote, pour signaler des problèmes, partager des idées et nous aider à comprendre comment Seinote fonctionne en pratique clinique réelle.",
      objections_eyebrow: "Questions avant de postuler",
      objections_title: "Le changement devrait être clair, pas risqué.",
      objection_1_title: "Je n'ai pas le temps.",
      objection_1_body: "C'est précisément pourquoi Seinote existe: réduire le temps consacré au travail administratif et vous redonner plus de temps pour les clients.",
      objection_2_title: "L'IA remplace-t-elle le jugement?",
      objection_2_body: "Non. Seinote utilise l'IA comme outil de soutien. Le professionnel reste responsable de réviser et de finaliser l'information clinique.",
      objection_3_title: "Et si mon logiciel actuel fonctionne?",
      objection_3_body: "Vous pouvez essayer Seinote pendant la période gratuite d'accès anticipé et décider si ce flux convient à votre pratique.",
      objection_4_title: "Qu'en est-il de la confidentialité?",
      objection_4_body: "La confidentialité et la gestion responsable des données sont des priorités du produit. Aucune information patient ne doit figurer dans cette demande.",
      faq_eyebrow: "FAQ",
      faq_title: "Ce que les professionnels demandent habituellement en premier.",
      faq_1_q: "Qu'est-ce que Seinote?",
      faq_1_a: "Seinote est une plateforme opérationnelle pour les professionnels de la santé mentale, centrée sur les notes cliniques, la planification, les séances vidéo et les flux de facturation.",
      faq_2_q: "À qui s'adresse l'accès anticipé?",
      faq_2_a: "Aux psychologues, psychothérapeutes, conseillers, thérapeutes, travailleurs sociaux et autres professionnels de la santé mentale au Canada, surtout les pratiques indépendantes ou en démarrage.",
      faq_3_q: "Seinote est-il déjà disponible?",
      faq_3_a: "Oui. L'accès anticipé est une phase d'utilisation réelle pour les professionnels sélectionnés, pas une liste d'attente fictive.",
      faq_4_q: "Quand est-ce que je deviens partenaire d'accès anticipé Seinote?",
      faq_4_a: "Pendant la période gratuite, vous êtes candidat à l'accès anticipé. Après l'abonnement, vous devenez partenaire d'accès anticipé Seinote.",
      faq_5_q: "Dois-je assister à des réunions ou donner un témoignage?",
      faq_5_a: "Non. Les commentaires sont bienvenus, mais il n'y a pas de réunions fixes, d'exigence de témoignage ou d'utilisation d'image.",
      faq_6_q: "Y a-t-il une application mobile?",
      faq_6_a: "Non. Seinote est actuellement disponible comme plateforme web.",
      apply_eyebrow: "Postuler",
      apply_title: "Demander l'accès anticipé Seinote.",
      apply_body: "Les demandes se font maintenant directement sur la page sécurisée de Seinote.",
      footer_line: "Un compagnon discret pour les cliniciens.",
    },
  };

  function track(eventName, properties = {}) {
    const events = JSON.parse(sessionStorage.getItem("seinote_early_access_events") || "[]");
    events.push({ event: eventName, properties: { ...utm, landing_variant: variant, ...properties }, timestamp: new Date().toISOString() });
    sessionStorage.setItem("seinote_early_access_events", JSON.stringify(events.slice(-60)));
  }

  document.querySelectorAll("[data-track]").forEach((node) => {
    node.addEventListener("click", () => track(`early_access_${node.dataset.track}_click`));
  });

  document.querySelectorAll("details").forEach((node) => {
    node.addEventListener("toggle", () => {
      if (node.open) track("early_access_faq_open", { question: node.querySelector("summary")?.textContent || "" });
    });
  });

  function setLanguage(language) {
    const activeLanguage = translations[language] ? language : "en";
    document.documentElement.lang = activeLanguage === "fr" ? "fr-CA" : "en-CA";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (translations[activeLanguage][key]) node.textContent = translations[activeLanguage][key];
    });
    document.title = activeLanguage === "fr"
      ? "Seinote Accès anticipé | Plateforme de pratique clinique"
      : "Seinote Early Access | Clinical Practice Platform for Mental Health Professionals";
    document.querySelector("meta[name='description']")?.setAttribute("content", activeLanguage === "fr"
      ? "Demandez l'accès anticipé Seinote. Les professionnels canadiens sélectionnés reçoivent 14 jours gratuits et 50 % de réduction tant que leur abonnement reste actif."
      : "Apply for Seinote Early Access. Selected Canadian mental health professionals receive 14 days free and 50% off while their subscription remains active.");
    const toggle = document.querySelector("[data-language-toggle]");
    if (toggle) {
      toggle.textContent = activeLanguage === "fr" ? "EN" : "FR";
      toggle.setAttribute("aria-label", activeLanguage === "fr" ? "Switch to English" : "Passer au français");
    }
    localStorage.setItem("seinote_landing_language", activeLanguage);
    track("early_access_language_set", { language: activeLanguage });
  }

  const savedLanguage = localStorage.getItem("seinote_landing_language") || "en";
  setLanguage(savedLanguage);

  document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
    const current = localStorage.getItem("seinote_landing_language") || "en";
    setLanguage(current === "fr" ? "en" : "fr");
  });

  const intro = document.querySelector(".intro-screen");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (intro) {
    const hideIntro = () => {
      intro.classList.add("is-hidden");
      document.body.classList.remove("intro-active");
      track("early_access_intro_complete");
    };
    window.setTimeout(hideIntro, reduceMotion ? 120 : 1450);
  }

  track("early_access_landing_view", { path: window.location.pathname });
})();
