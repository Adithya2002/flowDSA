import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import ProblemDescription from '@/components/ProblemDescription'

// const tags = Array.from({ length: 50 }).map(
//     (_, i, a) => `v1.2.0-beta.${a.length - i}`
// )

const page = () => {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-full rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={50}>
                <div className="flex h-screen items-center justify-center">
                    <ScrollArea className="h-[100vh] w-full rounded-md border">
                        <div className="p-4">
                            <ProblemDescription/>
                        </div>
                    </ScrollArea>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}

export default page