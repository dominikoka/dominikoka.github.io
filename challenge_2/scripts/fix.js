function findStylesheetsInImportedDocs(doc, map) {
    map = map || {};
    // map = map || new Map();
    Array.prototype.forEach.call(doc.querySelectorAll('link[rel=import]'), (e) => {
        const importedDoc = e.import;
    if (importedDoc && !map[importedDoc]) {
        const styles = importedDoc.querySelectorAll('style,link[rel=stylesheet]');
        if (styles.length) {
            map[importedDoc.URL] = {
                doc: importedDoc,
                styles: styles
            };
            // map.set(importedDoc, styles);
        }
        findStylesheetsInImportedDocs(importedDoc, map)
    }
});
    return map;
}
console.log(findStylesheetsInImportedDocs(document));