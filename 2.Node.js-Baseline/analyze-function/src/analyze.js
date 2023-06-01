/**
 * @param folderPath: {String}
 * @param callback: {Function}
 */

const path = require("path");
const fs = require("fs");

function analyze (folderPath, callback) {
    try {
        let countFiles = 0;
        let countSubFolder = 0;
        let filesExtension = [];

        function throughDirectory(folderPath) {
            fs.readdirSync(folderPath).forEach(File => {
                const Absolute = path.join(folderPath, File);
                if (fs.statSync(Absolute).isDirectory()) {
                    countSubFolder += 1;
                    return throughDirectory(Absolute);
                }
                else {
                    countFiles += 1;
                    return filesExtension.push(File.substring(File.lastIndexOf('.'), File.length))
                }
            }); 


            let uniqSpisokExtension = [...new Set(filesExtension)];
            let arrayConsistingOfObject = [];

            for (let extension of uniqSpisokExtension) {
                let chunkObject = {
                    fileExtension: "", 
                    fileCount: 0
                };
                let exCount = 0
                for (const element of filesExtension) {
                    if (element === extension) {
                        exCount += 1;
                    }
                }
                chunkObject.fileExtension = extension
                chunkObject.fileCount = exCount

                arrayConsistingOfObject.push(chunkObject)
            }

            let aboutFolderInformation = {
                totalFiles: countFiles,
                totalSubFolders: countSubFolder,
                fileTypesInformation: arrayConsistingOfObject
            };

            return aboutFolderInformation
        }
        
        callback(null, throughDirectory(folderPath));
    } catch {
        callback(new Error('Task not implemented'))
    }
}

module.exports = analyze;
