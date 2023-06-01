# Node.js Essential Training 2.

The `analyze` function should gather information about a folder and its content.
The function should return an object that will have the following format.

```typescript
{
    totalFiles: number; // Contains total count of files in the folder and all its sub-folders.
    totalSubFolders: number; // Contains total count of subfolders in the folder and all its sub-folders.
    fileTypesInformation: FileTypeInformation[]; // Contains an array of FileTypeInformation objects that are described below.
}
```


The `FileTypeInformation` object type has the following format.

```typescript
{
    fileExtension: string; // Contains file extension. This should be unique in the whole fileTypesInformation array.
    fileCount: number; // Contains total count of files with such extension in the folder and all its sub-folders.
}
```
Create a file analyze.js that will export a function that implements expected behavior.
The callback function passed to the `analyze` function should be called with the result object that has the format described in the beginning of the task.
The first parameter of the callback will be an error object in case any occurred, the second parameter will be result.
Keep in mind the node.js callback pattern.  