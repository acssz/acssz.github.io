import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import { useLocale } from "../context/LocaleContext.tsx";

export default function AboutUs() {
	const { locale } = useLocale();
	const { title, paragraphs, imagePlaceholder } = locale.about;

	return (
		<Container
			id="about"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 4, sm: 12 },
				position: "relative",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 3, sm: 6 },
			}}
		>
			<Typography
				component="h2"
				variant="h4"
				sx={{
					color: "text.primary",
					width: "100%",
					textAlign: { sm: "left", md: "center" },
				}}
			>
				{title}
			</Typography>
			<Grid container spacing={6} alignItems="flex-start">
				<Grid size={{ xs: 12, md: 7 }}>
					{paragraphs.map((paragraph, index) => (
						<Typography
							key={index}
							variant="body1"
							sx={{ color: "text.secondary", mb: index < paragraphs.length - 1 ? 2 : 0 }}
						>
							{paragraph}
						</Typography>
					))}
				</Grid>
				<Grid size={{ xs: 12, md: 5 }}>
					<Box
						sx={{
							width: "100%",
							aspectRatio: "4 / 3",
							border: "2px dashed",
							borderColor: "divider",
							borderRadius: 2,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: 1,
							color: "text.disabled",
							bgcolor: "action.hover",
						}}
					>
						<ImageIcon sx={{ fontSize: 48 }} />
						<Typography variant="body2">{imagePlaceholder}</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
