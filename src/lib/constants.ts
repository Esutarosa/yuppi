import { CiUser, CiSettings, CiGrid42, CiImageOn, CiGrid31, CiHeart, CiChat2 } from "react-icons/ci"

export const NAVBAR_LINKS: { title: string; data: { path: string; key: string; title: string; icon?: React.ComponentType<any>; }[] }[] = [
  {
    title: 'Profile',
    data: [
      { path: '/profile', key: 'profile', title: 'My Profile', icon: CiUser },
      { path: '/account/edit', key: 'edit-profile', title: 'Settings', icon: CiSettings },
    ]
  },
  {
    title: 'General',
    data: [
      { path: '/illustrations', key: 'illustrations', title: 'Illustrations', icon: CiImageOn },
      { path: '/manga', key: 'manga', title: 'Manga', icon: CiGrid42 },
      { path: '/novels', key: 'novels', title: 'Novels', icon: CiGrid31 },
    ]
  },
  {
    title: 'Other',
    data: [
      { path: '/forum', key: 'forum', title: 'Forum', icon: CiChat2 },
      { path: '/support', key: 'support', title: 'Support', icon: CiHeart },
    ]
  },
]