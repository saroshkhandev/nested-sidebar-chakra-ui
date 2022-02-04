import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: FaIcons.FaHome,
    iconClosed: FaIcons.FaCaretDown,
    iconOpened: FaIcons.FaCaretUp,
    subNav: [
      {
        title: 'Recents',
        path: '/dashboard/recents',
        icon: FaIcons.FaClock,
      },
      {
        title: 'Pinned',
        path: '/dashboard/pinned',
        icon: FaIcons.FaThumbtack,
      },
    ],
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: FaIcons.FaStickyNote,
    iconClosed: FaIcons.FaCaretDown,
    iconOpened: FaIcons.FaCaretUp,
  },
  {
    title: 'Groups',
    path: '/groups',
    icon: FaIcons.FaUsers,
    iconClosed: FaIcons.FaCaretDown,
    iconOpened: FaIcons.FaCaretUp,
    subNav: [
      {
        title: 'Personal',
        path: '/groups/personal',
        icon: FaIcons.FaUserShield,
      },
      {
        title: 'Shared',
        path: '/groups/shared',
        icon: FaIcons.FaUserFriends,
      },
    ],
  },
]
