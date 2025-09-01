export default function getTextFadeClassName(className?: string) {
  return `inline-block bg-linear-to-br from-[#B7B0A2] to-dark dark:from-[#494642] dark:to-light bg-clip-text text-transparent ${className}`
}
