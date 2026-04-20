import { useColorScheme } from "@mui/material/styles";

function WhiteIcon() {
	return <img src={"/media/icon_white.png"} alt={"acssz icon"} height={28} />;
}

function BlackIcon() {
	return <img src={"/media/icon_black.png"} alt={"acssz icon"} height={28} />;
}

export default function Icon() {
	const { mode, systemMode } = useColorScheme();
	const darkMode = ((systemMode || mode) as "light" | "dark") === "dark";
	return darkMode ? <WhiteIcon /> : <BlackIcon />;
}
