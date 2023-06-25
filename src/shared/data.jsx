import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';

export const SidebarItems = [
    {
        id:1,
        name: "Inicio",
        icon: <HomeIcon />,
        location:"/home"
    },
]

export const SidebarItemsTransportist = [
    {
        id:1,
        name: "Inicio",
        icon: <HomeIcon />,
        location:"/home"
    },
    {
        id:2,
        name: "Viajes",
        icon: <PlaceIcon />,
        location:"/travels"
    },
    {
        id:3,
        name:"Agenda",
        icon: <CalendarTodayIcon/>,
        location:"/schedule"
    },
]