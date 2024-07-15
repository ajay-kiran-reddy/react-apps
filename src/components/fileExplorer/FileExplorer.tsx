import masterData from "./mockData.json";
import "./fileExplorer.css";
import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { LuFilePlus } from "react-icons/lu";
import useFileActions from "./useFileActions";
import { CiFileOn } from "react-icons/ci";
import { LuDelete } from "react-icons/lu";
import { MdEdit } from "react-icons/md";

const FileExplorerTree = (props: any) => {
  const { data, onAddDataCb, onDeleteDataCb, onEditDataCb } = props;
  const [hide, setHide] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { insertNode, deleteNode, editNode } = useFileActions();
  const [selectedNode, setSelectedNode]: any = useState({
    isFolder: false,
    folderId: null,
  });
  const [isEdititng, setIsEditing] = useState(false);
  const [actions, setActions] = useState({
    open: false,
    activeId: null,
  });

  const handleHideFolder = () => {
    setHide(!hide);
  };

  const handleNewFolderClick = (e: any, node: any) => {
    e.stopPropagation();
    setIsEditing(false);
    setShowInput(true);
    setHide(false);
    setSelectedNode({
      folderId: node.id,
      isFolder: true,
    });
  };

  const handleNewFileClick = (e: any, node: any) => {
    e.stopPropagation();
    setShowInput(true);
    setIsEditing(false);
    setHide(false);
    setSelectedNode({
      folderId: node.id,
      isFolder: false,
    });
  };

  const onAddNode = (event: any) => {
    const data = {
      name: inputValue,
      isFolder: selectedNode.isFolder,
      folderId: selectedNode.folderId,
    };

    if (event.keyCode === 13) {
      if (isEdititng) {
        console.log(isEdititng, "[is eiting]");
        onEditDataCb({ name: inputValue, itemId: selectedNode.folderId });
      } else {
        onAddDataCb(data);
        setSelectedNode({
          folderId: null,
          isFolder: false,
        });
      }
      setShowInput(false);
      setInputValue("");
    }
  };

  const handleData = (cbData: any) => {
    const { name, isFolder, folderId } = cbData;
    const resultTree = insertNode(data, name, folderId, isFolder);
    return resultTree;
  };

  const handleOnBlur = () => {
    setInputValue("");
    setShowInput(false);
  };

  const handleDeleteData = (cbData: any) => {
    const { isFolder, folderId } = cbData;
    const resultTree = deleteNode(data, folderId, isFolder);
    return resultTree;
  };

  const handleDeleteClick = (
    event: any,
    folderId: number,
    isFolder: boolean
  ) => {
    event.stopPropagation();
    onDeleteDataCb({
      folderId,
      isFolder,
    });
  };

  const handleEditClick = (event: any, folderData: any) => {
    console.log("clicking edit icon", folderData);
    event.stopPropagation();
    setIsEditing(true);
    setShowInput(true);
    setInputValue(folderData.name);
    setSelectedNode({
      folderId: folderData.id,
      isFolder: true,
    });
  };

  const handleEditData = (cbData: any) => {
    const { name, itemId } = cbData;
    const resultTree = editNode(data, itemId, name);
    setIsEditing(false);
    return resultTree;
  };

  return (
    <>
      <div className="fileContainer">
        {data.isFolder ? (
          <>
            <div
              className={"folder"}
              onClick={handleHideFolder}
              onMouseEnter={() => setActions({ open: true, activeId: data.id })}
              onMouseLeave={() => setActions({ open: false, activeId: null })}
            >
              📁 {data.name}
              {actions.open && (
                <div id="actions">
                  <LuDelete
                    onClick={(e) =>
                      handleDeleteClick(e, data.id, data.isFolder)
                    }
                  />
                  <span
                    style={{ paddingTop: "5px" }}
                    onClick={(e) => handleEditClick(e, data)}
                  >
                    <MdEdit />
                  </span>
                </div>
              )}
              <span
                style={{ paddingTop: "5px" }}
                onClick={(e) => handleNewFolderClick(e, data)}
              >
                <FiFolderPlus />
              </span>
              <span
                style={{ paddingTop: "5px" }}
                onClick={(e) => handleNewFileClick(e, data)}
              >
                <LuFilePlus />
              </span>
            </div>

            <div
              style={{ display: hide ? "none" : "block", marginLeft: "15px" }}
            >
              {data?.children.map((d: any) => {
                return (
                  <FileExplorerTree
                    data={d}
                    onAddDataCb={handleData}
                    onDeleteDataCb={handleDeleteData}
                    onEditDataCb={handleEditData}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div
            className="fileItem"
            onMouseEnter={() => setActions({ open: true, activeId: data.id })}
            onMouseLeave={() => setActions({ open: false, activeId: null })}
          >
            <CiFileOn /> {data.name}
            {actions.open && (
              <div id="actions">
                <span style={{ marginRight: "5px" }}>
                  <LuDelete
                    onClick={(e) =>
                      handleDeleteClick(e, data.id, data.isFolder)
                    }
                  />
                </span>
                <span
                  style={{ paddingTop: "5px" }}
                  onClick={(e) => handleEditClick(e, data)}
                >
                  <MdEdit />
                </span>
              </div>
            )}
          </div>
        )}

        {showInput && (
          <div className="newFolder">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => onAddNode(e)}
              autoFocus
              onBlur={handleOnBlur}
            />
          </div>
        )}
      </div>
    </>
  );
};

const FileExplorer = () => {
  const [data, setData]: any = useState(masterData);
  const { insertNode, deleteNode, editNode } = useFileActions();

  const handleData = (cbData: any) => {
    const { name, isFolder, folderId } = cbData;
    const resultTree = insertNode(data, name, folderId, isFolder);
    setData(resultTree);
  };

  const handleDeleteData = (cbData: any) => {
    const { isFolder, folderId } = cbData;
    const results = deleteNode(data, folderId, isFolder);
    setData(results);
  };

  const handleEditData = (cbData: any) => {
    const { name, itemId } = cbData;
    const resultTree = editNode(data, itemId, name);
    setData(resultTree);
  };

  return (
    <FileExplorerTree
      data={data}
      onAddDataCb={handleData}
      onDeleteDataCb={handleDeleteData}
      onEditDataCb={handleEditData}
    />
  );
};

export { FileExplorerTree };
export default FileExplorer;
