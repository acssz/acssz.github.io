import type { Locale } from "./types.ts";

export const en: Locale = {
  meta: {
    title: "ACSSZ",
    description:
      "Association of Chinese Students and Scholars in Zurich (ACSSZ) Founded in the 1980s, it is a caring family of local students and scholars.",
  },
  nav: {
    usefulInfo: "Useful Information",
    eventNotification: "Event Notification",
    businessCooperation: "Business Cooperation",
    membershipCard: "Membership Card",
    departments: "Departments",
    aboutUs: "About Us",
    adminLogin: "Admin Login",
    qAndA: "Q&A for Freshmen",
    eventReview: "Event Review",
  },
  hero: {
    slides: new Map<string, string>([
      ["Slide 1", "media/slider_food.jpeg"],
      ["Slide 2", "media/slider_erhu.jpeg"],
      ["Slide 3", "media/slider_hanfu.jpg"],
      ["Slide 4", "media/slider-china.jpg"],
      ["Slide 5", "media/slider_music.jpg"],
    ]),
  },
  events: {
    title: "Events",
    description:
      "ACSSZ organizes various events throughout the year to foster community engagement, cultural exchange, and professional development. From career insights to cultural talks, we aim to create a platform for students and scholars to connect and grow.",
    items: [
      {
        name: "Career Insights 2025 - Job hunting and work permit in Switzerland",
        event:
          "Are you currently job hunting in Switzerland and facing challenges? What are the key steps to securing a work permit and staying in Switzerland? How can you optimize your resume and prepare effectively for interviews to increase your chances of success?",
        image: "media/Career_Insights.webp",
      },
      {
        name: "Global Village - Embrace Diversity",
        event:
          '🌏✨ Today, we joined AIESEC Zurich at \u201cGlobal Village - Embrace Diversity\u201d at the University of Zurich, Lichthof! Our team loved sharing a bit of Chinese culture—guests got to try on Hanfu, practice calligraphy, and make bubble tea 🍵✍️💫',
        image: "media/Global_Village.webp",
      },
      {
        name: "China and Switzerland Culture Talk",
        event:
          "At the beginning of 2020, the Switzerland-China Bridge Association and the Zurich Federation of Students jointly held a Sino-Swiss cultural exchange activity. The event featured Swiss musicians Jason Huster, Anton Zemp and his friends.",
        image: "media/Culture_Talk.jpg",
      },
      {
        name: "You are My Destiny | 520 Making Friends",
        event: "520, wait for you to make friends, say goodbye to single!",
        image: "media/Making_Friends.webp",
      },
      {
        name: "More coming soon...",
        event: "More events are comings soon!",
        image: "favicon.ico",
      },
      {
        name: "More coming soon...",
        event: "More events are comings soon!",
        image: "favicon.ico",
      },
    ],
  },
  departments: {
    title: "Departments",
    description:
      "Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.",
    items: [
      {
        title: "Sport and Recreation Department",
        description:
          "As the sports department of the Students' Federation, our goal is to call on everyone to join us: Move! We spare no effort to organize rich and interesting sports competitions for you, but also provide a broad platform for you to find like-minded partners to play sports together.",
      },
      {
        title: "Technology Department",
        description:
          "The Technology Department has been recruiting students' Association app, forum, website, small program and other developers for a long time, welcome students who are enthusiastic about technology to join!",
      },
      {
        title: "Enterprise Department",
        description:
          "The enterprise department is mainly responsible for visiting enterprises, maintaining good relations with enterprises and recruiting enterprises. At the same time, we will seek sponsorship from different enterprises according to different activities.",
      },
      {
        title: "Public Relations Department",
        description:
          "Maintain internal and external public relations to better meet the work, study and life needs of Zurich students： Contacted outstanding talents in work, travel and hobbies, shared experiences online and offline for students; Compiling new student handbook; Organize Zurich Parade Group, self-defense instruction, volunteers, Dragon Boat Festival reunion and other activities.",
      },
      {
        title: "Publicity Department",
        description:
          "The window of the Zurich Student Union to the outside world. From copywriting to graphic design, from WeChat promotion to the maintenance of accounts on major social media platforms, responsible for publicity copywriting, drawing, Photoshop, poster design, video editing, etc.: Operation of the Student Union's official account, Xiaohongshu, and Bilibili accountsPromotion of various activities and information sharingTechnical work such as poster design and video editing.",
      },
      {
        title: "Secreariat",
        description:
          "The success of Student Federation activities cannot be achieved without the behind-the-scenes assistance of our secretary Department. We've never been known, but we're decathlon, we're everywhere, we know all the action.",
      },
    ],
  },
  manual: {
    title: "Useful Information",
    subtitle: "Handbook for Freshmen (2025 edition)",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What preparations do we need to make before departure?",
        answer:
          "Visa application, Luggage preparation, Domestic bank / card-related matters, Domestic mobile phone and SIM card, Flight tickets...",
      },
      {
        question: "What are the steps for finding accommodation in Zurich?",
        answer:
          "Step 1: Search for suitable accommodation through various channels, apply to view the property and submit a rental application according to the process for each channel (see below for details). Step 2: Once the landlord/agent has accepted your application, sign a rental contract with the landlord/agent. If the landlord does not accept your application, return to step 1. Step 3: Complete the handover of the property and move in.",
      },
      {
        question: "How much does it cost to live in Zurich?",
        answer:
          "Generally, monthly expenses range from 1,500 to 2,000 Swiss francs, with no upper limit: Fixed expenses: rent, insurance, telephone bills, transportation costs, etc. If you live in a student dormitory (e.g., Woko, Juwo, WFSS), rent typically ranges from 500 to 800 Swiss Francs, which is relatively affordable. If you rent through a private landlord, prices will be higher. Shared accommodation costs between 600 and 1,200 Swiss Francs per person. Renting an apartment alone in Zurich generally costs over 1,200 Swiss Francs, with better options reaching over 3,000 Swiss Francs. For insurance, you can choose the Swisscare discount exclusive to the ACSSZ, starting at 56 Swiss francs per month (for those aged 31 and under). If you are new to the area and prefer a zero-deductible plan, you can opt for the Academic Care zero-deductible package, though its costs are relatively higher (140 Swiss francs per month for those aged 25 and under, and 250 Swiss francs per month for those aged 26 and above) Phone bills typically range from 20 to 35 Swiss Francs. The ACSSZ offers an exclusive discount through Sunrise LEBARA, which is cheaper than market rates. Transportation costs usually involve purchasing an annual pass for Zone 110. For those under 25, the annual cost is 570 Swiss Francs. Those who frequently travel in the evenings can purchase the Night GA pass for 99 Swiss Francs per year, allowing unlimited travel in GA-covered areas after 7 PM. Other expenses mainly involve grocery shopping. If you cook at home most of the time, approximately 400 CHF per month for supermarket shopping is sufficient. If your time is more valuable, eating at the cafeteria or takeout shops daily averages 30–40 CHF per day. Occasional restaurant visits cost around 30–50 CHF per person. Online purchases of skincare products and clothing can cost between 50 and 200 Swiss Francs, though many students choose to buy everything in one go when they return home annually.",
      },
      {
        question: "How to join ACSSZ?",
        answer:
          "If you would like to join us, please follow our announcements at the start of each autumn semester.",
      },
    ],
  },
  logoCollection: {
    title: "Our cooperation partners",
  },
  footer: {
    title: "Contact Us",
  },
};