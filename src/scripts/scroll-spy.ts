/**
 * Shared scroll-spy: highlights active nav link and animates a floating dot
 * between links in both side-nav and mobile-nav.
 */

const DOT_RADIUS = 2.5; // half of the 5px dot defined in global.css
const BOTTOM_THRESHOLD = 50; // px from bottom to snap to last section
const SECTION_TOP_OFFSET = 120; // px from viewport top to consider "entered"

export function initScrollSpy() {
  const sideNavInner = document.querySelector('.side-nav__inner');
  const mobileNav = document.querySelector('.mobile-nav');
  const allNavLinks = document.querySelectorAll<HTMLAnchorElement>(
    '.side-nav__link, .mobile-nav__link'
  );

  if (allNavLinks.length === 0) return;

  // Pre-compute href → id mapping so we don't parse strings on every scroll tick
  const linkIdMap = new Map<Element, string>();
  const uniqueIds: string[] = [];
  allNavLinks.forEach((link) => {
    const id = link.getAttribute('href')?.replace('#', '');
    if (id) {
      linkIdMap.set(link, id);
      if (!uniqueIds.includes(id)) uniqueIds.push(id);
    }
  });

  const sections = uniqueIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  // Create floating dots
  let sideDot: HTMLElement | null = null;
  let mobileDot: HTMLElement | null = null;

  if (sideNavInner) {
    sideDot = document.createElement('span');
    sideDot.className = 'nav-dot';
    sideNavInner.appendChild(sideDot);
  }
  if (mobileNav) {
    mobileDot = document.createElement('span');
    mobileDot.className = 'nav-dot';
    mobileNav.appendChild(mobileDot);
  }

  function positionDot(dot: HTMLElement, activeLink: HTMLAnchorElement, container: Element) {
    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (container.classList.contains('side-nav__inner')) {
      dot.style.top = (linkRect.top - containerRect.top + linkRect.height / 2 - DOT_RADIUS) + 'px';
      dot.style.left = '';
      dot.style.right = '-12px';
    } else {
      dot.style.top = '';
      dot.style.bottom = '4px';
      dot.style.left = (linkRect.left - containerRect.left + linkRect.width / 2 - DOT_RADIUS) + 'px';
    }
  }

  function updateActiveNav() {
    let currentId = 'top';
    const atBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - BOTTOM_THRESHOLD);
    const lastId = uniqueIds[uniqueIds.length - 1];

    if (atBottom && lastId) {
      currentId = lastId;
    } else {
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= SECTION_TOP_OFFSET) {
          currentId = section.id;
        }
      }
    }

    allNavLinks.forEach((link) => {
      link.classList.toggle('is-active', linkIdMap.get(link) === currentId);
    });

    if (sideDot && sideNavInner) {
      const activeLink = sideNavInner.querySelector<HTMLAnchorElement>('.side-nav__link.is-active');
      if (activeLink) positionDot(sideDot, activeLink, sideNavInner);
    }

    if (mobileDot && mobileNav) {
      const activeLink = mobileNav.querySelector<HTMLAnchorElement>('.mobile-nav__link.is-active');
      if (activeLink) positionDot(mobileDot, activeLink, mobileNav);
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav, { passive: true });
  updateActiveNav();
}
