import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionPySx, sectionTitleSx } from "../styles/section.ts";

const logos = [
	"partners/1.png",
	"partners/2.jpg",
	"partners/3.jpeg",
	"partners/4.jpeg",
	"partners/5.png",
	"partners/6.jpg",
];

const logoPillSx = [
	{
		bgcolor: "white",
		borderRadius: 2,
		px: 3,
		py: 2,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
	},
	(theme: any) => theme.applyStyles("dark", {
		boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
	}),
];

export default function LogoCollection() {
	const { locale } = useLocale();

	return (
		<Box id="logoCollection" sx={sectionPySx}>
			<Typography
				component="h2"
				variant="h4"
				align="center"
				sx={{ ...sectionTitleSx, mb: { xs: 4, sm: 6 } }}
			>
				{locale.logoCollection.title}
			</Typography>
			<Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3} sx={{ px: { xs: 2, sm: 6 } }}>
				{logos.map((logo, index) => (
					<Box key={index} sx={logoPillSx}>
						<img src={logo} alt="partner" style={{ height: "40px", maxWidth: "120px", objectFit: "contain" }} />
					</Box>
				))}
			</Stack>
		</Box>
	);
}
