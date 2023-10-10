// src/components/TreeNode.js
import React, { useState } from "react";

const TreeNode = ({ data, onAddChild, onAddParent, isRoot }) => {
  const [childNodes, setChildNodes] = useState([]);
  const [nodeName, setNodeName] = useState(data);

  const handleAddChild = () => {
    const childNodeName = prompt("Enter child node name:");
    if (childNodeName) {
      setChildNodes([...childNodes, { data: childNodeName }]);
      onAddChild();
    }
  };

  const handleAddParent = () => {
    const parentNodeName = prompt("Enter parent node name:");
    if (parentNodeName) {
      onAddParent(parentNodeName);
    }
  };

  return (
    <div className={`tree-node ${isRoot ? "root" : ""}`}>
      <div className="node-content">
        <span>{nodeName}</span>
        <button onClick={handleAddChild}>Add Child</button>
        <button onClick={handleAddParent}>Add Parent</button>
      </div>
      {childNodes.length > 0 && (
        <div className={`children ${isRoot ? "root-children" : ""}`}>
          {childNodes.map((child, index) => (
            <TreeNode
              key={index}
              data={child.data}
              onAddChild={() => {}}
              onAddParent={() => {}}
              isRoot={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
