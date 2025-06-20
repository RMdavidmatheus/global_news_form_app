export default function FooterWeb() {
    return (
        <footer className="bg-[#0d2c6d] text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} GlobalNews. All rights reserved.
                </p>
            </div>
        </footer>
    )
}