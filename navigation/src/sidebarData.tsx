import SendIcon from "./assets/send.svg?react";
import InboxIcon from "./assets/inbox.svg?react";
import FavoriteBorderIcon from "./assets/favorite.svg?react";
import DeleteIcon from "./assets/trash.svg?react";
import AnalyticsIcon from "./assets/analytics.svg?react";
import AddLocationAltIcon from "./assets/add_location.svg?react";
import Square from "./assets/square.svg?react";

export const sidebarData = [
    {
        label: "Mail",
        items: [
            {
                id: 1,
                title: 'Inbox',
                icon: <InboxIcon />,
                link: "/inbox",
                badge: 14,
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
                link: '/label2',
                items: [
                    {
                        id: 7,
                        title: 'Level 2',
                        icon: < Square/>,
                        link: '/level2',

                    }
                ],
            }
        ]
    }
]