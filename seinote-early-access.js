(function () {
  const params = new URLSearchParams(window.location.search);
  const utm = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map((key) => [key, params.get(key) || ""]));
  const clickIds = ["fbclid", "gclid", "gbraid", "wbraid"].reduce((ids, key) => {
    const value = params.get(key);
    if (value) ids[key] = value;
    return ids;
  }, {});
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
      hero_title: "Less admin. More care.",
      hero_lead: "Clinical notes, scheduling, video sessions, billing and marketing in one calmer workspace for mental health professionals.",
      hero_micro: "14 days free. Then 50% off your selected plan while your subscription remains active. Limited to 25 professionals.",
      product_small: "Session completed",
      product_strong: "Clinical note ready for review",
      product_body: "Review, edit and finalize with professional judgment.",
      note_label: "Progress note",
      note_title: "Draft summary",
      flow_schedule: "Schedule",
      flow_video: "Video",
      flow_billing: "Billing",
      problem_eyebrow: "The work after the session",
      problem_title: "Less admin after every session.",
      problem_p1: "After a session, the clinical work is not really finished. Notes need review, appointments need updating, billing may need attention, reminders have to go out and client communication still needs to stay organized.",
      problem_p2: "Seinote brings those next steps into one calmer flow, so independent clinicians can move from session to documentation, scheduling and follow-up without rebuilding the day across disconnected tools.",
      how_eyebrow: "How it works",
      how_title: "From session to note, without the second shift.",
      how_1_title: "Run the session",
      how_1_body: "Work from one web-based clinical workspace.",
      how_2_title: "Review the draft",
      how_2_body: "AI helps draft. You review, edit and approve.",
      how_3_title: "Keep the practice moving",
      how_3_body: "Notes, schedule, billing and reminders stay connected.",
      features_eyebrow: "All-in-one practice flow",
      features_title: "Everything your practice needs, closer together.",
      feature_1_title: "Clinical notes",
      feature_1_body: "Drafts ready for professional review.",
      feature_2_title: "Scheduling",
      feature_2_body: "Keep the day organized.",
      feature_3_title: "Video sessions",
      feature_3_body: "Meet clients without jumping tools.",
      feature_4_title: "Billing with Stripe",
      feature_4_body: "Keep billing close to the workflow.",
      feature_5_title: "Responsible AI support",
      feature_5_body: "Assistance for notes, not a replacement for judgment.",
      feature_6_title: "Web platform",
      feature_6_body: "Available through your browser.",
      listening_title: "Built by listening to mental health professionals.",
      listening_body: "Seinote was developed by listening to the people who understand the work best. Now, we want to continue improving it alongside 25 professionals who will use the platform in real practice and share their experience with us.",
      listening_quiet: "Technology should support care - never replace the professional behind it.",
      early_eyebrow: "Seinote Early Access",
      early_title: "Early Access for 25 professionals.",
      early_body: "Try Seinote in real practice with a simple launch offer and a direct feedback channel.",
      benefit_1_title: "14 days free",
      benefit_1_body: "Start with the Basic plan.",
      benefit_2_title: "50% off",
      benefit_2_body: "While your subscription remains active.",
      benefit_3_title: "Direct feedback",
      benefit_3_body: "Share what works and what should improve.",
      benefit_4_title: "Built for clinicians",
      benefit_4_body: "Shaped around real practice routines.",
      partner_eyebrow: "Product Partner access",
      partner_title: "A direct line to the product team.",
      partner_body: "Early Access participants will have a direct communication channel with Sarkis Curi, Seinote Product Partner, to report issues, share ideas and help us understand how Seinote performs in real clinical practice.",
      objections_eyebrow: "Questions before applying",
      objections_title: "A quieter way to try something new.",
      objection_1_title: "I do not have time.",
      objection_1_body: "That is the point: reduce the work around the work.",
      objection_2_title: "Does AI replace judgment?",
      objection_2_body: "No. AI supports drafting. You stay responsible for the final note.",
      objection_3_title: "What if my current software works?",
      objection_3_body: "You can experience Seinote during the free Early Access period and decide whether the workflow is right for your practice.",
      objection_4_title: "What about privacy?",
      objection_4_body: "Privacy and responsible data handling are core product priorities. No patient information belongs in this application form.",
      faq_eyebrow: "FAQ",
      faq_title: "Quick answers.",
      faq_1_q: "What is Seinote?",
      faq_1_a: "Seinote is a web platform for clinical notes, scheduling, video sessions and billing workflows.",
      faq_2_q: "Who is Early Access for?",
      faq_2_a: "Mental health professionals in Canada, especially independent and growing practices.",
      faq_3_q: "Is Seinote already available to use?",
      faq_3_a: "Yes. Early Access is for selected professionals to use Seinote in real practice.",
      faq_4_q: "Is there a mobile app?",
      faq_4_a: "No. Seinote is currently available as a web platform.",
      faq_5_q: "Do I need to attend meetings or give a testimonial?",
      faq_5_a: "No. Feedback is welcome, but there are no fixed meetings, testimonial requirements or image-use obligations.",
      faq_6_q: "Is there a mobile app?",
      faq_6_a: "No. Seinote is currently available as a web platform.",
      apply_eyebrow: "Apply",
      apply_title: "Apply for Early Access.",
      apply_body: "Continue to the secure Seinote signup page.",
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
      hero_title: "Moins d'administration. Plus de soins.",
      hero_lead: "Notes cliniques, horaire, séances vidéo, facturation et marketing dans un espace de travail plus calme.",
      hero_micro: "14 jours gratuits. Puis 50 % de réduction sur le forfait choisi tant que votre abonnement reste actif. Limité à 25 professionnels.",
      product_small: "Séance terminée",
      product_strong: "Note clinique prête à réviser",
      product_body: "Révisez, modifiez et finalisez avec votre jugement professionnel.",
      note_label: "Note de progrès",
      note_title: "Résumé provisoire",
      flow_schedule: "Horaire",
      flow_video: "Vidéo",
      flow_billing: "Facturation",
      problem_eyebrow: "Le travail après la séance",
      problem_title: "Moins d'administration après chaque séance.",
      problem_p1: "Après une séance, le travail clinique n'est pas vraiment terminé. Les notes doivent être révisées, les rendez-vous mis à jour, la facturation suivie, les rappels envoyés et la communication client organisée.",
      problem_p2: "Seinote rassemble ces prochaines étapes dans un flux plus calme, pour passer de la séance à la documentation, à l'horaire et au suivi sans reconstruire la journée dans plusieurs outils déconnectés.",
      how_eyebrow: "Fonctionnement",
      how_title: "De la séance à la note, sans deuxième quart.",
      how_1_title: "Menez la séance",
      how_1_body: "Travaillez dans un espace clinique web.",
      how_2_title: "Révisez le brouillon",
      how_2_body: "L'IA aide à rédiger. Vous révisez et approuvez.",
      how_3_title: "Gardez la pratique en mouvement",
      how_3_body: "Notes, horaire, facturation et rappels restent connectés.",
      features_eyebrow: "Flux de pratique tout-en-un",
      features_title: "Tout ce dont votre pratique a besoin, plus proche.",
      feature_1_title: "Notes cliniques",
      feature_1_body: "Brouillons prêts à réviser.",
      feature_2_title: "Planification",
      feature_2_body: "Gardez la journée organisée.",
      feature_3_title: "Séances vidéo",
      feature_3_body: "Rencontrez vos clients sans changer d'outil.",
      feature_4_title: "Facturation avec Stripe",
      feature_4_body: "Gardez la facturation proche du flux.",
      feature_5_title: "Soutien IA responsable",
      feature_5_body: "Une aide pour les notes, pas un remplacement du jugement.",
      feature_6_title: "Plateforme web",
      feature_6_body: "Disponible dans votre navigateur.",
      listening_title: "Construit en écoutant les professionnels de la santé mentale.",
      listening_body: "Seinote a été développé en écoutant les personnes qui comprennent le mieux ce travail. Nous voulons maintenant continuer à l'améliorer avec 25 professionnels qui utiliseront la plateforme en pratique réelle et partageront leur expérience.",
      listening_quiet: "La technologie devrait soutenir les soins - jamais remplacer le professionnel derrière eux.",
      early_eyebrow: "Accès anticipé Seinote",
      early_title: "Accès anticipé pour 25 professionnels.",
      early_body: "Essayez Seinote en pratique réelle avec une offre de lancement simple.",
      benefit_1_title: "14 jours gratuits",
      benefit_1_body: "Commencez avec le forfait Basic.",
      benefit_2_title: "50 % de réduction",
      benefit_2_body: "Tant que votre abonnement reste actif.",
      benefit_3_title: "Retour direct",
      benefit_3_body: "Partagez ce qui fonctionne et ce qui doit s'améliorer.",
      benefit_4_title: "Conçu pour les cliniciens",
      benefit_4_body: "Façonné autour des routines réelles.",
      partner_eyebrow: "Accès Product Partner",
      partner_title: "Une ligne directe avec l'équipe produit.",
      partner_body: "Les participants à l'accès anticipé auront un canal de communication direct avec Sarkis Curi, Product Partner de Seinote, pour signaler des problèmes, partager des idées et nous aider à comprendre comment Seinote fonctionne en pratique clinique réelle.",
      objections_eyebrow: "Questions avant de postuler",
      objections_title: "Une façon plus calme d'essayer autre chose.",
      objection_1_title: "Je n'ai pas le temps.",
      objection_1_body: "C'est le but: réduire le travail autour du travail.",
      objection_2_title: "L'IA remplace-t-elle le jugement?",
      objection_2_body: "Non. L'IA aide à rédiger. Vous restez responsable de la note finale.",
      objection_3_title: "Et si mon logiciel actuel fonctionne?",
      objection_3_body: "Vous pouvez essayer Seinote pendant la période gratuite d'accès anticipé et décider si ce flux convient à votre pratique.",
      objection_4_title: "Qu'en est-il de la confidentialité?",
      objection_4_body: "La confidentialité et la gestion responsable des données sont des priorités du produit. Aucune information patient ne doit figurer dans cette demande.",
      faq_eyebrow: "FAQ",
      faq_title: "Réponses rapides.",
      faq_1_q: "Qu'est-ce que Seinote?",
      faq_1_a: "Seinote est une plateforme web pour les notes cliniques, l'horaire, les séances vidéo et la facturation.",
      faq_2_q: "À qui s'adresse l'accès anticipé?",
      faq_2_a: "Aux professionnels de la santé mentale au Canada, surtout les pratiques indépendantes et en croissance.",
      faq_3_q: "Seinote est-il déjà disponible?",
      faq_3_a: "Oui. L'accès anticipé permet aux professionnels sélectionnés d'utiliser Seinote en pratique réelle.",
      faq_4_q: "Y a-t-il une application mobile?",
      faq_4_a: "Non. Seinote est actuellement disponible comme plateforme web.",
      faq_5_q: "Dois-je assister à des réunions ou donner un témoignage?",
      faq_5_a: "Non. Les commentaires sont bienvenus, mais il n'y a pas de réunions fixes, d'exigence de témoignage ou d'utilisation d'image.",
      faq_6_q: "Y a-t-il une application mobile?",
      faq_6_a: "Non. Seinote est actuellement disponible comme plateforme web.",
      apply_eyebrow: "Postuler",
      apply_title: "Demander l'accès anticipé.",
      apply_body: "Continuez vers la page sécurisée de Seinote.",
      footer_line: "Un compagnon discret pour les cliniciens.",
    },
  };

  function track(eventName, properties = {}) {
    const events = JSON.parse(sessionStorage.getItem("seinote_early_access_events") || "[]");
    const payload = { ...utm, ...clickIds, landing_variant: variant, ...properties };
    events.push({ event: eventName, properties: payload, timestamp: new Date().toISOString() });
    sessionStorage.setItem("seinote_early_access_events", JSON.stringify(events.slice(-60)));
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  }

  function persistAttribution() {
    const attribution = {};
    Object.entries({ ...utm, ...clickIds }).forEach(([key, value]) => {
      if (value) attribution[key] = value;
    });
    if (!Object.keys(attribution).length) return;
    localStorage.setItem("seinote_attribution", JSON.stringify({
      ...attribution,
      captured_at: new Date().toISOString(),
      landing_url: window.location.href,
    }));
  }

  function preserveAttributionOnSignupLinks() {
    const attribution = new URLSearchParams();
    Object.entries({ ...utm, ...clickIds }).forEach(([key, value]) => {
      if (value) attribution.set(key, value);
    });
    if (!attribution.toString()) return;
    document.querySelectorAll('a[href^="https://seinote.com/login"]').forEach((link) => {
      const url = new URL(link.href);
      attribution.forEach((value, key) => {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value);
      });
      link.href = url.toString();
    });
  }

  const GOOGLE_ADS_CONVERSION_ID = "AW-18244315052";
  const GOOGLE_ADS_CONVERSION_LABEL = "mAuXCN-CleAcEKzPyPtD";
  const GOOGLE_ADS_CONVERSION_SEND_TO = "AW-18244315052/mAuXCN-CleAcEKzPyPtD";
  const APPLY_CONVERSION_FALLBACK_MS = 1500;
  const META_PIXEL_ID = String(window.SEINOTE_META_PIXEL_ID || "").trim();

  function logAdsDiagnostic(message, detail = "") {
    if (detail) {
      console.info(`[Seinote Ads] ${message}`, detail);
      return;
    }
    console.info(`[Seinote Ads] ${message}`);
  }

  function reportApplyConversionAndRedirect(link) {
    if (!link) {
      logAdsDiagnostic("Apply conversion blocked", "missing link");
      return false;
    }
    if (link.dataset.conversionInFlight === "true") {
      logAdsDiagnostic("Apply conversion blocked", "conversion already in flight");
      return false;
    }
    link.dataset.conversionInFlight = "true";
    const destinationUrl = link.href;
    let redirected = false;
    const redirect = () => {
      if (redirected) return;
      redirected = true;
      logAdsDiagnostic("Redirecting", destinationUrl);
      window.location.href = destinationUrl;
    };

    logAdsDiagnostic("Apply clicked", destinationUrl);
    track("apply_click", { destination_url: destinationUrl });

    if (typeof window.gtag !== "function") {
      logAdsDiagnostic("gtag unavailable", "fallback redirect");
      redirect();
      return false;
    }

    logAdsDiagnostic("gtag available");
    logAdsDiagnostic("Sending conversion", GOOGLE_ADS_CONVERSION_SEND_TO);
    window.setTimeout(() => {
      logAdsDiagnostic("Conversion callback timeout", `${APPLY_CONVERSION_FALLBACK_MS}ms fallback`);
      redirect();
    }, APPLY_CONVERSION_FALLBACK_MS);
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
      value: 1.0,
      currency: "BRL",
      event_callback: () => {
        logAdsDiagnostic("Conversion callback");
        redirect();
      },
    });
    return false;
  }

  function initializeMetaPixel() {
    if (!META_PIXEL_ID) {
      console.info("[Seinote Meta] Pixel disabled: META_PIXEL_ID missing");
      return;
    }
    if (window.__seinoteMetaPageViewSent === true) return;
    if (typeof window.fbq !== "function") {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    }
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
    window.__seinoteMetaPageViewSent = true;
    console.info("[Seinote Meta] PageView sent");
  }

  window.seinoteTrackCompleteRegistration = function seinoteTrackCompleteRegistration() {
    console.warn("[Seinote Meta] CompleteRegistration blocked on landing. Fire only after real account creation in seinote.com signup.");
    return false;
  };

  window.gtag_report_conversion = function gtagReportConversion(url) {
    return reportApplyConversionAndRedirect({ href: url || "https://seinote.com/login", dataset: {} });
  };

  document.querySelectorAll("[data-track]").forEach((node) => {
    node.addEventListener("click", (event) => {
      if (node.dataset.track === "primary_cta") {
        event.preventDefault();
        event.stopImmediatePropagation();
        reportApplyConversionAndRedirect(node);
        return;
      }
      track(`early_access_${node.dataset.track}_click`, { destination_url: node.href || "" });
    }, { capture: true });
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
  initializeMetaPixel();
  setLanguage(savedLanguage);
  persistAttribution();
  preserveAttributionOnSignupLinks();

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

  track("landing_page_view", { path: window.location.pathname });
})();
