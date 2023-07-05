export default function track(
  category: string,
  action: string,
  label: string,
  value?: string,
  fieldsObject?: { nonInteraction: boolean },
) {
  if ("ga" in window) {
    window.ga("send", "event", category, action, label, value, fieldsObject);
  }
  if ("gtag" in window) {
    window.gtag("event", `${category}_${action}_${label}`, { value });
  }
}
