import { useCallback, useState } from "react";
import { SEED } from "../utils/constants";
import { createAvatar } from "@dicebear/core";
import { openPeeps } from "@dicebear/collection";

interface useRandomAvatarProps {
    currentAvatar: string | undefined;
}

function useRandomAvatar({ currentAvatar }: useRandomAvatarProps) {

    const generateRandomAvatar = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * SEED.length);

        return  createAvatar(openPeeps, {
            size: 1280,
            seed: SEED[randomIndex],
            accessoriesProbability: 35,
            facialHairProbability: 30,
            maskProbability: 20,
        }).toDataUriSync();
    }, []);

    const [avatar, setAvatar] = useState(currentAvatar ?? generateRandomAvatar);

    const handleRandomizeAvatar = () => {
        setAvatar(generateRandomAvatar());
    }

    return { avatar, handleRandomizeAvatar };

}

export default useRandomAvatar;