import { Comment } from "./Comments";

const useComments = () => {
  // let masterData :any = [];

  const addComment = (tree: any, comment: string, parentId: number) => {
    // masterData = tree;
    const newComment = {
      id: new Date().getTime(),
      comment,
      children: [],
      likes: 0,
    };
    tree = Array.isArray(tree) ? tree : [tree];

    console.log(parentId, "[PARENT ID]");
    console.log(tree, "[tree]");

    if (parentId) {
      if (tree.find((t: any) => t.id === parentId)) {
        if (tree[parentId - 1]) {
          console.log("after find tree parent id", tree[parentId - 1]);
          tree[parentId - 1]["children"] = [
            ...tree[parentId - 1]["children"],
            newComment,
          ];
        } else {
          tree["children"] = [...tree[0]["children"], newComment];
        }
        return tree;
      } else {
        console.log("inside else");
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

  return { addComment };
};

export default useComments;
