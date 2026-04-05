import type { SxProps, Theme } from "@mui/material/styles";

/** Shared vertical padding for every page section. */
export const sectionPySx: SxProps<Theme> = {
	py: { xs: 6, sm: 10 },
};

/** Full section container: padding + centred flex column. */
export const sectionContainerSx: SxProps<Theme> = {
	...sectionPySx,
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: { xs: 3, sm: 6 },
};

/** Narrow centred box used to hold a section title + subtitle. */
export const sectionHeaderBoxSx: SxProps<Theme> = {
	width: { sm: "100%", md: "60%" },
	textAlign: { sm: "left", md: "center" },
};

/** Primary colour for every section heading. */
export const sectionTitleSx: SxProps<Theme> = {
	color: "text.primary",
};

/** Muted colour for section subtitles and body copy. */
export const sectionBodySx: SxProps<Theme> = {
	color: "text.secondary",
};
