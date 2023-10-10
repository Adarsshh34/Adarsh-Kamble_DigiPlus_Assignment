// src/components/Tree.js
import React, { useState } from "react";
import TreeNode from "./TreeNode";

const Tree = () => {
  const [rootNode, setRootNode] = useState(null);

  const handleAddRootNode = () => {
    const rootNodeName = prompt("Enter root node name:");
    if (rootNodeName) {
      setRootNode({ data: rootNodeName });
    }
  };

  return (
    <div className="tree-container">
      <button onClick={handleAddRootNode}>Add Root Node</button>
      {rootNode && (
        <TreeNode
          data={rootNode.data}
          onAddChild={() => {}}
          onAddParent={(parentNodeName) => {
            const newRootNode = {
              data: parentNodeName,
              childNodes: [rootNode]
            };
            setRootNode(newRootNode);
          }}
        />
      )}
    </div>
  );
};

export default Tree;
