let LastMcVer = "1.18"
let LastPackVer = "1.0.0"

function downloadpack(mcver, ver) {
    let pack = `pack/${mcver}/Improvement_${mcver}_v${ver}.zip`

    if (!ver || !mcver) {
        return window.open(PackPath)
    }
    window.open(pack)
}

function downloadLastPack() {
    window.open(`pack/${LastMcVer}/Improvement_${LastMcVer}_v${LastPackVer}.zip`)
}