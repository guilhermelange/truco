import FormService, { IUserStartMatch } from "../../domain/usecase/form/FormService";

export default function FormViewModel() {
    const service = new FormService();

    function startMatch(data: IUserStartMatch[]): void {
        service.startMatch(data);
    }

    return {
        startMatch
    }
}