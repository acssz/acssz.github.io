import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function Copyright() {
	return (
		<Box sx={{ py: 2, textAlign: "center" }}>
			<Typography variant="body2" sx={{ color: "text.secondary" }}>
				{"© ACSSZ 2026 — Licensed under "}
				<Link
					href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
					target="_blank"
					rel="noopener noreferrer"
					color="inherit"
				>
					CC BY-NC-ND 4.0
				</Link>
			</Typography>
		</Box>
	);
}
