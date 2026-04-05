import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import WorkIcon from "@mui/icons-material/Work";
import { useLocale } from "../context/LocaleContext.tsx";

const ICONS = [
	<SportsBasketballIcon />,
	<ConstructionRoundedIcon />,
	<WorkIcon />,
	<SupportAgentRoundedIcon />,
	<AutoFixHighRoundedIcon />,
	<QueryStatsRoundedIcon />,
];

export default function Departments() {
	const { locale } = useLocale();
	const { title, description, items } = locale.departments;

	return (
		<Box
			id="highlights"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 0, sm: 0 },
				color: "white",
				bgcolor: "grey.900",
			}}
		>
			<Container
				sx={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: { xs: 3, sm: 6 },
				}}
			>
				<Box
					sx={{
						width: { sm: "100%", md: "60%" },
						textAlign: { sm: "left", md: "center" },
					}}
				>
					<Typography component="h2" variant="h4" gutterBottom>
						{title}
					</Typography>
					<Typography variant="body1" sx={{ color: "grey.400" }}>
						{description}
					</Typography>
				</Box>
				<Grid container spacing={2}>
					{items.map((item, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
							<Stack
								direction="column"
								component={Card}
								spacing={1}
								useFlexGap
								sx={{
									color: "inherit",
									p: 3,
									height: "100%",
									borderColor: "hsla(220, 25%, 25%, 0.3)",
									backgroundColor: "grey.800",
								}}
							>
								<Box sx={{ opacity: "50%" }}>{ICONS[index]}</Box>
								<div>
									<Typography gutterBottom sx={{ fontWeight: "medium" }}>
										{item.title}
									</Typography>
									<Typography variant="body2" sx={{ color: "grey.400" }}>
										{item.description}
									</Typography>
								</div>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}