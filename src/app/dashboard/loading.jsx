const DashboardLoading = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="h-12 w-48 bg-gray-200 rounded-xl animate-pulse mb-8" />

            <div className="flex gap-3 mb-8">
                <div className="h-10 w-32 bg-gray-200 rounded-xl animate-pulse" />
                <div className="h-10 w-32 bg-gray-200 rounded-xl animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-3">
                        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                        <div className="flex gap-3 pt-3 border-t border-gray-100">
                            <div className="flex-1 h-9 bg-gray-200 rounded-xl animate-pulse" />
                            <div className="flex-1 h-9 bg-gray-200 rounded-xl animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardLoading;