const { pdf } = require("pdf-to-img");
const fs = require('fs')
const axios = require('axios').default

const originDoc = JSON.parse(fs.readFileSync("public/app/docs-origin.json", "utf-8"))

async function main() {
    let docID = -1

    for (const od of originDoc) {
        docID++

        if (!od.source.endsWith(".pdf")) {
            continue
        }

        const pdfRes = await axios.get(od.source, { responseType: "arraybuffer" })
        fs.writeFileSync("temp.pdf", pdfRes.data)
        const doc = await pdf("temp.pdf", { scale: 0.7 })

        for await (const page of doc) {
            fs.writeFileSync(`public/app/doc-thumbnails/${docID}.png`, page)
            break
        }

        originDoc[docID]['thumbnail'] = `${docID}.png`
    }

    fs.writeFileSync("public/app/docs.json", JSON.stringify(originDoc))
}

main()