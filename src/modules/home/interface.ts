export interface HomeState {
    readonly actionType: string;
    readonly error?: string;
    readonly isLoading: boolean;
}