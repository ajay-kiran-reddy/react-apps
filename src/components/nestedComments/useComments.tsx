import { Comment } from "./Comments";

const useComments = () => {
  const addComment = (tree: any, comment: string, parentId: number) => {
    const newComment = {
      id: new Date().getTime(),
      comment,
      children: [],
      likes: 0,
    };
    tree = Array.isArray(tree) ? tree : [tree];
    /** If parent is is available identify the index of the parent and
     * insert the new comment in the respective children.
     * else insert it in the main tree array.
     */
    if (parentId) {
      const targetIndex = tree.findIndex((t: any) => t.id === parentId);
      if (targetIndex !== -1) {
        tree[targetIndex].children.push(newComment);
        return tree;
      } else {
        let filteredData: any = [];
        filteredData = tree.map((child: Comment) => {
          return addComment(child, comment, child.id);
        });
        return [...filteredData];
      }
    } else {
      tree.unshift(newComment);
      return tree;
    }
  };

  const editComment = (tree: any, comment: string, parentId: number) => {
    const targetIndex = tree.findIndex((com: any) => com.id === parentId);
    if (targetIndex !== -1) {
      tree[targetIndex].comment = comment;
      return tree;
    } else {
      let filteredData: any = [];
      filteredData = tree.map((child: any) => {
        return editComment(child, comment, parentId);
      });
      return [...filteredData];
    }
  };

  return { addComment, editComment };
};

export default useComments;
