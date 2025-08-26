export default function getFadeClassName(className?: string) {
  return `from-dark dark:from-light to-dark/40 dark:to-light/40 bg-gradient-to-br ${className}`
}
