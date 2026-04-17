import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TranslateIcon from "@mui/icons-material/Translate";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown.tsx";
import Icon from "./Icon.tsx";
import ExternalLinkButton from "./ExternalLinkButton.tsx";
import { ADMIN_LOGIN_URL, MEMBERSHIP_CARD_URL } from "../config.ts";
import { useLocale } from "../context/LocaleContext.tsx";
import type { LocaleKey } from "../locales/index.ts";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexShrink: 0,
	borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
	backdropFilter: "blur(24px)",
	border: "1px solid",
	borderColor: (theme.vars || theme).palette.divider,
	backgroundColor: theme.vars
		? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
		: alpha(theme.palette.background.default, 0.4),
	boxShadow: (theme.vars || theme).shadows[1],
	padding: "8px 12px",
}));

const LANGUAGE_LABELS: Record<LocaleKey, string> = { en: "EN", zh: "中文" };
const LANGUAGE_TOGGLE: Record<LocaleKey, LocaleKey> = { en: "zh", zh: "en" };

export default function AppAppBar() {
	const [open, setOpen] = React.useState(false);
	const { locale, localeKey, setLocaleKey } = useLocale();
	const nav = locale.nav;

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const toggleLanguage = () => {
		setLocaleKey(LANGUAGE_TOGGLE[localeKey]);
	};

	return (
		<AppBar
			position="fixed"
			enableColorOnDark
			sx={{
				boxShadow: 0,
				bgcolor: "transparent",
				backgroundImage: "none",
				mt: "calc(var(--template-frame-height, 0px) + 28px)",
			}}
		>
			<Container maxWidth="lg">
				<StyledToolbar variant="dense" disableGutters>
					<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
						<Icon />
						<Box sx={{ display: { xs: "none", md: "flex" } }}>
							<Button component="a" href="#information" variant="text" color="info" size="small" sx={{ textDecoration: "none" }}>
								{nav.usefulInfo}
							</Button>
							<Button component="a" href="#events" variant="text" color="info" size="small" sx={{ textDecoration: "none" }}>
								{nav.eventNotification}
							</Button>
							<Button component="a" href="#sponsors" variant="text" color="info" size="small" sx={{ textDecoration: "none" }}>
								{nav.businessCooperation}
							</Button>
							<ExternalLinkButton href={MEMBERSHIP_CARD_URL} variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
								{nav.membershipCard}
							</ExternalLinkButton>
							<Button component="a" href="#departments" variant="text" color="info" size="small" sx={{ minWidth: 0, textDecoration: "none" }}>
								{nav.departments}
							</Button>
							<Button component="a" href="#about" variant="text" color="info" size="small" sx={{ minWidth: 0, textDecoration: "none" }}>
								{nav.aboutUs}
							</Button>
						</Box>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
						<ExternalLinkButton href={ADMIN_LOGIN_URL} color="primary" variant="text" size="small">
							{nav.adminLogin}
						</ExternalLinkButton>
						<IconButton onClick={toggleLanguage} disableRipple size="small" aria-label="Toggle language">
							<TranslateIcon fontSize="small" />
						</IconButton>
						<ColorModeIconDropdown />
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
						<ColorModeIconDropdown size="medium" />
						<IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="top"
							open={open}
							onClose={toggleDrawer(false)}
							slotProps={{
								paper: {
									sx: { top: "var(--template-frame-height, 0px)" },
								},
							}}
						>
							<Box sx={{ p: 2, backgroundColor: "background.default" }}>
								<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
									<IconButton onClick={toggleDrawer(false)}>
										<CloseRoundedIcon />
									</IconButton>
								</Box>

								<MenuItem component="a" href="#information" sx={{ textDecoration: "none", color: "inherit" }}>{nav.usefulInfo}</MenuItem>
								<MenuItem>{nav.qAndA}</MenuItem>
								<MenuItem component="a" href="#events" sx={{ textDecoration: "none", color: "inherit" }}>{nav.eventNotification}</MenuItem>
								<MenuItem>{nav.eventReview}</MenuItem>
								<MenuItem component="a" href="#sponsors" sx={{ textDecoration: "none", color: "inherit" }}>{nav.businessCooperation}</MenuItem>
								<MenuItem component="a" href={MEMBERSHIP_CARD_URL} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none", color: "inherit" }}>{nav.membershipCard}</MenuItem>
								<MenuItem component="a" href="#about" sx={{ textDecoration: "none", color: "inherit" }}>{nav.aboutUs}</MenuItem>
								<Divider sx={{ my: 3 }} />
								<MenuItem>
									<Button onClick={toggleLanguage} color="info" variant="outlined" fullWidth>
										{LANGUAGE_LABELS[LANGUAGE_TOGGLE[localeKey]]}
									</Button>
								</MenuItem>
								<MenuItem>
									<ExternalLinkButton href={ADMIN_LOGIN_URL} color="primary" variant="contained" fullWidth>
										{nav.adminLogin}
									</ExternalLinkButton>
								</MenuItem>
							</Box>
						</Drawer>
					</Box>
				</StyledToolbar>
			</Container>
		</AppBar>
	);
}
