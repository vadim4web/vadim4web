export default {
  circleIntersection: ([a, b], [x, y], r) => r * r * (-Math.sin((d = 2 * Math.acos(Math.hypot(x - a, y - b) / (2 * r)))) + d) | 0,

  reverse: a => a.map(a.pop, [...a]),

  productFib: (p) => {
    let [a, b] = [1, 1]
    while (a * b < p) [a, b] = [b, a + b]
    return [a, b, a * b === p]
  },

  spinWords: s => s.replace(/\b\w{5,}\b/g, w => w.split('').reverse().join('')),

  arrayDiff: (a, b) => a.filter(d => !b.includes(d)),

  pigIt: s => s.replace(/\b(\w)(\w*)\b/g, '$2$1ay'),

  longest: (a, b) => [...new Set(a + b)].sort().join(''),

  nbYear: (p0, pr, a, p, y = 0) =>
    p0 >= p ? y : nbYear(Math.floor(p0 * (1 + pr / 100) + a), pr, a, p, y + 1),

  rot13: (m) => m.replace(/[a-zA-Z]/g, (c) => String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13))),

  chunk: (arr, size) => arr.reduce((A, e, i) => (i % size === 0 && A.push([]), A.at(-1).push(e), A), []),

  join: (arr1, arr2) => [...arr1, ...arr2].reduce((a, o) => (a.find(e => e.id === o.id) ? Object.assign(a.find(e => e.id === o.id), o) : a.push(o), a), []).sort((a, b) => a.id - b.id),

  translateToUkrainian: async (engText) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=uk&dt=t&q=${engText}`
    const response = await fetch(url)
    const json = await response.json()
    return json[0][0][0] || engText
  }
}