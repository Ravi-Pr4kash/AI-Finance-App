import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
           <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
           <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
           <p>
            Oops! The Page you&apos;re looking for doesn&apos;t exist or has been moved
           </p>
           <Link href='/'>
                <Button>
                    Return Home
                </Button>
           </Link>
        </div>
    )
}

export default NotFound;