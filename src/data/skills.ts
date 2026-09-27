export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Linguagens', items: ['TypeScript', 'JavaScript', 'Python'] },
  { label: 'Back-end', items: ['Node.js','express', 'Nest.js','ORMs', 'PostgreSQL', 'MongoDB'] },
  { label: 'Front-end', items: ['JavaScript','React.js', 'HTML5', 'CSS3'] },
  { label: 'Infra & nuvem', items: ['Docker', 'AWS', 'CI/CD'] },
]
