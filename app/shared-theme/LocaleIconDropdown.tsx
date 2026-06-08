import * as React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import IconButton, { IconButtonOwnProps } from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocale } from "../context/LocaleContext.tsx";
import type { LocaleKey } from "../locales/index.ts";

export default function LocaleIconDropdown(props: IconButtonOwnProps) {
    const {localeKey, setLocaleKey} = useLocale();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLocale = (targetMode: LocaleKey) => () => {
        setLocaleKey(targetMode);
        handleClose();
    };
    return (
        <React.Fragment>
            <IconButton
                data-screenshot="toggle-mode"
                onClick={handleClick}
                disableRipple
                size="small"
                aria-controls={open ? "color-scheme-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                {...props}
            >
                <TranslateIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        variant: "outlined",
                        elevation: 0,
                        sx: {
                            my: "4px",
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem selected={localeKey === "zh"} onClick={handleLocale("zh")}>
                    中文
                </MenuItem>
                <MenuItem selected={localeKey === "en"} onClick={handleLocale("en")}>
                    English
                </MenuItem>
                <MenuItem selected={localeKey === "de"} onClick={handleLocale("de")}>
                    Deutsch
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}