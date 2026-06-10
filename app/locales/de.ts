import type { Locale } from "./types.ts";

export const de: Locale = {
	meta: {
		title: "ACSSZ",
		description:
			"Vereinigung chinesischer Studierender und Wissenschaftler in Zürich (ACSSZ), gegründet in den 1980er Jahren – eine fürsorgende Gemeinschaft lokaler Studierender und Wissenschaftler.",
	},
	nav: {
		usefulInfo: "Nützliche Informationen",
		eventNotification: "Veranstaltungen",
		businessCooperation: "Kooperationen",
		membershipCard: "Mitgliedskarte",
		departments: "Abteilungen",
		aboutUs: "Über uns",
		adminLogin: "Admin-Login",
		eventReview: "Veranstaltungsrückblick",
	},
	hero: {
		slides: new Map<string, string>([
			["Folie 1", "media/slider_food.jpeg"],
			["Folie 2", "media/slider_erhu.jpeg"],
			["Folie 3", "media/slider_hanfu.jpg"],
			["Folie 4", "media/slider-china.jpg"],
			["Folie 5", "media/slider_music.jpg"],
		]),
	},
	events: {
		title: "Veranstaltungen",
		description:
			"Die ACSSZ organisiert das ganze Jahr über verschiedene Veranstaltungen, um das Gemeinschaftsleben, den kulturellen Austausch und die berufliche Entwicklung zu fördern. Von Karriere-Einblicken bis hin zu Kulturgesprächen – wir schaffen eine Plattform für Studierende und Wissenschaftler zum Vernetzen und Wachsen.",
		items: [
			{
				name: "Karriere-Einblicke 2025 – Jobsuche und Aufenthaltsbewilligung in der Schweiz",
				event: "Suchen Sie derzeit in der Schweiz eine Stelle und stehen vor Herausforderungen? Wie erhalten Sie eine Arbeitsbewilligung und können in der Schweiz bleiben? Wie optimieren Sie Ihren Lebenslauf und bereiten sich effektiv auf Vorstellungsgespräche vor?",
				image: "media/Career_Insights.webp",
			},
			{
				name: "Global Village – Vielfalt erleben",
				event: '🌏✨ Heute haben wir gemeinsam mit AIESEC Zürich am „Global Village – Vielfalt erleben" im Lichthof der Universität Zürich teilgenommen! Unser Team teilte chinesische Kultur – Gäste probierten Hanfu an, übten Kalligraphie und bereiteten Bubble Tea zu 🍵✍️💫',
				image: "media/Global_Village.webp",
			},
			{
				name: "Chinesisch-Schweizerischer Kulturaustausch 2020",
				event: "Anfang 2020 organisierten die Switzerland-China Bridge Association und die Zürcher Studierendenvereinigung gemeinsam einen chinesisch-schweizerischen Kulturaustausch mit den Schweizer Musikern Jason Huster, Anton Zemp und ihren Freunden.",
				image: "media/Culture_Talk.jpg",
			},
			{
				name: "You are My Destiny | 520 Kennenlernen",
				event: "Am 520 – komm und lern neue Leute kennen, verabschiede dich vom Single-Dasein!",
				image: "media/Making_Friends.webp",
			},
			{
				name: "Demnächst mehr...",
				event: "Weitere Veranstaltungen folgen in Kürze!",
				image: "favicon.ico",
			},
			{
				name: "Demnächst mehr...",
				event: "Weitere Veranstaltungen folgen in Kürze!",
				image: "favicon.ico",
			},
		],
	},
	departments: {
		title: "Abteilungen",
		description: "Willkommen bei der ACSSZ!",
		items: [
			{
				title: "Sekretariat",
				description:
					"Unterstützt das Präsidium und alle anderen Abteilungen, pflegt geordnete Datei- und E-Mail-Systeme und koordiniert Sitzungen inkl. Protokollführung, verwaltet das Cloud-Laufwerk, stellt Mitgliedschaftsnachweise aus, pflegt das Zürcher Erstsemester-Handbuch und organisiert Online-Infoveranstaltungen für Neustudierende.",
			},
			{
				title: "Abteilung für Öffentlichkeitsarbeit",
				description:
					"Vertritt die ACSSZ beim Aufbau und der Pflege externer Beziehungen. Hauptaufgaben: Unterstützung bei Notfällen (z. B. Diskriminierung, Sicherheitsvorfälle, Betrugswarnung), Aufbau von Unternehmensbeziehungen für Studentenrabatte (Partner: Sunrise YOL, Swisscare, JC Insurance Brokers u. a.) sowie Zusammenarbeit mit der Stadt Zürich, ETH/UZH-Studierendenverbänden und anderen Organisationen.",
			},
			{
				title: "Unternehmensabteilung",
				description:
					"Fördert die Verbindung zwischen Studierenden und Unternehmen. Hauptaufgaben: Organisation von Kooperationsprojekten, Verhandlungen mit chinesischen Unternehmen (z. B. Bank of China, Huawei, Xiaomi, Ctrip), Organisation von Firmenpräsentationen und Jobmessen sowie Aufbau nachhaltiger Unternehmensbeziehungen für Praktika und Beschäftigungsmöglichkeiten.",
			},
			{
				title: "Kultur- & Sportabteilung",
				description:
					"Zuständig für die Organisation von Kultur-, Sport- und Freizeitveranstaltungen, darunter Kulturaufführungen, Festivals, Kunstausstellungen, Sportwettkämpfe, Partys und Spieleabende sowie die Koordination mit verschiedenen Kultur- und Sportorganisationen.",
			},
			{
				title: "Öffentlichkeitsabteilung",
				description:
					"Das öffentliche Gesicht der ACSSZ. Von Texten bis Grafikdesign, von WeChat-Promotion bis zur Pflege von Social-Media-Kanälen – verantwortlich für den offiziellen WeChat-Account, Xiaohongshu und Bilibili, Veranstaltungspromotion sowie Poster- und Videogestaltung.",
			},
			{
				title: "IT-Abteilung",
				description:
					"Pflegt und entwickelt die ACSSZ-Mitgliedskarten-App, das Forum, die Website, das Erstsemester-Handbuch und den Cloud-Speicher. Aufgaben umfassen digitale Archivierung, technischen Support, Rechteverwaltung, Tool-Evaluierung und die Organisation von Tech-Sharing-Veranstaltungen.",
			},
		],
	},
	manual: {
		title: "Nützliche Informationen",
		subtitle: "Handbuch für Erstsemester (Ausgabe 2025)",
	},
	about: {
		title: "Über uns",
		paragraphs: [
			"Die Vereinigung chinesischer Studierender und Wissenschaftler in Zürich (ACSSZ) wurde Mitte der 1980er Jahre gegründet. Sie vertritt die Interessen aller chinesischen Studierenden und Wissenschaftler in Zürich. Anfang 2023 studierten über 2.000 chinesische Studierende in Zürich, mit rund 400 Neuzugängen pro Jahr.",
			"Derzeit (2026) zählt die ACSSZ rund 100 Mitarbeitende in der Öffentlichkeits-, Aktivitäts-, Unternehmens-, PR- und IT-Abteilung sowie im Sekretariat und Präsidium.",
			"Wir arbeiten mit Verantwortungsbewusstsein und Engagement in vier Bereichen: Studierendenwohlfahrt, Kulturaustausch, Freizeitaktivitäten und akademischer Austausch.",
			'Im Bereich Wohlfahrt bieten wir das „Erstsemester-Handbuch" als umfassenden Ratgeber für den Übergang von China in die Schweiz an. Vor jedem Herbstsemester organisieren wir eine Willkommensveranstaltung mit über 300 Teilnehmenden sowie Vorteile wie Swisscare-Versicherungsrabatte und günstige Sunrise YOL SIM-Karten.',
			'Im Bereich Kultur haben wir in den letzten zwei Jahren Großveranstaltungen wie „China Garden" und „China Day" organisiert – offen für alle, unabhängig von Sprache und Nationalität.',
			'Im Bereich Aktivitäten organisieren wir jährlich Veranstaltungen wie das „Frühlingsfest-Sportturnier", die „Laternenfest-Teeparty" und den „Sängerwettbewerb" – offen für alle Studierenden.',
			'Im akademischen Bereich organisiert unser Partner, der „Zürcher Chinesische Wissenschaftsclub", monatliche Vorträge zu Wissen und Forschung aus verschiedenen Fachgebieten.',
		],
		imagePlaceholder: "Bild hier einfügen",
		team: [
			{
				name: "Präsidium",
				members: [
					{ role: "Präsident", names: ["HOU Jiale"] },
					{ role: "Vizepräsident", names: ["XU Sijie", "YU Zhihe"] },
					{ role: "Generalsekretär", names: ["ZHAO Yifei"] },
					{ role: "Finanzen", names: ["SUN Xue"] },
					{ role: "Schatzmeister", names: ["CHEN Yiyang"] },
				],
			},
			{
				name: "Sekretariat",
				members: [
					{ role: "Leiter", names: ["GAO Xing"] },
					{ role: "Stellvertretender Leiter", names: [] },
				],
			},
			{
				name: "Öffentlichkeitsarbeit",
				members: [
					{ role: "Leiter", names: ["JIA Weimeng"] },
					{ role: "Stellvertretender Leiter", names: ["LIU Qiao"] },
					{ role: "Berater", names: ["QU Di"] },
				],
			},
			{
				name: "Unternehmen",
				members: [
					{ role: "Leiter", names: ["ZHANG Dingyuan"] },
					{ role: "Stellvertretender Leiter", names: ["CHEN Yuyang"] },
					{ role: "Berater", names: ["LI Xu Wenjia"] },
				],
			},
			{
				name: "Kultur & Sport",
				members: [
					{ role: "Leiter", names: ["JIA Chu"] },
					{ role: "Stellvertretender Leiter", names: ["LIU Runpu"] },
					{ role: "Berater", names: ["XU Yizhen", "JIANG Wenyi"] },
				],
			},
			{
				name: "Öffentlichkeit",
				members: [
					{ role: "Leiter", names: ["ZHANG Xindi"] },
					{ role: "Stellvertretender Leiter", names: ["HUANG Sice"] },
					{ role: "Berater", names: ["JIANG Anyu"] },
				],
			},
			{
				name: "IT",
				members: [
					{ role: "Leiter", names: ["LIU Zisen"] },
					{ role: "Stellvertretender Leiter", names: ["SHANG Haoliang"] },
					{ role: "Berater", names: ["ZHANG Zhuo", "GU Jian"] },
				],
			},
		],
	},
	logoCollection: {
		title: "Unsere Kooperationspartner",
	},
	footer: {
		title: "Kontakt",
	},
};