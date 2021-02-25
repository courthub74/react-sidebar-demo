import React from 'react'
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [

    {
        title: 'Courdevs Oracle',
    },

    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]

    },

    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: '1st Report',
                path: '/reports/report1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: '2nd Report',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]

    },

    {
        title: 'To Do Lists',
        path: '/todo',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: '1st Todo',
                path: '/todo/todo1',
                icon: <IoIcons.IoIosList />,
            },
            {
                title: '2nd Todo',
                path: '/todo/todo2',
                icon: <IoIcons.IoIosList />,
            },
        ]

    }
]