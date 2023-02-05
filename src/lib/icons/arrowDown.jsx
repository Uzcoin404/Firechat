import React from "react";

function ArrowDown({ width = 11, height = 7, color = "#000", className = "", style }) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11 7"
        >
            <path d="M10.5469 2.26172L6.09375 6.45117C5.94727 6.59766 5.77148 6.65625 5.625 6.65625C5.44922 6.65625 5.27344 6.59766 5.12695 6.48047L0.673828 2.26172C0.380859 1.99805 0.380859 1.55859 0.644531 1.26562C0.908203 0.972656 1.34766 0.972656 1.64062 1.23633L5.625 4.98633L9.58008 1.23633C9.87305 0.972656 10.3125 0.972656 10.5762 1.26562C10.8398 1.55859 10.8398 1.99805 10.5469 2.26172Z" fill={color}/>
        </svg>
    );
}
export default ArrowDown;
