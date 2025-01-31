import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Home, Search, MessageCircle } from "lucide-react";
import Statements from "@/Components/Statements.jsx";

export default function FeedbackLayout() {
    return (
        <div className="grid grid-cols-12 h-screen">
            {/* Sidebar */}
            <aside className="col-span-2 p-4 border-r flex flex-col gap-4">
                <Button variant="ghost" className="flex gap-2">
                    <Home /> Home
                </Button>
                <Button variant="ghost" className="flex gap-2">
                    <Search /> Explore
                </Button>
                <Button variant="ghost" className="flex gap-2">
                    <MessageCircle /> Messages
                </Button>
            </aside>

            {/* Main Feed */}
            <Statements />
            {/* Right Sidebar */}
            <aside className="col-span-3 p-4 border-l space-y-4">
                <Input placeholder="Search Twitter" />
                <Card className="p-4">Trending Topic 1</Card>
                <Card className="p-4">Trending Topic 2</Card>
            </aside>
        </div>
    );
}
