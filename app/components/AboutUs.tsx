import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionContainerSx, sectionTitleSx, sectionBodySx } from "../styles/section.ts";

export default function AboutUs() {
	const { locale } = useLocale();
	const { title, paragraphs } = locale.about;

	return (
		<Container id="about" sx={sectionContainerSx}>
			<Typography component="h2" variant="h4" sx={{ ...sectionTitleSx, width: "100%", textAlign: { sm: "left", md: "center" } }}>
				{title}
			</Typography>
			<Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
				{paragraphs.map((paragraph, index) => (
					<Typography key={index} variant="body1" sx={sectionBodySx}>
						{paragraph}
					</Typography>
				))}
			</Box>
			<Box
				component="img"
				src="media/ACSSZ.jpg"
				alt={title}
				sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
			/>
		</Container>
	);
}
