type Color =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined

export function classColor(className: string): Color {
  if (className === "Guardian") return "primary"
  if (className === "Seeker") return "warning"
  if (className === "Survivor") return "error"
  if (className === "Mystic") return "secondary"
  if (className === "Neutral") return "default"
  if (className === "Rogue") return "success"
}
