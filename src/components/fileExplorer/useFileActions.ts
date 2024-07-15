const useFileActions = () => {
  const insertNode = (
    tree: any,
    name: string,
    folderId: any,
    isFolder: boolean
  ) => {
    if (tree.id === folderId && tree.isFolder) {
      const newItem = {
        id: new Date().getTime(),
        isFolder,
        children: [],
        name,
      };
      tree.children.unshift(newItem);
      return tree;
    } else {
      let finalData = [];
      finalData = tree?.children?.map((t: any) => {
        return insertNode(t, name, folderId, isFolder);
      });
      return { ...tree, children: finalData };
    }
  };

  return { insertNode };
};

export default useFileActions;
