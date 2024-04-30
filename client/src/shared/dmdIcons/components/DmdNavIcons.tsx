import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, blue } from "@mui/material/colors";
import { borders } from "@mui/system";
import {
  Home,
  ManageAccounts,
  Favorite,
  Notifications,
  Forum,
  AccountBox,
  Info,
  Pets,
} from "@mui/icons-material";

interface DmdNavIconsProps {
  source:
    | "Home"
    | "ManageAccounts"
    | "Favorite"
    | "Notifications"
    | "Forum"
    | "AccountBox"
    | "Info"
    | "Pets";
  themeType: "rounded" | "filled" | "outlined";
}

const DmdNavIcons: React.FC<DmdNavIconsProps> = ({
  source,
  themeType,
  ...rest
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Home: Home,
    ManageAccounts: ManageAccounts,
    Favorite: Favorite,
    Notifications: Notifications,
    Forum: Forum,
    AccountBox: AccountBox,
    Info: Info,
    Pets: Pets,
  };

  const IconComponent = iconMap[source];

  let iconTheme = createTheme();

  // Define default styles for MuiSvgIcon
  const defaultIconStyles = {
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            borderRadius: "50%",
          },
        },
      },
    },
    palette: {
      primary: {
        light: "#757ce8",
        main: "#2C7B62",
        dark: "#002884",
      },
      secondary: {
        light: "#ff7961",
        main: "#ffffff",
        dark: "#ba000d",
      },
    },
  };

  // Apply default theme
  iconTheme = createTheme({
    ...defaultIconStyles,
  });

  switch (themeType) {
    case "rounded":
      iconTheme = createTheme({
        ...defaultIconStyles,
        components: {
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                borderRadius: "50%",
                stroke: "white", // Outline color
              },
            },
          },
        },
      });
      break;
    case "filled":
      iconTheme = createTheme({
        ...defaultIconStyles,
        palette: {
          primary: {
            main: "#FFFFFF",
          },
        },
      });
      break;
    case "outlined":
      iconTheme = createTheme({
        ...defaultIconStyles,
        components: {
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                stroke: "white", // Outline color
                strokeWidth: 1, // Outline thickness
              },
            },
          },
        },
      });
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={iconTheme}>
      {IconComponent && <IconComponent color="primary" {...rest} />}
    </ThemeProvider>
  );
};

export default DmdNavIcons;
