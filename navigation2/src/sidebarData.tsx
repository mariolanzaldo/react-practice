import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InboxIcon from '@mui/icons-material/Inbox';
import DeleteIcon from '@mui/icons-material/Delete';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export const sidebarData = [
    {
        label: "Mail",
        items: [
            {
                id: 1,
                title: 'Inbox',
                icon: <InboxIcon />,
                link: "/inbox",
            }, 
            {
                id: 2,
                title: 'Outbox',
                icon: <SendIcon />,
                link: "/outbox",
            }, 
            {
                id: 3,
                title: 'Favorites',
                icon: <FavoriteBorderIcon />,
                link: "/favorites",
            },
            {
                id: 4,
                title: 'Trash',
                icon: <DeleteIcon />,
                link: "/trash",
            }
        ]
    },
    {
        label: "Labels",
        items: [
            {
                id: 5,
                title: 'Label 1',
                icon: <AnalyticsIcon />,
                link: "/label1",
            },
            {
                id: 6,
                title: 'Label 2',
                icon: <AddLocationAltIcon />,
                link: '/label2'
            }
        ]
    }
]