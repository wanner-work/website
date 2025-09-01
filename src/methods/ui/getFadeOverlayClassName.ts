export default function getFadeOverlay(className?: string) {
  return `bg-linear-to-br from-light/80 to-transparent dark:from-dark/70 dark:to-transparent ${className}`
}
