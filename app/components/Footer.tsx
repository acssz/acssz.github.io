import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useColorScheme } from "@mui/material/styles";
import { useLocale } from "../context/LocaleContext.tsx";
import { sectionTitleSx } from "../styles/section.ts";

export default function Footer() {
	const { mode, systemMode } = useColorScheme();
	const darkMode = ((systemMode || mode) as "light" | "dark") === "dark";
	const { locale } = useLocale();

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				py: { xs: 8, sm: 10 },
				textAlign: "center",
				alignSelf: "center",
			}}
		>
			<Typography component="h2" variant="h4" sx={sectionTitleSx}>
				{locale.footer.title}
			</Typography>
			<Grid container spacing={2} direction="column" sx={{ alignSelf: "center" }}>
				<img src="media/QRcode.jpg" style={{ width: "50%", alignSelf: "center" }} />
				<Stack
					direction="row"
					spacing={1}
					useFlexGap
					sx={{ justifyContent: "center", color: "text.secondary" }}
				>
					<IconButton
						color="inherit"
						size="small"
						href="mailto:xuelian@acssz.org"
						aria-label="Email"
						sx={{ alignSelf: "center" }}
					>
						<EmailIcon />
					</IconButton>
					<IconButton
						color="inherit"
						size="small"
						href="https://space.bilibili.com/440148595"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Bilibili"
						sx={{ alignSelf: "center" }}
					>
						<img
							src={darkMode ? "icons/bilibili-w.png" : "icons/bilibili.png"}
							alt="Bilibili"
							style={{ width: "60%", height: "60%" }}
						/>
					</IconButton>
					<IconButton
						color="inherit"
						size="small"
						href="https://www.xiaohongshu.com/user/profile/5b2f291af7e8b90e5add573c?xhsshare=CopyLink&appuid=5b685daef6654c0001ea910a&apptime=1677051906"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="XiaoHongShu"
						sx={{ alignSelf: "center" }}
					>
						<img
							src={darkMode ? "icons/xiaohongshu-w.png" : "icons/xiaohongshu.png"}
							alt="XiaoHongShu"
							style={{ width: "120%", height: "120%" }}
						/>
					</IconButton>
					<IconButton
						color="inherit"
						size="small"
						href="https://www.instagram.com/acssz.ch/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						sx={{ alignSelf: "center" }}
					>
						<InstagramIcon />
					</IconButton>
				</Stack>
			</Grid>
		</Container>
	);
}
