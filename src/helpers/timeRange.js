export const timeRange = () => {
  const currentLength = []
  for (let i = 9; i <= 17; i++) {
    currentLength.push({"value": `${i}:00`,"label":`${i}:00` })
    currentLength.push({"value": `${i}:30`,"label":`${i}:30` })
  }

  return currentLength
}