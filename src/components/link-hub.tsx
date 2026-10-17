import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { links, profile, socials } from "@/data/profile";
import { SocialIcon } from "@/components/social-icons";

const THEME_KEY = "linwan-theme";

function toggleTheme() {
  const root = document.documentElement;
  const nextDark = !root.classList.contains("dark");
  root.classList.toggle("dark", nextDark);
  localStorage.setItem(THEME_KEY, nextDark ? "dark" : "light");
}

function ThemeToggle() {
  return (
    <button type="button" className="theme-toggle" aria-label="切换浅色或深色主题" onClick={toggleTheme}>
      <span className="theme-icon theme-icon-sun">
        <Sun className="size-5" strokeWidth={1.75} />
      </span>
      <span className="theme-icon theme-icon-moon">
        <Moon className="size-5" strokeWidth={1.75} />
      </span>
    </button>
  );
}

export function LinkHub() {
  return (
    <>
      <p className="side-mark" aria-hidden="true">
        {profile.name}
      </p>
      <main className="page">
        <ThemeToggle />

        <div className="avatar-wrap rise d1">
          <div className="avatar-frame">
            <img className="avatar-img" src="/avatar.jpg" alt="林晚的头像" width={1500} height={1500} />
          </div>
        </div>

        <p className="latin rise d2">{profile.latin}</p>
        <h1 className="name rise d3">{profile.name}</h1>
        <p className="role rise d4">{profile.role}</p>
        <p className="bio rise d5">{profile.bio}</p>

        <nav className="social-row rise d6" aria-label="社交媒体">
          {socials.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <a
                key={item.id}
                className="social-btn"
                href={item.href}
                aria-label={item.label}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              >
                <SocialIcon id={item.id} className="size-5" />
              </a>
            );
          })}
        </nav>

        <p className="eyebrow rise d7">精选</p>
        <ul className="link-list">
          {links.map((link, i) => {
            const external = link.href.startsWith("http");
            const delay = `d${i + 8}`;
            return (
              <li key={link.id} className={`rise ${delay}`}>
                <a
                  className={link.featured ? "link-card link-card-primary" : "link-card"}
                  href={link.href}
                  {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                >
                  <span className="link-index" aria-hidden="true">
                    {link.index}
                  </span>
                  <span className="link-copy">
                    <span className="link-title">{link.title}</span>
                    <span className="link-note">{link.note}</span>
                  </span>
                  <ArrowUpRight className="chevron size-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="footer rise d12">个人入口</p>
      </main>
    </>
  );
}
