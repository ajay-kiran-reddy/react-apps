const useFileActions = () => {
  const insertNode = (
    tree: any,
    name: string,
    node: any,
    isFolder: boolean
  ) => {
    if (tree.id === node.id) {
      const newItem = {
        id: new Date().getTime(),
        isFolder,
        children: [],
        name,
      };
      tree.children.unshift(newItem);
      return tree;
    }
  };

  return { insertNode };
};

export default useFileActions;
