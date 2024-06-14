import fetch from "node-fetch"
import fs from "node:fs"
;(async () => {
  const filePath = "diffs/index.diff"

  const file = fs.readFileSync(filePath, "utf8")
  console.log(file.length)

  return
  const url = new URL("https://slack.com/api/files.getUploadURLExternal")
  url.searchParams = new URLSearchParams({
    filename: "diifs/index.diff",
    length: "2237",
  })

  const data = await fetch("https://slack.com/api/files.getUploadURLExternal")
  const json = await data.json()
  console.log(json)

  console.log("Hello World from main.js!")
})()
