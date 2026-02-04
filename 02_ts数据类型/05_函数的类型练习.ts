type lytype = {
  name: string,
  text: string
}
// 返回值可以指定也可以不写
function parse(lyric: string) {
  const lyrics: lytype[] = [];
  lyrics.push({ name: 'ssss', text: 'xgyshsx' })
  return lyrics
}
export {}