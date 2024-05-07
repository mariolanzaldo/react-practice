import SendIcon from "../public/send.svg?react";
import InboxIcon from "../public/inbox.svg?react";
import FavoriteBorderIcon from "../public/favorite.svg?react";
import DeleteIcon from "../public/trash.svg?react";
import AnalyticsIcon from "../public/analytics.svg?react";
import AddLocationAltIcon from "../public/add_location.svg?react";

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