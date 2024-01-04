const axios = require("axios")
const { JSDOM } = require("jsdom")

const url = "https://rayongwit.ac.th/%e0%b8%95%e0%b8%b2%e0%b8%a3%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%99-2/"

async function getTimetables() {
    const res = await axios.get(url)
    const dom = new JSDOM(res.data, {})
    const document = dom.window.document;

    const result = []

    for (const element of document.querySelectorAll(".wp-block-file")) {
        const title = element.querySelector("a")
        const download = element.querySelector(".wp-block-file__button")

        if (title && download) {
            result.push({
                title: title.innerHTML.trim(),
                download: download.getAttribute("href"),
            })
        }
    }
    return result
}

module.exports = { getTimetables }