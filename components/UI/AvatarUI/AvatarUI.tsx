import React from "react";
import {Avatar} from "../../../types/UI/Avatar";

const AvatarUI: React.FC<Avatar> = (avatars) => {
    return (
        <div className="profile__avatar">
            <img
                src={avatars.src}
                alt={avatars.alt}
                className="profile__image"
            />
        </div>
    )
}

export default AvatarUI;