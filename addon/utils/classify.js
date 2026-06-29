export function classify(str) {
  return str
    .replace(/^[-_.]/, '')
    .replace(/[-_.\s]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^[a-z\d]*/i, (match) => match.charAt(0).toUpperCase() + match.slice(1));
}
