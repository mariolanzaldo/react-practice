import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
    id: string;
    onReload: () => void;
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
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errMsg: error.message || "unknown error" };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    handleReload(): void {
        this.props.onReload();
        this.setState({
            hasError: false,
            errMsg: null,
        })
    }

    errorMessage() {

        const { onReload } = this.props;
        // console.log(onReload);
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
            // You can render any custom fallback UI
            return this.errorMessage();
        }

        return this.props.children;
    }
}
