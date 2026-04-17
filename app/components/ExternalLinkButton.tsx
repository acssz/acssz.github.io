import Button, { type ButtonProps } from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type ExternalLinkButtonProps = Omit<ButtonProps<"a">, "component" | "target" | "rel"> & {
	href: string;
};

export default function ExternalLinkButton({ children, sx, ...props }: ExternalLinkButtonProps) {
	return (
		<Button
			component="a"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
			sx={{ textDecoration: "none", gap: 0.5, ...sx }}
		>
			{children}
			<OpenInNewIcon sx={{ fontSize: "0.85em" }} />
		</Button>
	);
}