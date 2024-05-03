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
                title: 'Inbox',
                icon: <InboxIcon />,
                link: "/inbox",
            }, 
            {
                title: 'Outbox',
                icon: <SendIcon />,
                link: "/outbox",
            }, 
            {
                title: 'Favorites',
                icon: <FavoriteBorderIcon />,
                link: "/favorites",
            },
            {
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
                title: 'Label 1',
                icon: <AnalyticsIcon />,
                link: "/label1",
            },
            {
                title: 'Label 2',
                icon: <AddLocationAltIcon />,
                link: '/label2'
            }
        ]
    }
]