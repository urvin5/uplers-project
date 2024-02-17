import React from "react";

export default function Tooltip() {
  return (
    <div className="table-container">
      <div className="table-row">
        <div className="table-cell" data-tooltip="Tooltip 1"></div>
        <div className="table-cell" data-tooltip="Tooltip 2"></div>
        <div className="table-cell" data-tooltip="Tooltip 3"></div>
      </div>
      <div className="table-row">
        <div className="table-cell" data-tooltip="Tooltip 4"></div>
        <div className="table-cell" data-tooltip="Tooltip 5"></div>
        <div className="table-cell" data-tooltip="Tooltip 6"></div>
      </div>
      <div className="table-row">
        <div className="table-cell" data-tooltip="Tooltip 7"></div>
        <div className="table-cell" data-tooltip="Tooltip 8"></div>
        <div className="table-cell" data-tooltip="Tooltip 9"></div>
      </div>
    </div>
  );
}
