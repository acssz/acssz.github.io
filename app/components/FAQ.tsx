import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionContainerSx, sectionTitleSx, sectionHeaderBoxSx } from "../styles/section.ts";

export default function FAQ() {
	const [expanded, setExpanded] = useState<string[]>([]);
	const { locale } = useLocale();
	const { title, items } = locale.faq;

	const handleChange =
		(panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel));
		};

	return (
		<Container id="faq" sx={sectionContainerSx}>
			<Typography component="h2" variant="h4" sx={{ ...sectionTitleSx, ...sectionHeaderBoxSx }}>
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
