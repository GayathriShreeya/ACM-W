import React from "react";

const PopupBox = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8">
                <p>Content of the Pop up box is right here</p>
                <button className="bg-red text-white px-4 py-2 mt-4 rounded-md" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PopupBox;