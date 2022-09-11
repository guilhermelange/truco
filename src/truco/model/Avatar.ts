export default class Avatar {
    private _status: AvatarStatus;
    private _direction: AvatarDirection;

    constructor(status: AvatarStatus, direction: AvatarDirection) {
        this._status = status;
        this._direction = direction;
    }

    public get direction(): AvatarDirection {
        return this._direction;
    }
    public set direction(value: AvatarDirection) {
        this._direction = value;
    }
    
    public get status(): AvatarStatus {
        return this._status;
    }
    public set status(value: AvatarStatus) {
        this._status = value;
    }
}

export enum AvatarStatus {
    ONLINE, OFFLINE
}

export enum AvatarDirection {
    TOP, BOTTOM, RIGHT, LEFT
}