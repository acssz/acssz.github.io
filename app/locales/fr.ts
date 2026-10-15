import type { Locale } from "./types.ts";

export const fr: Locale = {
	meta: {
		title: "Association des étudiants et chercheurs chinois de Zurich",
		description: "Fondée dans les années 1980, l’Association des étudiants et chercheurs chinois de Zurich (ACSSZ) est un lieu d’accueil et de partage pour les étudiants et chercheurs de la région.",
	},
	nav: {
		usefulInfo: "Guide d’accueil",
		eventNotification: "Événements",
		businessCooperation: "Partenariats",
		membershipCard: "Carte de membre numérique",
		departments: "Départements",
		aboutUs: "À propos",
		adminLogin: "Espace du comité",
		eventReview: "Événements passés",
	},
	hero: {
		slides: new Map<string, string>([
			["Diapositive 1", "media/slider_food.jpeg"],
			["Diapositive 2", "media/slider_erhu.jpeg"],
			["Diapositive 3", "media/slider_hanfu.jpg"],
			["Diapositive 4", "media/slider-china.jpg"],
			["Diapositive 5", "media/slider_music.jpg"],
		]),
	},
	events: {
		title: "Événements",
		description: "L’ACSSZ organise tout au long de l’année des événements pour renforcer les liens au sein de la communauté, favoriser les échanges culturels et accompagner le développement professionnel. Des rencontres consacrées à la recherche d’emploi aux échanges culturels, nous offrons aux étudiants et chercheurs des occasions de se rencontrer et de progresser ensemble.",
		items: [
			{
				name: "Perspectives de carrière 2025 — Recherche d’emploi et permis de travail en Suisse",
				event: "Vous cherchez un emploi en Suisse et rencontrez des difficultés ? Comment obtenir un permis de travail et rester en Suisse ? Comment améliorer votre CV et préparer efficacement vos entretiens pour mettre toutes les chances de votre côté ?",
				image: "media/Career_Insights.webp",
			},
			{
				name: "Village mondial — Célébrons la diversité culturelle",
				event: "🌏✨ Aujourd’hui, nous avons participé avec AIESEC Zurich à l’événement « Village mondial — Célébrons la diversité culturelle », organisé au Lichthof de l’Université de Zurich ! Notre équipe a partagé la culture chinoise avec enthousiasme : les visiteurs ont pu essayer des hanfu, s’initier à la calligraphie et préparer du thé aux perles 🍵✍️💫",
				image: "media/Global_Village.webp",
			},
			{
				name: "Rencontre culturelle sino-suisse 2020",
				event: "Début 2020, l’association Suisse-Chine Bridge et la Fédération des étudiants de Zurich ont organisé ensemble une rencontre culturelle sino-suisse. Les musiciens suisses Jason Huster, Anton Zemp et leurs amis y ont donné un concert.",
				image: "media/Culture_Talk.jpg",
			},
			{
				name: "Tu es mon destin | Rencontre 520",
				event: "À l’occasion du 520, venez faire des rencontres et dire adieu au célibat !",
				image: "media/Making_Friends.webp",
			},
			{
				name: "D’autres événements à venir…",
				event: "De nouveaux événements seront bientôt annoncés. Restez à l’écoute !",
				image: "favicon.ico",
			},
			{
				name: "D’autres événements à venir…",
				event: "De nouveaux événements seront bientôt annoncés. Restez à l’écoute !",
				image: "favicon.ico",
			},
		],
	},
	departments: {
		title: "Départements",
		description: "Rejoignez l’ACSSZ !",
		items: [
			{
				title: "Secrétariat",
				description: "Le secrétariat accompagne la présidence et les autres départements dans leurs missions. Il assure l’organisation des documents et des courriels ainsi que la gestion des réunions : préparation des ordres du jour, coordination et rédaction des comptes rendus ; classement et archivage des fichiers sur le stockage en ligne de l’ACSSZ ; gestion des membres de l’équipe et délivrance d’attestations ; rédaction et mise à jour du Guide d’accueil des nouveaux étudiants à Zurich ; mise en relation avec des personnes expérimentées pour des séances de partage ; organisation de séances en ligne de questions-réponses et de présentation de la vie locale pour les nouveaux étudiants.",
			},
			{
				title: "Relations publiques",
				description: "Ce département représente l’ACSSZ dans ses relations extérieures, qu’il développe et entretient, et contribue à la gestion de divers incidents. Ses principales missions comprennent l’assistance en cas d’urgence, notamment lors d’incidents de discrimination raciale, de problèmes de sécurité ou d’alertes aux escroqueries ; le développement de partenariats avec des entreprises pour obtenir des avantages et des réductions pour les étudiants, notamment auprès de Sunrise YOL, Swisscare et JC Insurance Brokers ; ainsi que le maintien du dialogue et de la coopération avec la Ville de Zurich, les associations étudiantes de l’ETH et de l’UZH, les associations d’anciens élèves, l’Association Suisse-Chine et d’autres organisations et clubs étudiants.",
			},
			{
				title: "Relations entreprises",
				description: "Ce département rapproche les étudiants et les entreprises afin d’offrir davantage de possibilités d’emploi et d’expérience pratique, tout en accompagnant les entreprises dans leur communication et leur recrutement sur les campus. Il organise des projets de coopération au sein des universités et à l’extérieur, négocie des partenariats avec des entreprises chinoises telles que Bank of China, Huawei, Xiaomi et Ctrip, ainsi qu’avec des commerces tenus par des membres de la communauté chinoise. Il organise des présentations d’entreprises et des forums de recrutement pour faire connaître le marché de l’emploi et les tendances sectorielles, et entretient des partenariats durables afin de proposer des stages et des débouchés professionnels.",
			},
			{
				title: "Culture et sport",
				description: "Ce département organise et coordonne les activités culturelles, sportives et de loisirs : spectacles, festivals culturels et expositions artistiques ; compétitions, journées sportives et activités de remise en forme ; rencontres, soirées et jeux. Il assure également la liaison avec les organisations, associations et équipes culturelles et sportives afin de partager les ressources et de développer des collaborations.",
			},
			{
				title: "Communication",
				description: "Vitrine de l’ACSSZ, ce département prend en charge la rédaction, la création visuelle, la promotion sur WeChat et la gestion des comptes sur les réseaux sociaux. Ses missions comprennent la rédaction de contenus, l’illustration, la retouche d’images, la création d’affiches et le montage vidéo ; la gestion du compte officiel WeChat et des comptes Xiaohongshu et Bilibili ; ainsi que la promotion des événements et le partage d’informations.",
			},
			{
				title: "Informatique",
				description: "Ce département assure la maintenance, l’évolution et l’assistance technique du mini-programme de carte de membre, du forum, du site web, du guide d’accueil et du stockage en ligne de l’ACSSZ. Il accompagne également les nouveaux projets : développement de l’archivage numérique et assistance technique ; réponse aux besoins quotidiens, maintenance des projets, gestion des droits d’accès et exploration de nouveaux outils ; identification des besoins et des solutions, suivi des demandes ; et organisation de rencontres de partage de connaissances techniques.",
			},
		],
	},
	manual: {
		title: "Guide d’accueil",
		subtitle: "Guide des nouveaux étudiants (édition 2025)",
	},
	about: {
		title: "À propos de nous",
		paragraphs: [
			"L’Association des étudiants et chercheurs chinois de Zurich (ACSSZ) a été fondée au milieu des années 1980. Elle représente les intérêts et les préoccupations de l’ensemble des étudiants et chercheurs chinois de Zurich. Début 2023, Zurich comptait plus de 2 000 étudiants chinois. L’année précédente, environ 400 nouveaux étudiants étaient arrivés à Zurich, un nombre en augmentation d’année en année.",
			"En 2026, l’ACSSZ compte une centaine de membres dans son équipe, répartis entre les départements de la communication, des activités, des relations entreprises, des relations publiques et de l’informatique, ainsi que le secrétariat et la présidence. Ensemble, ils assurent le fonctionnement continu de l’association.",
			"Animés par le sens des responsabilités et de notre mission, nous sommes au service des étudiants dans quatre domaines : les avantages et services aux étudiants, les échanges culturels, les activités extrascolaires et les échanges académiques.",
			"En matière de services aux étudiants, nous proposons aux étudiants chinois un guide d’accueil qui les accompagne dans toutes les étapes de leur installation, de la Chine à la Suisse. Avant le début de chaque semestre d’automne, nous organisons une rencontre d’accueil pour les nouveaux étudiants, réunissant plus de 300 personnes. Au quotidien, nous négocions également divers avantages, notamment des réductions sur les assurances Swisscare et des tarifs très avantageux pour les cartes SIM Sunrise YOL.",
			"Sur le plan culturel, nous avons organisé au cours des deux dernières années de grands événements tels que « Jardin de Chine » et « Journée de la Chine », ouverts à tous, quelles que soient la langue ou la nationalité. Ces événements permettent de découvrir la culture et la gastronomie chinoises.",
			"Chaque année, nous organisons notamment une journée sportive du Nouvel An chinois, une rencontre conviviale autour du thé pour la fête des Lanternes et un concours de chant. Ces activités sont ouvertes à tous les étudiants, et les étudiants internationaux sont également les bienvenus.",
			"Sur le plan académique, notre partenaire, le Club scientifique chinois de Zurich, organise chaque mois des conférences pour partager les connaissances et les avancées de la recherche dans différents domaines.",
		],
		imagePlaceholder: "Ajoutez votre image ici",
		team: [
			{
				name: "Présidence",
				members: [
					{ role: "Présidence", names: ["HOU Jiale"] },
					{ role: "Vice-présidence", names: ["XU Sijie", "YU Zhihe"] },
					{ role: "Secrétariat général", names: ["ZHAO Yifei"] },
					{ role: "Finances", names: ["SUN Xue"] },
					{ role: "Trésorerie", names: ["CHEN Yiyang"] },
				],
			},
			{
				name: "Secrétariat",
				members: [
					{ role: "Direction", names: ["GAO Xing"] },
					{ role: "Direction adjointe", names: [] },
				],
			},
			{
				name: "Relations publiques",
				members: [
					{ role: "Direction", names: ["JIA Weimeng"] },
					{ role: "Direction adjointe", names: ["LIU Qiao"] },
					{ role: "Conseil", names: ["QU Di"] },
				],
			},
			{
				name: "Relations entreprises",
				members: [
					{ role: "Direction", names: ["ZHANG Dingyuan"] },
					{ role: "Direction adjointe", names: ["CHEN Yuyang"] },
					{ role: "Conseil", names: ["LI Xu Wenjia"] },
				],
			},
			{
				name: "Culture et sport",
				members: [
					{ role: "Direction", names: ["JIA Chu"] },
					{ role: "Direction adjointe", names: ["LIU Runpu"] },
					{ role: "Conseil", names: ["XU Yizhen", "JIANG Wenyi"] },
				],
			},
			{
				name: "Communication",
				members: [
					{ role: "Direction", names: ["ZHANG Xindi"] },
					{ role: "Direction adjointe", names: ["HUANG Sice"] },
					{ role: "Conseil", names: ["JIANG Anyu"] },
				],
			},
			{
				name: "Informatique",
				members: [
					{ role: "Direction", names: ["LIU Zisen"] },
					{ role: "Direction adjointe", names: ["SHANG Haoliang"] },
					{ role: "Conseil", names: ["ZHANG Zhuo", "GU Jian"] },
				],
			},
		],
	},
	logoCollection: {
		title: "Nos partenaires",
	},
	footer: {
		title: "Nous contacter",
	},
};
