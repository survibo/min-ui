const colors = [
  ['#2563eb', '#60a5fa'],
  ['#d97706', '#fbbf24'],
  ['#15803d', '#4ade80'],
  ['#dc2626', '#f87171'],
  ['#7c3aed', '#c084fc'],
  ['#0369a1', '#38bdf8'],
  ['#be185d', '#f472b6'],
  ['#475569', '#94a3b8'],
  ['#0f766e', '#5eead4'],
] as const;

export const storyImage = (index: number) => {
  const [from, to] = colors[index % colors.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${from}"/>
          <stop offset="1" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill="url(#g)"/>
      <circle cx="520" cy="110" r="80" fill="#ffffff" opacity=".22"/>
      <circle cx="130" cy="360" r="130" fill="#000000" opacity=".14"/>
      <path d="M96 320l92-96 74 72 56-54 226 198H96z" fill="#ffffff" opacity=".35"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
