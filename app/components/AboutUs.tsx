import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionContainerSx, sectionTitleSx, sectionBodySx } from "../styles/section.ts";

export default function AboutUs() {
	const { locale } = useLocale();
	const { title, paragraphs, team } = locale.about;

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

			<TableContainer component={Paper} variant="outlined" sx={{ width: "100%" }}>
				<Table size="small">
					<TableBody>
						{team.map((dept, deptIndex) =>
							dept.members.map((member, memberIndex) => {
								const isFirstRowOfDept = memberIndex === 0;
								const dividerSx = isFirstRowOfDept && deptIndex > 0
									? { borderTop: "2px solid", borderColor: "divider" }
									: {};
								return (
									<TableRow key={`${dept.name}-${memberIndex}`}>
										{isFirstRowOfDept && (
											<TableCell
												rowSpan={dept.members.length}
												sx={{ fontWeight: "bold", verticalAlign: "middle", color: "text.primary", whiteSpace: "nowrap", ...dividerSx }}
											>
												{dept.name}
											</TableCell>
										)}
										<TableCell sx={{ color: "text.secondary", whiteSpace: "nowrap", ...dividerSx }}>
											{member.role}
										</TableCell>
										<TableCell sx={{ color: "text.primary", ...dividerSx }}>
											{member.names.join("　")}
										</TableCell>
									</TableRow>
								);
							})
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
