import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionContainerSx, sectionHeaderBoxSx, sectionTitleSx, sectionBodySx } from "../styles/section.ts";

const eventImageStyle: React.CSSProperties = {
	objectFit: "cover",
	width: "80px",
	height: "80px",
	borderRadius: "50%",
	margin: "0 20px 20px 0",
};

export default function Events() {
	const { locale } = useLocale();
	const { title, description, items } = locale.events;

	return (
		<Container id="events" sx={sectionContainerSx}>
			<Box sx={sectionHeaderBoxSx}>
				<Typography component="h2" variant="h4" gutterBottom sx={sectionTitleSx}>
					{title}
				</Typography>
				<Typography variant="body1" sx={sectionBodySx}>
					{description}
				</Typography>
			</Box>
			<Grid container spacing={2}>
				{items.map((event, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: "flex" }}>
						<Card
							variant="outlined"
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								flexGrow: 1,
							}}
						>
							<CardContent>
								<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
									<img
										src={event.image}
										alt={`Event image ${index + 1}`}
										style={eventImageStyle}
									/>
									<Typography variant="h6" gutterBottom sx={sectionBodySx}>
										{event.name}
									</Typography>
								</Box>
								<Typography variant="body1" gutterBottom sx={sectionBodySx}>
									{event.event}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
