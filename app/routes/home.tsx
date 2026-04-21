import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import AppTheme from "../shared-theme/AppTheme.tsx";
import AppAppBar from "../components/AppBar.tsx";
import Hero from "../components/Hero";
import LogoCollection from "../components/LogoCollection";
import Departments from "../components/Departments";
import Manual from "../components/Manual";
import Events from "../components/Events";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { LocaleProvider } from "../context/LocaleContext.tsx";
import "../css/base.css";
import "../css/embla.css";

export function meta() {
	return [
		{ title: "ACSSZ" },
		{
			name: "ACSSZ",
			content:
				"Association of Chinese Students and Scholars in Zurich (ACSSZ) Founded in the 1980s, it is a caring family of local students and scholars.",
		},
	];
}

export default function Home(props: { disableCustomTheme?: boolean } = { disableCustomTheme: true }) {
	return (
		<LocaleProvider>
			<AppTheme {...props}>
				<CssBaseline enableColorScheme />
				<AppAppBar />
				<Hero />
				<div>
					<section id="events">
						<Events />
					</section>
					<section id="sponsors">
						<LogoCollection />
					</section>
					<section id="departments">
						<Departments />
					</section>
					<section id="information">
						<Manual />
					</section>
<section id="about">
						<AboutUs />
					</section>
					<Divider />
					<footer id="footer">
						<Footer />
					</footer>
					<Divider />
					<Copyright />
				</div>
			</AppTheme>
		</LocaleProvider>
	);
}
