import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <Spinner size="lg" />
        </div>
    );
};

export default Loading;