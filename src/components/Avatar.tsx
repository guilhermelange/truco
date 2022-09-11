import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { AvatarStatus, AvatarDirection } from "../truco/model/Avatar";

interface AvatarRequest {
    name: string,
    status: AvatarStatus,
    direction: AvatarDirection
}

export default function AvatarComponent({ name, status, direction }: AvatarRequest) {
    switch (direction) {
        case AvatarDirection.TOP:
            return (
                <Avatar position={'absolute'}
                    top={4}
                    left={'50%'}
                    transform='translate(-50%, -50%)'
                    name={name}>
                    <AvatarBadge boxSize='1.25em' bg={status == AvatarStatus.ONLINE ? 'green.500' : 'whiteAlpha.700'} />
                </Avatar>
            )
            break;
        case AvatarDirection.LEFT:
            return (
                <Avatar position={'absolute'}
                    left={4}
                    top={'50%'}
                    transform='translate(-50%, -50%)'
                    name={name}>
                    <AvatarBadge boxSize='1.25em' bg={status == AvatarStatus.ONLINE ? 'green.500' : 'whiteAlpha.700'} />
                </Avatar>
            )
        case AvatarDirection.BOTTOM:
            return (
                <Avatar position={'absolute'}
                    bottom={0}
                    left={'50%'}
                    transform='translate(-50%, -0%)'
                    name={name}>
                    <AvatarBadge boxSize='1.25em' bg={status == AvatarStatus.ONLINE ? 'green.500' : 'whiteAlpha.700'} />
                </Avatar>
            )
        case AvatarDirection.RIGHT:
            return (
                <Avatar position={'absolute'}
                    right={0}
                    top={'50%'}
                    transform='translate(-0%, -50%)'
                    name={name}>
                    <AvatarBadge boxSize='1.25em' bg={status == AvatarStatus.ONLINE ? 'green.500' : 'whiteAlpha.700'} />
                </Avatar>
            )
        default:
            return (
                <Avatar position={'absolute'}
                    // bottom={direction == AvatarDirection.BOTTOM ? spacing : 'auto'}
                    // top={direction == AvatarDirection.TOP ? spacing : 'auto'}
                    // left={direction == AvatarDirection.LEFT ? spacing : 'auto'}
                    // right={direction == AvatarDirection.RIGHT ? spacing : 'auto'}
                    name={name}>
                    <AvatarBadge boxSize='1.25em' bg={status == AvatarStatus.ONLINE ? 'green.500' : 'whiteAlpha.700'} />
                </Avatar>
            )
    }
}