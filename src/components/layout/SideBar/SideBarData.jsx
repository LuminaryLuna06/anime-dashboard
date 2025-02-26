import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
export const SideBarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin",
    active: true,
  },
  {
    title: "Users",
    icon: <PersonIcon />,
    link: "/admin/users",
  },
  {
    title: "Clubs",
    icon: <GroupIcon />,
    link: "/admin/clubs",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/admin/settings",
  },
];
