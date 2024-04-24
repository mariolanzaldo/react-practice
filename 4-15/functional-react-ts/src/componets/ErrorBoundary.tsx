import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
    id: number;
    onReload: (id: number) => void;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errMsg: string | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            errMsg: null,
        };

        this.handleReload = this.handleReload.bind(this);
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, errMsg: error.message || "unknown error" };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    handleReload(): void {
        const {id } = this.props;
        this.setState({
            hasError: false,
            errMsg: null,
        })
        this.props.onReload(id);
    }

    errorMessage() {

        const { onReload } = this.props;
        return (
            <>
                <h3>
                    {this.state.errMsg}
                </h3>

                {
                    onReload! && <button
                        onClick={this.handleReload}
                    >Reload</button>
                }
            </>
        );
    }

    render() {
        if (this.state.hasError) {
            return this.errorMessage();
        }

        return this.props.children;
    }
}
