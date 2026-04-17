import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionContainerSx, sectionHeaderBoxSx, sectionTitleSx, sectionBodySx } from "../styles/section.ts";

export default function Manual() {
	const { locale } = useLocale();
	const { title, subtitle } = locale.manual;

	return (
		<Container id="Manual" sx={sectionContainerSx}>
			<Box sx={sectionHeaderBoxSx}>
				<Typography component="h2" variant="h4" gutterBottom sx={sectionTitleSx}>
					{title}
				</Typography>
				<Typography variant="body1" sx={sectionBodySx}>
					{subtitle}
				</Typography>
			</Box>
			<Card
				sx={[
					{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
					},
					(theme) => ({
						border: "none",
						background: "radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))",
						boxShadow: "0 8px 12px hsla(0, 0%, 0%, 0.8)",
						...theme.applyStyles("dark", {
							background: "radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))",
							boxShadow: "0 8px 12px hsla(220, 20%, 42%, 0.2)",
						}),
					}),
				]}
			>
				<iframe src="https://guide.acssz.org/share/glk90p035i/p/-V0cAxSyr6p" width="100%" height="600px" />
			</Card>
		</Container>
	);
}
