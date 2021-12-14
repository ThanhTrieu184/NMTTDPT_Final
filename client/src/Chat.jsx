import React from "react";

const Chat = ({ msg }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xl max-w-sm mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-xl inline-block rounded-br-none bg-blue-500 text-white shadow">
              {msg}
            </span>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          alt="My profile"
          className="w-6 h-6 rounded-full order-2"
        />
      </div>
    </div>
  );
};

export default Chat;
