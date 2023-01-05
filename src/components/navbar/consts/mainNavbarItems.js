import React from "react";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import SensorWindowIcon from "@mui/icons-material/SensorWindow";
import AirIcon from "@mui/icons-material/Air";
export const mainNavbarItems = [
  {
    id: 0,
    icon: <WbIncandescentIcon />,
    label: "Aydınlatma Yönetimi",
    route: "light",
  },
  {
    id: 0,
    icon: <SensorDoorIcon />,
    label: "Kapı Yönetimi",
    route: "door",
  },
  {
    id: 0,
    icon: <SensorWindowIcon />,
    label: "Pencere Yönetimi",
    route: "window",
  },
  {
    id: 0,
    icon: <AirIcon />,
    label: "Klima Yönetimi",
    route: "climate",
  },
];
