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
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown.tsx";
import Icon from "./Icon.tsx";
import { ADMIN_LOGIN_URL } from "../config.ts";

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

export default function AppAppBar() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
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
								Useful Information
							</Button>
							<Button component="a" href="#events" variant="text" color="info" size="small" sx={{ textDecoration: "none" }}>
								Event Notification
							</Button>
							<Button component="a" href="#sponsors" variant="text" color="info" size="small" sx={{ textDecoration: "none" }}>
								Business Cooperation
							</Button>
							<Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
								Membership Card
							</Button>
							<Button component="a" href="#departments" variant="text" color="info" size="small" sx={{ minWidth: 0, textDecoration: "none" }}>
								Departments
							</Button>
							<Button component="a" href="#footer" variant="text" color="info" size="small" sx={{ minWidth: 0, textDecoration: "none" }}>
								About Us
							</Button>
						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							gap: 1,
							alignItems: "center",
						}}
					>
						<Button component="a" href={ADMIN_LOGIN_URL} color="primary" variant="text" size="small">
							Admin Login
						</Button>
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
							PaperProps={{
								sx: {
									top: "var(--template-frame-height, 0px)",
								},
							}}
						>
							<Box sx={{ p: 2, backgroundColor: "background.default" }}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-end",
									}}
								>
									<IconButton onClick={toggleDrawer(false)}>
										<CloseRoundedIcon />
									</IconButton>
								</Box>

								<MenuItem component="a" href="#information" sx={{ textDecoration: "none", color: "inherit" }}>Useful Information</MenuItem>
								<MenuItem>Q&A for Freshmen</MenuItem>
								<MenuItem component="a" href="#events" sx={{ textDecoration: "none", color: "inherit" }}>Event Notification</MenuItem>
								<MenuItem>Event Review</MenuItem>
								<MenuItem component="a" href="#sponsors" sx={{ textDecoration: "none", color: "inherit" }}>Business Cooperation</MenuItem>
								<MenuItem>Membership Card</MenuItem>
								<MenuItem component="a" href="#footer" sx={{ textDecoration: "none", color: "inherit" }}>About Us</MenuItem>
								<Divider sx={{ my: 3 }} />
								<MenuItem>
									<Button component="a" href={ADMIN_LOGIN_URL} color="primary" variant="contained" fullWidth sx={{ textDecoration: "none" }}>
										Admin Login
									</Button>
								</MenuItem>
							</Box>
						</Drawer>
					</Box>
				</StyledToolbar>
			</Container>
		</AppBar>
	);
}
