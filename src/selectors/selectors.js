/**
 * Created by zenymax on 2/27/17.
 */
export function authorsFormattedForDropdown(author) {
  const tmp = []
  for (var i=0;i<author.length;i++) {
    tmp.push({
      value: author[i].id,
      text: author[i].firstName+' '+author[i].lastName
    })
  }
  return tmp
}

