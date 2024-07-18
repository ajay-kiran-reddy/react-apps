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

  const deleteNode = (tree: any, folderId: number, isFolder: boolean) => {
    if (tree.id === folderId) {
      if (isFolder) {
        tree.children = [];
      } else {
        delete tree.id;
        delete tree.name;
        delete tree.isFolder;
        delete tree.children;
      }
      return tree;
    } else {
      let filterdData = [];
      filterdData = tree?.children?.map((child: any) => {
        return deleteNode(child, folderId, isFolder);
      });
      return { ...tree, children: filterdData };
    }
  };

  const editNode = (tree: any, itemId: number, name: string) => {
    if (tree.id === itemId) {
      tree.name = name;
      return tree;
    } else {
      let finalData = [];
      finalData = tree?.children?.map((child: any) => {
        return editNode(child, itemId, name);
      });
      return { ...tree, children: finalData };
    }
  };

  return { insertNode, deleteNode, editNode };
};

export default useFileActions;
