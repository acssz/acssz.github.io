import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocale } from "../context/LocaleContext.tsx";

export default function FAQ() {
	const [expanded, setExpanded] = useState<string[]>([]);
	const { locale } = useLocale();
	const { title, items } = locale.faq;

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel));
		};

	return (
		<Container
			id="faq"
			sx={{
				py: { xs: 6, sm: 10 },
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
					width: { sm: "100%", md: "60%" },
					textAlign: { sm: "left", md: "center" },
				}}
			>
				{title}
			</Typography>
			<Box sx={{ width: "100%" }}>
				{items.map((item, index) => {
					const panel = `panel${index + 1}`;
					return (
						<Accordion key={panel} expanded={expanded.includes(panel)} onChange={handleChange(panel)}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`${panel}d-content`}
								id={`${panel}d-header`}
							>
								<Typography component="span" variant="subtitle2">
									{item.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
									{item.answer}
								</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</Box>
		</Container>
	);
}
