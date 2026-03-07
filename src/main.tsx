import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Patch DOM methods to prevent "removeChild" errors caused by browser extensions
// that modify the DOM tree outside of React's control.
const originalRemoveChild = Node.prototype.removeChild;
// @ts-ignore
Node.prototype.removeChild = function <T extends Node>(child: T): T {
  if (child.parentNode !== this) {
    console.warn("removeChild: node is not a child of this node", child);
    return child;
  }
  return originalRemoveChild.call(this, child) as T;
};

const originalInsertBefore = Node.prototype.insertBefore;
// @ts-ignore
Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
  if (referenceNode && referenceNode.parentNode !== this) {
    console.warn("insertBefore: reference node is not a child of this node", referenceNode);
    return newNode;
  }
  return originalInsertBefore.call(this, newNode, referenceNode) as T;
};

createRoot(document.getElementById("root")!).render(<App />);
