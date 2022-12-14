import { Avatar, AvatarBadge } from "@chakra-ui/react";
import User, { UserDirection } from "../../truco/domain/model/User";

interface AvatarRequest {
    user: User;
    direction: UserDirection
}

export default function AvatarComponent({ user, direction }: AvatarRequest) {
    if (!user) {
        return (
            <div></div>
        )
    }

    switch (direction) {
        case UserDirection.TOP:
            return (
                <Avatar position={'absolute'}
                    top={4}
                    left={'50%'}
                    transform='translate(-50%, -50%)'
                    name={user.name}>
                    <AvatarBadge boxSize='1.25em' bg={'green.500'} />
                </Avatar>
            )
            break;
        case UserDirection.LEFT:
            return (
                <Avatar position={'absolute'}
                    left={4}
                    top={'50%'}
                    transform='translate(-50%, -50%)'
                    name={user.name}>
                    <AvatarBadge boxSize='1.25em' bg={'green.500'} />
                </Avatar>
            )
        case UserDirection.BOTTOM:
            return (
                <Avatar position={'absolute'}
                    bottom={0}
                    left={'50%'}
                    transform='translate(-50%, -0%)'
                    name={user.name}>
                    <AvatarBadge boxSize='1.25em' bg={'green.500'} />
                </Avatar>
            )
        case UserDirection.RIGHT:
            return (
                <Avatar position={'absolute'}
                    right={0}
                    top={'50%'}
                    transform='translate(-0%, -50%)'
                    name={user.name}>
                    <AvatarBadge boxSize='1.25em' bg={'green.500'} />
                </Avatar>
            )
        default:
            return (
                <Avatar position={'absolute'}
                    // bottom={direction == UserDirection.BOTTOM ? spacing : 'auto'}
                    // top={direction == UserDirection.TOP ? spacing : 'auto'}
                    // left={direction == UserDirection.LEFT ? spacing : 'auto'}
                    // right={direction == UserDirection.RIGHT ? spacing : 'auto'}
                    name={user.name}>
                    <AvatarBadge boxSize='1.25em' bg={'green.500'} />
                </Avatar>
            )
    }
}