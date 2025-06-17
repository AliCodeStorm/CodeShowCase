// components/CodeModalButton.tsx
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CodeModalButtonProps {
    componentName: string;
    code: string;
}

export const CodeModalButton: React.FC<CodeModalButtonProps> = ({ componentName, code }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    title="View Code"
                    className="text-muted-foreground hover:text-primary"
                >
                    <span className="text-lg font-mono">{'</>'}</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-lg">{componentName} Code</DialogTitle>
                </DialogHeader>

                <ScrollArea className="h-[400px] rounded-md border bg-muted p-4">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-foreground">
                        {code}
                    </pre>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
