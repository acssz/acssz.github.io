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
				event: "Are you currently job hunting in Switzerland and facing challenges? What are the key steps to securing a work permit and staying in Switzerland? How can you optimize your resume and prepare effectively for interviews to increase your chances of success?",
				image: "media/Career_Insights.webp",
			},
			{
				name: "Global Village - Embrace Diversity",
				event: "🌏✨ Today, we joined AIESEC Zurich at \u201cGlobal Village - Embrace Diversity\u201d at the University of Zurich, Lichthof! Our team loved sharing a bit of Chinese culture—guests got to try on Hanfu, practice calligraphy, and make bubble tea 🍵✍️💫",
				image: "media/Global_Village.webp",
			},
			{
				name: "China and Switzerland Culture Talk",
				event: "At the beginning of 2020, the Switzerland-China Bridge Association and the Zurich Federation of Students jointly held a Sino-Swiss cultural exchange activity. The event featured Swiss musicians Jason Huster, Anton Zemp and his friends.",
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
		description: "You are welcome to join ACSSZ!",
		items: [
			{
				title: "Secretariat",
				description:
					"Supports the presidium and all other departments in their work, maintaining organized file and email systems and handling meeting administration. This includes coordinating meetings and writing minutes, managing and archiving files on the ACSSZ cloud drive, handling membership management and certificate issuance, writing and maintaining the Zurich Freshmen Handbook, connecting domain experts with students for experience-sharing sessions, and hosting online Q&A and life orientation sessions for new students.",
			},
			{
				title: "Public Relations Department",
				description:
					"Represents ACSSZ in building, maintaining, and strengthening external relationships, and assists with various incidents. Key work includes actively assisting in emergencies (e.g. racial discrimination, safety incidents, fraud alerts); building corporate relationships to secure student benefits and discounts (partners: Sunrise YOL, Swisscare, JC Insurance Brokers, etc.); and maintaining collaboration with Zurich city government, ETH/UZH student unions, alumni associations, the Swiss-Chinese Association, other student organizations, and various clubs.",
			},
			{
				title: "Enterprise Department",
				description:
					"Bridges students and companies to provide more career opportunities and practical experience, while supporting companies with campus branding and recruitment. Key responsibilities include organizing on- and off-campus corporate collaboration projects, negotiating partnerships with Chinese enterprises (e.g. Bank of China, Huawei, Xiaomi, Ctrip) and Chinese-owned businesses, organizing company presentations and job fairs, and building lasting corporate relationships to offer internships and employment channels.",
			},
			{
				title: "Culture & Sports Department",
				description:
					"Responsible for organizing and managing activities related to culture, sports, and entertainment, including: planning cultural events such as performances, cultural festivals, and art exhibitions; organizing sports competitions, athletic meets, and fitness activities; planning social gatherings, parties, and games; and coordinating with various cultural and sports organizations to enable resource sharing and collaboration.",
			},
			{
				title: "Publicity Department",
				description:
					"The public-facing window of ACSSZ. From copywriting to graphic design, from WeChat promotion to managing accounts across major social platforms — responsible for content writing, illustration, poster design, and video editing: operating the official WeChat account, Xiaohongshu, and Bilibili; promoting events and sharing information; and technical work such as poster design and video editing.",
			},
			{
				title: "IT Department",
				description:
					"Maintains, upgrades, and provides technical support for the ACSSZ membership card mini-program, forum, website, freshmen handbook, and cloud storage, as well as support for new projects. This includes promoting digital archiving, responding to daily technical needs, managing permissions, exploring new tools, maintaining a requirements list, and hosting tech sharing sessions.",
			},
		],
	},
	manual: {
		title: "Useful Information",
		subtitle: "Handbook for Freshmen (2025 edition)",
	},
	about: {
		title: "About Us",
		paragraphs: [
			"The Association of Chinese Students and Scholars in Zurich (ACSSZ) was established in the mid-1980s. The association represents the interests and concerns of all Chinese students and scholars in Zurich. As of early 2023, there are more than 2,000 Chinese students in Zurich. Last year, approximately 400 new students arrived in Zurich, and this number continues to grow year by year.",
			"Currently (2026), ACSSZ has around 100 staff members distributed across the Publicity Department, Activities Department, Enterprise Department, Public Relations Department, Information Department, as well as the Secretariat and the Presidium, driving the continuous operation of the association.",
			"We work and serve our fellow students in four key areas — student welfare, cultural exchange, extracurricular activities, and academic exchange — with a sense of responsibility and mission.",
			'In terms of welfare, we provide Chinese students with the "Freshmen Handbook," which offers a comprehensive guide from China to Switzerland. Before the start of each autumn semester, we organize a "Welcome Ceremony" for all new students, with more than 300 participants. In our daily work, we also secure and provide various benefits such as Swisscare insurance discounts, Sunrise YOL SIM card at the lowest price, and more.',
			'In terms of culture, over the past two years we have organized large-scale events such as "China Garden" and "China Day," welcoming everyone regardless of language or nationality. These cultural events offer opportunities for people to enjoy Chinese culture and cuisine.',
			'In terms of activities, we organize events every year such as the "Spring Festival Sports Day," "Lantern Festival Tea Party," and "Singer Competition." These events are open to all students, and international students are also welcome to join.',
			'In terms of academics, our partner "Zurich Chinese Science Club" organizes monthly lectures to share knowledge and research progress from various fields.',
		],
		imagePlaceholder: "Add your image here",
		team: [
			{
				name: "Presidium",
				members: [
					{ role: "President", names: ["HOU Jiale"] },
					{ role: "Vice President", names: ["XU Sijie", "YU Zhihe"] },
					{ role: "Secretary General", names: ["ZHAO Yifei"] },
					{ role: "Finance", names: ["SUN Xue"] },
					{ role: "Treasurer", names: ["CHEN Yiyang"] },
				],
			},
			{
				name: "Secretariat",
				members: [
					{ role: "Director", names: ["GAO Xing"] },
					{ role: "Deputy Director", names: [] },
				],
			},
			{
				name: "Public Relations",
				members: [
					{ role: "Director", names: ["JIA Weimeng"] },
					{ role: "Deputy Director", names: ["LIU Qiao"] },
					{ role: "Advisor", names: ["QU Di"] },
				],
			},
			{
				name: "Enterprise",
				members: [
					{ role: "Director", names: ["ZHANG Dingyuan"] },
					{ role: "Deputy Director", names: ["CHEN Yuyang"] },
					{ role: "Advisor", names: ["LI Xu Wenjia"] },
				],
			},
			{
				name: "Culture & Sports",
				members: [
					{ role: "Director", names: ["JIA Chu"] },
					{ role: "Deputy Director", names: ["LIU Runpu"] },
					{ role: "Advisor", names: ["XU Yizhen", "JIANG Wenyi"] },
				],
			},
			{
				name: "Publicity",
				members: [
					{ role: "Director", names: ["ZHANG Xindi"] },
					{ role: "Deputy Director", names: ["HUANG Sice"] },
					{ role: "Advisor", names: ["JIANG Anyu"] },
				],
			},
			{
				name: "IT",
				members: [
					{ role: "Director", names: ["LIU Zisen"] },
					{ role: "Deputy Director", names: ["SHANG Haoliang"] },
					{ role: "Advisor", names: ["ZHANG Zhuo", "GU Jian"] },
				],
			},
		],
	},
	logoCollection: {
		title: "Our Cooperation Partners",
	},
	footer: {
		title: "Contact Us",
	},
};
