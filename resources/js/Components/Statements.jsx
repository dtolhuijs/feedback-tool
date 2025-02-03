import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Statements() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("/api/debate/1")
            .then((response) => {
                // mold the data to your needs
                // parent -> children -> children etc.
                setPosts(response.data.statements);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <main className="col-span-7 p-4 space-y-4">
            <Card className="p-4 space-y-2">
                <Input placeholder="What's happening?" />
                <Button className="w-full">Add new statement</Button>
            </Card>

            {posts.map((post) => (
                <Card key={post.id} className="p-4">
                    <p>{post.content}</p>
                </Card>
            ))}
        </main>
    );
}
