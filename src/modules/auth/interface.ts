export interface AuthState {
    readonly isAuthenticated: boolean,
    readonly actionType: string;
    readonly error?: string;
    readonly isLoading: boolean;
}

export interface AuthProps {
    actionType? : string;
    error?: string;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: () => void;
}