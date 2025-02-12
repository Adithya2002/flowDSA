"use client"
import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import ProblemDescription from '@/components/ProblemDescription'
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
import {python} from "@codemirror/lang-python"

// const tags = Array.from({ length: 50 }).map(
//     (_, i, a) => `v1.2.0-beta.${a.length - i}`
// )

const ProblemPage = ({params}) => {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-full rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={50}>
                <div className="flex h-screen items-center justify-center">
                    <ScrollArea className="h-[100vh] w-full rounded-md border">
                        <h1>{params.problemId}</h1>
                        <div className="p-4">
                            <ProblemDescription/>
                        </div>
                    </ScrollArea>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel className='bg-[#282828]' defaultSize={75}>
                        <div className="w-full overflow-auto">
                            <CodeMirror
                            theme={vscodeDark}
                            extensions={[python()]}
                            style={{fontSize:16}}
                            />
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

export default ProblemPage