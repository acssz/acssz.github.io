import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useLocale } from "../context/LocaleContext.tsx";

export default function Events() {
	const { locale } = useLocale();
	const { title, description, items } = locale.events;

	return (
		<Container
			id="events"
			sx={{
				py: { xs: 6, sm: 10 },
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
				<Typography component="h2" variant="h4" gutterBottom sx={{ color: "text.primary" }}>
					{title}
				</Typography>
				<Typography variant="body1" sx={{ color: "text.secondary" }}>
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
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<img
										src={event.image}
										alt={`Event image ${index + 1}`}
										style={{
											objectFit: "cover",
											width: "80px",
											height: "80px",
											borderRadius: "50%",
											margin: "0 20px 20px 0",
										}}
									/>
									<Typography variant="h6" gutterBottom sx={{ color: "text.secondary" }}>
										{event.name}
									</Typography>
								</Box>
								<Typography variant="body1" gutterBottom sx={{ color: "text.secondary" }}>
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