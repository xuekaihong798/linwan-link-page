export type SocialId = "xiaohongshu" | "instagram" | "x" | "weibo" | "bilibili" | "mail";

export type ProfileLink = {
  id: string;
  index: string;
  title: string;
  note: string;
  href: string;
  featured?: boolean;
};

export const profile = {
  name: "林晚",
  latin: "LIN WAN",
  role: "生活 · 影像",
  bio: "记录日常的光。偶尔拍一点城市，和身边的人。",
};

export const links: ProfileLink[] = [
  {
    id: "xhs",
    index: "01",
    title: "小红书",
    note: "每天更新的小事",
    href: "https://www.xiaohongshu.com",
    featured: true,
  },
  {
    id: "video",
    index: "02",
    title: "最新视频",
    note: "最近拍的一条",
    href: "https://www.bilibili.com",
  },
  {
    id: "walk",
    index: "03",
    title: "城市散步",
    note: "路过的店和光",
    href: "https://www.xiaohongshu.com/explore",
  },
  {
    id: "photos",
    index: "04",
    title: "图集",
    note: "这一季的照片",
    href: "https://www.instagram.com",
  },
  {
    id: "work",
    index: "05",
    title: "合作",
    note: "品牌邀约请看这里",
    href: "mailto:studio@example.com",
  },
];

export const socials: { id: SocialId; label: string; href: string }[] = [
  { id: "xiaohongshu", label: "小红书", href: "https://www.xiaohongshu.com" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { id: "x", label: "X", href: "https://x.com" },
  { id: "weibo", label: "微博", href: "https://weibo.com" },
  { id: "bilibili", label: "哔哩哔哩", href: "https://www.bilibili.com" },
  { id: "mail", label: "邮件", href: "mailto:studio@example.com" },
];
